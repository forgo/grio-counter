import Immutable from 'seamless-immutable'
import {
  INCREMENT_COUNTER,
  INCREMENT_COUNTER_SUCCESS,
  INCREMENT_COUNTER_FAILURE,
} from '../actions/CounterActions'

export const initialState = Immutable({
  count: 0,
  calculating: false,
  error: undefined
})

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      const requestState = state.set('calculating', true)
      return requestState
    case INCREMENT_COUNTER_SUCCESS:
      const responseSuccessState = state
        .set('calculating', false)
        .set('count', action.count)
      return responseSuccessState
    case INCREMENT_COUNTER_FAILURE:
      console.log('error', JSON.stringify(action.error, null, 2))
      const responseFailureState = state
        .set('calculating', false)
        .set('error', JSON.stringify(action.error, null, 2))
      return responseFailureState
    default:
      return state
  }
}
