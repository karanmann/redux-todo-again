import { Button, Card, TextField } from '@material-ui/core'

import React from 'react'

export const AddTask = () => {
  return (

    <form noValidate autoComplete="on">
      <Card variant="outlined" >
        <TextField id="filled-basic" variant="filled"  label="Enter Task to Add" required fullWidth/>
        <Button variant="contained" color="primary"> Add </Button>
      </Card>
    </form>
  )
}

