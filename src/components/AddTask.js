import { Button, Card, TextField } from '@material-ui/core'
import React, {useState} from 'react'

import styled from 'styled-components'
import { taskList } from '../reducers/taskList'
import { useDispatch } from 'react-redux'

const AddTaskCard = styled(Card) `
  display: flex;
  flex-direction: row;
  width: 300px;
  padding: 20px;
  margin-bottom: 20px;
`

const AddTaskButton = styled(Button)`
margin-left: 20px;
`
export const AddTask = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleAddTask = (event) => {
    event.preventDefault()
    dispatch(taskList.actions.addTodo(inputValue))
    setInputValue('')
  }

  return (

    <form 
      onSubmit={handleAddTask} 
      noValidate 
      autoComplete="on"
    >
      <AddTaskCard variant="outlined" >
        <TextField 
          id="filled-basic" 
          variant="filled"  
          label="Enter Task to Add" 
          required 
          fullWidth
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}
          type='text'
        />
        <AddTaskButton 
          variant="contained" 
          color="primary"
          disabled={!inputValue}
          type='submit'
        > Add 
        </AddTaskButton>
      </AddTaskCard>
    </form>
  )
}

