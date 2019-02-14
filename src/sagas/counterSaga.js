import {
  INCREMENT_COUNTER,
  incrementCounterSuccess,
  incrementCounterFailure,
} from '../actions/CounterActions'

import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../api/Api'

function* incrementCounterSaga(action) {
  try {
    const nextCount = yield call(Api.incrementCounter, action.count)
    yield put(incrementCounterSuccess(nextCount))
  } catch (error) {
    console.log('catch error:', error)
    yield put(incrementCounterFailure(error))
  }
}

export default function* counterSaga() {
  yield takeLatest(INCREMENT_COUNTER, incrementCounterSaga)
}
