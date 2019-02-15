import {
  INCREMENT_COUNTER,
  incrementCounterSuccess,
  incrementCounterFailure,
} from '../actions/CounterActions'
import { notificationShow } from '../actions/NotificationActions'

import { call, delay, put, takeLatest } from 'redux-saga/effects'
import Api from '../api/Api'

function* incrementCounterSaga(action) {
  try {
    // artificial 200ms delay to show off UI handling of in-between states
    yield delay(200)

    const incrementReponse = yield call(Api.incrementCounter, action.count)
    const nextCount = incrementReponse.data.count
    yield put(incrementCounterSuccess(nextCount))
  } catch (error) {
    yield put(incrementCounterFailure(error))
    yield put(notificationShow(error.response.data.error, true))
  }
}

export default function* counterSaga() {
  yield takeLatest(INCREMENT_COUNTER, incrementCounterSaga)
}
