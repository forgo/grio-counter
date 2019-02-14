import {
  WHO_AM_I,
  whoAmISuccess,
  whoAmIFailure,
  LOGIN,
  LOGOUT,
  loginSuccess,
  loginFailure,
} from '../actions/AuthActions'
import {
  errorShow,
  errorHide,
} from '../actions/ErrorActions'
import { push } from 'connected-react-router'
import { ROUTE } from '../routing'

import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../api/Api'

function* whoAmISaga(action) {
  try {
    const user = yield call(Api.whoAmI)
    console.log("whoami success, user", JSON.stringify(user, null ,3))

    yield put(whoAmISuccess(user))

    // hide any login errors if they had not been manually dismissed
    yield put(errorHide())

    // redirect to home route after successful login
    console.log("before whoami push")
    yield put(push('/'))
    console.log("after whoami push")

  } catch (error) {
    console.log("whoami catch")

    console.log('catch error:', JSON.stringify(error, null, 3))
    yield put(whoAmIFailure(error))
    // yield put(errorShow(error.response.data.error))
  }
}

function* loginSaga(action) {
  try {
    const user = yield call(Api.login, action.username, action.password)


    yield put(loginSuccess(user))

    // hide any login errors if they had not been manually dismissed
    yield put(errorHide())

    // redirect to home route after successful login
    console.log("before")
    yield put(push('/'))
    console.log("after")

  } catch (error) {
    console.log('catch error:', error)
    yield put(loginFailure(error))
    yield put(errorShow(error.response.data.error))
  }
}

function* logoutSaga(action) {
  try {

  } catch(error) {

  }
}

// saga watcher triggered when dispatching LOGIN action
export default function* authSaga() {
  yield* [
    takeLatest(WHO_AM_I, whoAmISaga),
    takeLatest(LOGIN, loginSaga),
    takeLatest(LOGOUT, logoutSaga)
  ]
}
