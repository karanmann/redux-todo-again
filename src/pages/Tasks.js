import { AddTask } from '../components/AddTask'
import { AllCompletedButton } from '../components/AllCompletedButton'
import { ClearAllButton } from '../components/ClearAllButton'
import React from  'react'
import Styled from 'styled'
import { TaskList } from '../components/TaskList'
export const Tasks = () => {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
      <AllCompletedButton />
      <ClearAllButton />
    </div>
    
  );
}
