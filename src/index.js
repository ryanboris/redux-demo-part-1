/*
  Pure functions:
    return same results given same arguments
    return is based only on incoming arguments
    the function does not modify variables out of its scope
    never produce side effects
    
*/

function todos(state = [], action) {
  if (action.type === 'ADD_TODO') {
    return [...state, action.todo]
  } else if (action.type === 'REMOVE_TODO') {
    const index = state.findIndex()
  }

  return state
}

function createStore() {
  let state
  let listeners = []
  const getState = () => state
  /*
    Get the state
    Listen for changes
    Update state
  */
  const subscribe = listener => {
    listeners = [...listeners, listener]
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  const dispatch = action => {
    state = todos(state, action)
    listeners.map(listener => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

const store = createStore()
store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false
  }
})
