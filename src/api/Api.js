import axios from 'axios'
import { call, delay, put, takeLatest, wait } from 'redux-saga/effects'

/** function that returns an axios call */
// function loginApi(authParams) {
//   return axios.request({
//     method: 'post',
//     url: '/oauth/app',
//     data: authParams
//   });
// }

// Want to use async/await? Add the `async` keyword to your outer function/method.
function* incrementCounter(count) {
  const response = yield axios.get('/api/increment', {
    params: {
      count: count,
    },
  })

  return response
  // try {
  //   const response = yield axios.get('/api/increment', {
  //     params: {
  //       count: count
  //     }
  //   })
  //   console.log('fxngen res', JSON.stringify(response, null, 3))
  //   return response
  // }
  // catch(error){
  //   console.log('fxngen error', JSON.stringify(error, null, 3))
  //   return error
  // }

  // return response

  // insert artificial 2-second delay
  // yield delay(500)
  // return count === 0 ? 1 : count * 2
  // try {
  //   const response = await axios.get('/user?ID=12345');
  //   console.log(response);
  // } catch (error) {
  //   console.error(error);
  // }
}

export default {
  incrementCounter: incrementCounter,
}
