import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from './api/Api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* incrementCounter(action) {
   try {
      const nextCount = yield call(Api.incrementCounter, action.payload.currentCount);
      yield put({type: "INCREMENT_COUNTER_SUCCEEDED", count: nextCount});
   } catch (e) {
      yield put({type: "INCREMENT_COUNTER_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* sagas() {
  yield takeEvery("INCREMENT_COUNTER_REQUESTED", incrementCounter);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest("INCREMENT_COUNTER_REQUESTED", fetchUser);
// }

export default sagas;
