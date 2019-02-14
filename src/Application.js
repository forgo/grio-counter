import React from 'react'
import {Provider} from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import GrioApp from './components/GrioApp'

// this higher-order component is kept separate from index.js
// to parameterize the store and history for tests
const isTest = process.env.NODE_ENV === 'test'

const Application = (store, history) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <GrioApp />
      </ConnectedRouter>
    </Provider>
  )
}

export default Application
