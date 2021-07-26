import React from 'react'
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux'

export const Summary = () => {
  const list = useSelector(store => store.tasklist.tasks)
  const tasksDone = list.filter(item => item.completed).length

  return (
    <section>
      <Typography>📝 <span>{tasksDone}/{list.length}</span> tasks done </Typography>
    </section>
  )
}