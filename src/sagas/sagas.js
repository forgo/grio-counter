import { all } from 'redux-saga/effects'
// import loginSaga from './loginSaga'
import counterSaga from './counterSaga'

export default function* sagas() {
  yield all([/*loginSaga(),*/ counterSaga()])
}
