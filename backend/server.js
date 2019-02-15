const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser');

const HttpStatus = require('http-status-codes')

const withAuth = require('./auth-middleware')
const User = require('./User')

const app = express()
const port = 3000

app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});
app.use(express.json())
app.use(cookieParser());

const secret = 'mysecretsshhh';

const responseError = (response, error) => {
  response
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .json({error: error})
}

const responseBadCredentials = (response, error) => {
  response
    .status(HttpStatus.UNAUTHORIZED)
    .json({error: error})
}

const responseAuthenticated = (response, username) => {
  // Issue token
  const payload = { username }
  const options = { expiresIn: '1h' }
  const token = jwt.sign(payload, secret, options)

  // tells browsers not to allow client-side script access to cookie
  // and mitigates common XSS attacks
  const cookieOptions = { httpOnly: true }

  response
    .cookie('token', token, cookieOptions)
    .sendStatus(HttpStatus.OK);
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post('/api/login', function(req, res) {
  const { username, password } = req.body;

  User.findOne({ username }, (err, user) => {
    console.log('user found', user)
    if (err) {
      responseError(res, "Internal error please try again")
    } else if (!user) {
      responseBadCredentials(res, "Incorrect username or password")
    } else {
      User.checkPassword(user, password, (err, same) => {
        if (err) {
          responseError(res, "Internal error please try again")
        } else if (!same) {
          responseBadCredentials(res, "Incorrect username or password")
        } else {
          responseAuthenticated(res, username)
        }
      })
    }
  })
})

app.post('/api/logout', function(req, res) {
  res.clearCookie('token')
})

app.get('/api/whoAmI', withAuth, function(req, res) {
  console.log("/api/whoAmI... req.username=", JSON.stringify(req.username, null, 3))
  res
    .status(HttpStatus.OK)
    .json({ user: req.username })


})

app.get('/api/increment', withAuth, function(req, res) {
  console.log("/api/increment... req.body=", JSON.stringify(req.body, null, 3))
  const { count } = req.query
  const countInteger = parseInt(count)
  if(count && Number.isInteger(countInteger)) {
    res
      .status(HttpStatus.OK)
      .json({ count: countInteger === 0 ? 1 : countInteger * 2 })
  }
  else {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ error: "count must be an integer to increment"})
  }
})
