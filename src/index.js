function createStore(todos) {
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
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

function addToDoAction(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

function removeToDoAction(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

function toggleToDoAction(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal
  }
}

function removeGoalAction(id) {
  return {
    type: REMOVE_GOAL,
    id
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case TOGGLE_TODO:
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

function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return [...state, action.goal]
    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.id)
    default:
      return state
  }
}

function app(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action)
  }
}

const store = createStore(app)

store.subscribe(() => {
  console.log('The new state is: ', store.getState())
})

store.dispatch(
  addToDoAction({
    id: 0,
    name: 'Walk the dog',
    complete: false
  })
)
store.dispatch(
  addToDoAction({
    id: 1,
    name: 'Study',
    complete: false
  })
)
store.dispatch(
  addToDoAction({
    id: 2,
    name: 'Sleep',
    complete: false
  })
)
store.dispatch(
  addGoalAction({
    id: 0,
    name: 'Walk the dog'
  })
)
store.dispatch(
  addGoalAction({
    id: 1,
    name: 'Study'
  })
)
store.dispatch(
  addGoalAction({
    id: 2,
    name: 'Sleep'
  })
)

store.dispatch(toggleToDoAction(0))
store.dispatch(removeToDoAction(1))
store.dispatch(removeGoalAction(0))
