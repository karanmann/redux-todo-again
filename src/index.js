import {App} from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import backgroundImage from './assets/pexels-evie-shaffer-2395254.jpg'
import styled from 'styled-components'

const StyledApp = styled(App)`
    background-image: url(${backgroundImage});
`;
ReactDOM.render(
  <React.StrictMode>
    <StyledApp>
      <App />
    </StyledApp> 
  </React.StrictMode>,
  document.getElementById('root')
);
