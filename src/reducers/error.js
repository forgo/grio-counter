import Immutable from 'seamless-immutable'
import {
  ERROR_SHOW,
  ERROR_HIDE,
} from '../actions/ErrorActions'

export const initialState = Immutable({
  message: undefined
})

export default function error(state = initialState, action) {
  switch (action.type) {
    case ERROR_SHOW:
      const errorShowState = state.set('message', action.message)
      return errorShowState
    case ERROR_HIDE:
      const errorHideState = state.set('message', undefined)
      return errorHideState
    default:
      return state
  }
}
