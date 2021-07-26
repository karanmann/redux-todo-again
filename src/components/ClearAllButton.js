import { Button } from '@material-ui/core'
import React from 'react'
import { taskList } from '../reducers/taskList'
import { useDispatch } from 'react-redux'
export const ClearAllButton = (id) => {

  const dispatch = useDispatch()
  const handleClearAll = () => dispatch(taskList.actions.removeAllTodo(id))

  return (
    <div>
      <Button 
        onClick={handleClearAll}
        variant="contained" 
        color="secondary"
      > Clear All
      </Button>
    </div>
  )
}