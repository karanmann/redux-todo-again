import React from 'react'
import { Summary } from '../components/Summary'
import { Typography } from '@material-ui/core'
import moment from 'moment'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const Header = () => {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  )
}