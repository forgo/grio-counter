const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const bigInt = require('big-integer')

const HttpStatus = require('http-status-codes')

const withAuth = require('./auth-middleware')
const User = require('./User')

const app = express()
const port = 3000

app.use(function(req, res, next) {
  if (!req.user)
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  next()
})
app.use(express.json())
app.use(cookieParser())

const secret = 'mysecretsshhh'

const responseError = (response, error) => {
  response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error })
}

const responseBadCredentials = (response, error) => {
  response.status(HttpStatus.UNAUTHORIZED).json({ error: error })
}

const responseAuthenticated = (response, username) => {
  // Issue token
  const payload = { username }
  const options = { expiresIn: '30m' }
  const token = jwt.sign(payload, secret, options)

  // tells browsers not to allow client-side script access to cookie
  // and mitigates common XSS attacks
  const cookieOptions = { httpOnly: true }

  response.cookie('token', token, cookieOptions).sendStatus(HttpStatus.OK)
}

const responseBadToken = (response, error) => {
  response.status(HttpStatus.UNAUTHORIZED).json({ error: error })
}

const responseWhoAmI = (response, user) => {
  response.status(HttpStatus.OK).json({ user: user })
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post('/api/login', function(req, res) {
  const { username, password } = req.body

  User.findOne({ username }, (err, user) => {
    if (err) {
      responseError(res, 'Internal server error')
    } else if (!user) {
      responseBadCredentials(res, 'Bad credentials')
    } else {
      User.checkPassword(user, password, (err, same) => {
        if (err) {
          responseError(res, 'Internal server error')
        } else if (!same) {
          responseBadCredentials(res, 'Bad credentials')
        } else {
          responseAuthenticated(res, username)
        }
      })
    }
  })
})

app.post('/api/logout', function(req, res) {
  const cookies = req.cookies
  for (let prop in cookies) {
    if (!cookies.hasOwnProperty(prop)) {
      continue
    }
    res.cookie(prop, '', { expires: new Date(0) })
  }
  res.redirect('/')
})

app.get('/api/whoAmI', withAuth, function(req, res) {
  User.findOne({ username: req.username }, (err, user) => {
    if (err) {
      responseError(res, 'Internal error please try again')
    } else if (!user) {
      responseBadToken(res, 'Incorrect token')
    } else {
      responseWhoAmI(res, user)
    }
  })
})

app.get('/api/increment', withAuth, function(req, res) {
  const { count } = req.query

  const bigIncrement = countString => {
    const base = 10
    const alphabet = ['0123456789']

    bigInt(count)
    let newCountString = undefined
    if (bigInt(count).isZero()) {
      newCountString = bigInt.one.toString()
    } else {
      newCountString = bigInt(count)
        .multiply(2)
        .toString()
    }
    return newCountString
  }

  try {
    const newCount = bigIncrement(count)
    res.status(HttpStatus.OK).json({ count: newCount })
  } catch (error) {
    console.log('bigIncrement catch', JSON.stringify(error, null, 3))
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ error: 'count must be parseable as big-integer string' })
  }
})
