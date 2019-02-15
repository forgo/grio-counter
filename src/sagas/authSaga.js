import {
  WHO_AM_I,
  whoAmISuccess,
  whoAmIFailure,
  LOGIN,
  LOGOUT,
  loginSuccess,
  loginFailure,
} from '../actions/AuthActions'
import { errorShow, errorHide } from '../actions/ErrorActions'
import { push } from 'connected-react-router'
import { ROUTE } from '../routing'

import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../api/Api'

function delete_cookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

function* whoAmISaga(action) {
  try {
    const user = yield call(Api.whoAmI)
    yield put(whoAmISuccess(user))
    // hide any login errors if they had not been manually dismissed
    yield put(errorHide())
    // redirect to home route after successful login
    yield put(push('/'))
  } catch (error) {
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
    yield put(push('/'))
  } catch (error) {
    yield put(loginFailure(error))
    yield put(errorShow(error.response.data.error))
  }
}

function* logoutSaga(action) {
  try {
    const logoutResponse = yield call(Api.logout)
    delete_cookie('token')
  } catch (error) {}
}

// saga watcher triggered when dispatching LOGIN action
export default function* authSaga() {
  yield* [
    takeLatest(WHO_AM_I, whoAmISaga),
    takeLatest(LOGIN, loginSaga),
    takeLatest(LOGOUT, logoutSaga),
  ]
}
