import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    { id:1, text: 'What do you want to do today?', completed: true },
    { id:2, text: 'I am the next task on the list', completed: false }
  ]
}

export const taskList = createSlice({
  name:'taskList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({
        id: state.tasks.length + 1,
        text: action.payload,
        completed: false
      })
    },
    removeTodo: (state, action) => {
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload)
    },
    removeAllTodo: (state) => {state.task = []},
    toggleCompleted: (state, action) => {
      const checkTodo = state.tasks.find((todo) => todo.id === action.payload)

      if(checkTodo) {
        checkTodo.complete = !checkTodo.complete
      }
    }
  }
})