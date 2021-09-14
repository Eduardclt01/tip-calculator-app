import React from 'react';
import { AppContext } from "./AppContext.js";
import Calculator from './components/calculator/Calculator.js'


import './css/App.css'

function App() {
  const appContext = React.useContext(AppContext);

  return (
    <div className="App">
      <pre>{JSON.stringify(appContext.state, null, 2)}</pre>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
