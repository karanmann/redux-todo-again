import React from 'react'
import { Summary } from '../components/Summary'
import { Typography } from '@material-ui/core'
import moment from 'moment'
export const Header = () => {
  return (
    <>
      <Typography 
        variant='h6'
        color='textPrimary'
        component='h1'
        gutterBottom
      >
        Todo - App
      </Typography>
      <Typography 
        variant='h6'
        color='textPrimary'
        component='h3'
        gutterBottom
      >
        {moment().format('LLLL')}
      </Typography>
      <Summary />
    </>
  )
}