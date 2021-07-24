import { Provider } from 'react-redux'
import React from  'react'
import moment from 'moment'
import store from './redux/store'
export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>{moment().format('LLLL')}</h1>
      </div>
    </Provider>
    
  );
}
