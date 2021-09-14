import React from 'react';
import { AppContext } from '../../AppContext.js';
import CalculatorInput from '../calculatorInput/CalculatorInput.js';
import CalculatorOutput from '../calculatorOutput/CalculatorOutput.js';

import './calculator.css'

function Calculator() {
  const appContext = React.useContext(AppContext);

  return (
    <div className="calculator">
      <CalculatorInput></CalculatorInput>
      <CalculatorOutput calculatedTotalAmount={appContext.state.calculatedTotalAmount}
                        calculatedTipAmount={appContext.state.calculatedTipAmount}>
      </CalculatorOutput>
    </div>
  );
}

export default Calculator;
