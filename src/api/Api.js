import axios from 'axios'
import { call, delay, put, takeLatest, wait } from 'redux-saga/effects'

// function authHeaders() {
//   let user = JSON.parse(localStorage.getItem('user'))
//   if(user && user.token) {
//     return {
//       'Authorization': 'Bearer ' + user.token
//     }
//   }
//   else {
//     return {}
//   }
// }

/** function that returns an axios call */
// function loginApi(authParams) {
//   return axios.request({
//     method: 'post',
//     url: '/oauth/app',
//     data: authParams
//   });
// }

function* whoAmI() {
  const response = yield axios.get('/api/whoAmI')
  return response
}

function* login(username, password) {
  const response = yield axios.post('/api/login', {
    username: username,
    password: password
  })
  return response
}

function* incrementCounter(count) {
  // insert artificial 2-second delay
  // yield delay(500)
  // return count === 0 ? 1 : count * 2



  const uri = `/api/increment?count=${count}`
  const uriEncoded = encodeURI(uri)
  const response = yield axios.get(uriEncoded)
  return response
}

export default {
  whoAmI: whoAmI,
  login: login,
  incrementCounter: incrementCounter,
}
