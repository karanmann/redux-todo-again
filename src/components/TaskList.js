import { Button, Card, Checkbox, Typography } from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { taskList } from '../reducers/taskList'
import { useDispatch } from 'react-redux'

const TaskListCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 30px;
  width: 300px;
`
export const TaskList = ({ id, text, complete }) => {
  
  const dispatch = useDispatch()

  const handleCheckToggle = () => {
    dispatch(taskList.actions.toggleCheck(id))
  }

  const handleRemove = () => {
    dispatch(taskList.actions.removeTodo(id))
  }

  return (
    <TaskListCard variant="outlined">
      <Checkbox 
        isChecked={complete}
        onChangeHandler={handleCheckToggle}
      />
      {!complete ? 
        <Typography 
          variant='subtitle2'
          color='textSecondary'
          gutterBottom
        >
          {text}
        </Typography> : <Typography 
        variant='body2'
        color='textSecondary'
        gutterBottom
      >
        {text}
      </Typography>}
      <Typography 
        variant='overline'
        color='textSecondary'
        gutterBottom
      >
        Added: {moment().calendar()}
      </Typography>

      <div>
        <Button variant="contained" color="primary">
          <EditIcon />
        </Button>
        <Button variant="contained" color="primary">
            <DeleteIcon onClick={handleRemove}/>
        </Button>
      </div>
    </TaskListCard>
  )
}