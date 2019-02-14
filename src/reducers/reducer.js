import { combineReducers } from 'redux-seamless-immutable'
import { connectRouter } from 'connected-react-router'

export const RESET_STORE = 'reset_store'

// import login from './login'
import counter from './counter'

export default history => {
  return (state, action) => {
    // allow a top-level reducer action to trigger all reducers to initial state
    if (action.type === RESET_STORE) {
      state = undefined
    }

    const appReducer = combineReducers({
      router: connectRouter(history),
      // login,
      counter,
    })
    return appReducer(state, action)
  }
}
