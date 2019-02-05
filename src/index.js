import React from "react"
import ReactDOM from "react-dom"
import Application from "./Application"
import store from "./store"
import history from "./history"
import sagaMiddleware from './sagaMiddleware'
import sagas from './sagas'

import './style/global.css'
import './style/media.css'

// prepare the app for rendering
const app = Application(store, history)

// run the sagas
sagaMiddleware.run(sagas)

// create root DOM element for application
const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

// render the application
ReactDOM.render(app, rootElement)
