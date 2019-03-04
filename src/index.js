import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import sep from './helpers/sepLogs'

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
}
const rootReducer = (state = DEFAULT_SETTINGS, action) => {
  console.log('state', state)
  console.log('action', action)
  if (action.type === 'SET_GAME_STARTED') {
    return {
      gameStarted: action.gameStarted,
      instructionsExpanded: false
    }
  }
  return state
}
const store = createStore(rootReducer)
console.log('store', store)
console.log('store.getState()', store.getState())
store.subscribe(() =>
  console.log('store.getState()', store.getState())
)
const action1 = { gameStarted: true, type: 'SET_GAME_STARTED' }
store.dispatch(action1)
console.log('store.getState()', store.getState())
store.dispatch({ type: 'foo' })

store.dispatch({ type: 'bar' })

console.log('store.getState()', store.getState())

ReactDOM.render(<App />, document.getElementById('root'))
