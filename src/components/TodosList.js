import { useDispatch, useSelector } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox'
import Clear from '@material-ui/icons/Clear'
import IconButton from '@material-ui/core/IconButton'
import React from 'react'
import Star from '@material-ui/icons/Star'
import StarBorder from '@material-ui/icons/StarBorder'
import todos from '../reducers/todos'

const style = { color: '#FFC700', fontSize: '1.5em' };
const otherStyle = { color: 'white', fontSize: '1.5em' };
const TodosList = () => {
  const tasks = useSelector((store) => store.todos.tasks)
  const completedTasks = tasks.filter(singleTask => singleTask.isComplete)
    
  console.log(completedTasks)
  
  const dispatch = useDispatch()

  return (
    <>
      <h4>Completed Tasks: {completedTasks.length}/{tasks.length} </h4>
      { tasks.map(singleTask => (
        <div>
          <Checkbox
            icon={<StarBorder style={style} />}
            checkedIcon={<Star style={style} />}
            type="checkbox"
            checked={singleTask.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(singleTask.id))}
          />
          <p>{singleTask.description}</p>
          <IconButton onClick={() => dispatch(todos.actions.removeTodo(singleTask.id))}>
            Edit
          </IconButton>
          <IconButton onClick={() => dispatch(todos.actions.removeTodo(singleTask.id))}>
            <Clear style={otherStyle} />
          </IconButton>
        </div>
      ))}
    </>
  )
}

export default TodosList
