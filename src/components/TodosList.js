import { Button, Card, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import moment from 'moment'
import styled from 'styled-components'
import todos from '../reducers/todos'

const done = { color: '#00FF27'}
const notDone = { color: '#778899'}
const otherStyle = { color: 'white', fontSize: '1.5em' };

const TaskListCard = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 10px;
  margin: 20px 0 10px 0
`

const LineThrough = styled(Typography)`
  text-decoration: line-through
`
const TodosList = () => {
  const tasks = useSelector((store) => store.todos.tasks)
  const completedTasks = tasks.filter(singleTask => singleTask.isComplete)
    
  console.log(completedTasks)
  
  const dispatch = useDispatch()

  return (
    <>
      <Typography variant='button'>Completed Tasks: {completedTasks.length}/{tasks.length} </Typography>
      { tasks.map(singleTask => (
        <TaskListCard variant="outlined">
          <Tooltip title='Mark status'>
            <Checkbox
              icon={<CheckCircleOutlineIcon style={notDone} />}
              checkedIcon={<CheckCircleOutlineIcon style={done} />}
              type="checkbox"
              checked={singleTask.isComplete}
              onChange={() => dispatch(todos.actions.toggleComplete(singleTask.id))}
            />
          </Tooltip>
          <div>
            <Tooltip title={`Added: ${moment().calendar()}`}>
            {singleTask.isComplete ?
              <LineThrough
                variant='h6'
                color='textSecondary'
                gutterBottom
              >{singleTask.description}
              </LineThrough>
             :
              <Typography
                variant='h6'
                color='textSecondary'
                gutterBottom
              >{singleTask.description}
              </Typography>
            }
            </Tooltip> 
          </div>
          <Tooltip title='Delete todo'>
            <Button
              variant="contained" 
              color="primary"
              onClick={() => dispatch(todos.actions.removeTodo(singleTask.id))}>
              <DeleteIcon style={otherStyle} />
            </Button>
          </Tooltip>
        </TaskListCard>
      ))}
    </>
  )
}

export default TodosList
