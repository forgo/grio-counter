import { put } from 'redux-saga/effects'
import HttpStatus from 'http-status-codes'
import {
  notificationShow,
  notificationHide,
} from '../actions/NotificationActions'

const FAILURE_MESSAGE_UNAVAILABLE = 'Service unavailable'
const statusesUnavailable = [
  HttpStatus.BAD_GATEWAY,
  HttpStatus.SERVICE_UNAVAILABLE,
  HttpStatus.GATEWAY_TIMEOUT,
]
const FAILURE_MESSAGE_INTERNAL_ERROR = "We're having technical difficulties"
const FAILURE_MESSAGE_BAD_CREDENTIALS = 'Bad credentials'
const FAILURE_MESSAGE_UNAUTHORIZED = 'Insufficient privileges'
const FAILURE_MESSAGE_FALLBACK = 'Something went wrong'

export function* notificationForError(error) {
  const errorStatus = error.response.status

  if (statusesUnavailable.includes(errorStatus)) {
    yield put(notificationShow(FAILURE_MESSAGE_UNAVAILABLE, true))
  } else if (errorStatus === HttpStatus.INTERNAL_SERVER_ERROR) {
    yield put(notificationShow(FAILURE_MESSAGE_INTERNAL_ERROR, true))
  } else if (errorStatus === HttpStatus.UNAUTHORIZED) {
    yield put(notificationShow(FAILURE_MESSAGE_BAD_CREDENTIALS, true))
  } else if (errorStatus === HttpStatus.FORBIDDEN) {
    yield put(notificationShow(FAILURE_MESSAGE_UNAUTHORIZED, true))
  } else {
    yield put(notificationShow(FAILURE_MESSAGE_FALLBACK, true))
  }
}
