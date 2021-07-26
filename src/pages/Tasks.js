import { AddTask } from '../components/AddTask'
import { ClearAllButton } from '../components/ClearAllButton'
import React from  'react'
import { TaskList } from '../components/TaskList'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Tasks = () => {
  const allTasks = useSelector(store => store.tasklist.tasks)

  return (
    <StyledTaskList>
      <AddTask />
      {allTasks.map((task) => (
        <TaskList 
          key={task.id} 
          id={task.id} 
          text={task.text} 
          complete={task.complete}
        />
      ))}
      <ClearAllButton />
    </StyledTaskList>
  );
}
