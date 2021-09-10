import React from 'react'
import { AppContext } from "../../AppContext.js";

import './calculator-input.css'

function CalculatorInput() {
  // ----- Initializers -----

  return (
    <div className="calculator-input">
      <div className="calculator-input__input-container">
        <label className="calculator-input__input-container__label">Bill</label>
        <input className="" type="number" aria-label="Toggle" />
      </div>

      <div className="calculator-input__input-container">
        <label className="calculator-input__input-container__label">Tip percentage</label>
        <div>
          <input type="radio" value="5" name="tipPercentage" /> 5%
          <input type="radio" value="10" name="tipPercentage" /> 10%
          <input type="radio" value="15" name="tipPercentage" /> 15%
          <input type="radio" value="25" name="tipPercentage" /> 25%
          <input type="radio" value="50" name="tipPercentage" /> 50%
        </div>
      </div>

      <div className="calculator-input__input-container">
        <label className="calculator-input__input-container__label">Number of people</label>
        <input className="" type="number" aria-label="Toggle" />

      </div>
    </div>
  );
}

export default CalculatorInput;
