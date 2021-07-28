import React, { useState } from 'react'

import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import IconButton from '@material-ui/core/IconButton'
import todos from '../reducers/todos'
import uniqid from 'uniqid'
import { useDispatch } from 'react-redux'

const TaskForm = () => {

  const [ value, setValue ] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()

    const newTask = {
      id: uniqid(),
      description: value,
      isComplete: false
    }

    dispatch(todos.actions.addTodo(newTask))
    setValue('')
  }

  const style = { color: "white", fontSize: "2em" }
  
  return (
    <form onSubmit={e => onFormSubmit(e)}>
      <div>
        <input 
          type='text'
          value={value}
          required
          onChange={e => setValue(e.target.value)}
          placeholder='Write your todo here...'
        />
        <IconButton type="submit">
          <AddCircleOutline style={style} />
        </IconButton>
      </div>
    </form>
  )
}

export default TaskForm
