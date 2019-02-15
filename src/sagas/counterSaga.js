import {
  INCREMENT_COUNTER,
  incrementCounterSuccess,
  incrementCounterFailure,
} from '../actions/CounterActions'
import { errorShow } from '../actions/ErrorActions'

import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../api/Api'

function* incrementCounterSaga(action) {
  try {
    const incrementReponse = yield call(Api.incrementCounter, action.count)
    const nextCount = incrementReponse.data.count
    yield put(incrementCounterSuccess(nextCount))
  } catch (error) {
    yield put(incrementCounterFailure(error))
    yield put(errorShow(error.response.data.error))
  }
}

export default function* counterSaga() {
  yield takeLatest(INCREMENT_COUNTER, incrementCounterSaga)
}
