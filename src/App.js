import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { Provider } from 'react-redux'
import React from 'react'
import TodoWrapper from './components/TodoWrapper'
import todos from './reducers/todos'

const reducer = combineReducers({todos: todos.reducer})

const store = configureStore({ reducer })
const App = () => {
  return (
    <Provider store={store}>
      <TodoWrapper />
    </Provider>
  )
}

export default App
