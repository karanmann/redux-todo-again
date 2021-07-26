import { Card, Typography } from '@material-ui/core'

import React from 'react'

export const TaskList = () => {

  return (
    <Card variant="outlined">
      <Typography 
        variant='h6'
        color='textSecondary'
        component='h4'
        gutterBottom
      >
        Task List go here!!
      </Typography>
    </Card>
  )
}