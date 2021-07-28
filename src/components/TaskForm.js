import { Button, Card, TextField, Tooltip } from '@material-ui/core'
import React, { useState } from 'react'

import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import styled from 'styled-components'
import todos from '../reducers/todos'
import uniqid from 'uniqid'
import { useDispatch } from 'react-redux'

const AddTaskCard = styled(Card) `
  display: flex;
  flex-direction: row;
  width: 90%;
  padding: 20px;
  margin-bottom: 20px;

`

const AddTaskButton = styled(Button)`
margin-left: 20px;
`


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
    <form 
      onSubmit={e => onFormSubmit(e)}
      autoComplete="on"
    >
      <AddTaskCard>
        <TextField 
          id="standard-required"
          variant="filled"  
          label="Write your todo here..." 
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <Tooltip title='Add todo'>
          <AddTaskButton 
            type="submit"
            variant="contained" 
            color="primary">
            <AddCircleOutline style={style} />
          </AddTaskButton>
        </Tooltip>
      </AddTaskCard>
    </form>
  )
}

export default TaskForm
