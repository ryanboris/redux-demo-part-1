/*
  Pure functions:
    return same results given same arguments
    return is based only on incoming arguments
    the function does not modify variables out of its scope
    never produce side effects
    
*/

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo]
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id)
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : {
              ...todo,
              complete: !todo.complete
            }
      )
    default:
      return state
  }
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
// store.dispatch({
//   type: 'ADD_TODO',
//   todo: {
//     id: 0,
//     name: 'Learn Redux',
//     complete: false
//   }
// })

// store.dispatch({
//   type: 'ADD_TODO',
//   todo: {
//     id: 0,
//     name: 'dsf',
//     complete: false
//   }
// })

// const newthing = createStore()
// newthing.dispatch({
//   type: 'ADD_TODO',
//   todo: {
//     id: 4
//   }
// })

// store.dispatch({
//   type: 'ADD_TODO',
//   todo: { id: 3, name: 'D', complete: false }
// })

console.log('getState()', store.getState())
console.log('----//--------//--------//-----------//----')
store.dispatch({ type: 'REMOVE_TODO', id: 3 })
console.log('getState() after', store.getState())
