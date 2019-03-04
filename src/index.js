import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import sep from './helpers/sepLogs'

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
}

const rootReducer = () => {
  return DEFAULT_SETTINGS
}

const store = createStore(rootReducer)

console.log('store', store)
sep()
console.log('getState()', store.getState())

ReactDOM.render(<App />, document.getElementById('root'))
