import React from 'react'
import { Typography } from '@material-ui/core';
import styled from 'styled-components'

const HeaderContainer = styled.div`
  margin-top: 10%;
`
const Header = () => {
  return (
    <HeaderContainer>
      <Typography
        variant='h3'
        color='textSecondary'
        gutterBottom
      >Todo App
      </Typography>
    </HeaderContainer>
  )
}

export default Header
