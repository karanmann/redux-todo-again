import React from  'react'
import moment from 'moment'
export const App = () => {
  return (
    <div className="App">
      <h1>{moment().format('LLLL')}</h1>
    </div>
  );
}

export default App;
