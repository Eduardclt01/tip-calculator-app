import React from 'react';
import { AppContext } from "./AppContext.js";
import Calculator from './components/calculator/Calculator.js'
import CalculatorInput from './components/calculatorInput/CalculatorInput.js'
import CalculatorOutput from './components/calculatorOutput/CalculatorOutput.js'

import './css/App.css'

function App() {
  const appContext = React.useContext(AppContext);

  return (
    <div className="App">
    <pre>{JSON.stringify(appContext.state, null, 2)}</pre>

      <Calculator>
        <CalculatorInput></CalculatorInput>
        <CalculatorOutput calculatedTotalAmount={appContext.state.calculatedTotalAmount}
                            calculatedTipAmount={appContext.state.calculatedTipAmount}>
        </CalculatorOutput>
      </Calculator>

    </div>
  );
}

export default App;
