import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { Header } from './pages/Header'
import { Provider } from 'react-redux'
import React from  'react'
import { Tasks } from './pages/Tasks'
import { taskList } from './reducers/taskList'

const reducer = combineReducers({
  tasklist: taskList.reducer
})

const store = configureStore({ reducer })
export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Tasks />
      </div>
    </Provider>
    
  );
}
