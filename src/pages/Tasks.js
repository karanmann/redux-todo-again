import { AddTask } from '../components/AddTask'
import { AllCompletedButton } from '../components/AllCompletedButton'
import { ClearAllButton } from '../components/ClearAllButton'
import React from  'react'
import { TaskList } from '../components/TaskList'
import styled from 'styled-components'
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
