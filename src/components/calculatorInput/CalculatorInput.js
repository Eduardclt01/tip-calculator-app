import React from 'react'

import './calculator-input.css'

function CalculatorInput() {
  // ----- Initializers -----

  // ----- Event Listers -----
  function onBillTotalChange(event) {
    console.log(event.target.value)
  }

  function onTipPercentageChange(event) {
    console.log(event.target.value)
  }

  function onNumberOfPeopleChange(event) {
    console.log(event.target.value)
  }

  return (
    <div className="calculator-input">
      <div className="calculator-input__input-container">
        <label className="calculator-input__input-container__label">Bill</label>
        <input className="" type="number" onChange={onBillTotalChange} aria-label="Toggle" />
      </div>

      <div className="calculator-input__input-container">
        <label className="calculator-input__input-container__label">Tip percentage</label>
        <div onChange={onTipPercentageChange}>
          <input type="radio" value="5"  name="tipPercentage" /> 5%
          <input type="radio" value="10" name="tipPercentage" /> 10%
          <input type="radio" value="15" name="tipPercentage" /> 15%
          <input type="radio" value="25" name="tipPercentage" /> 25%
          <input type="radio" value="50" name="tipPercentage" /> 50%
        </div>
      </div>

      <div className="calculator-input__input-container">
        <label className="calculator-input__input-container__label">Number of people</label>
        <input className="" type="number" onChange={onNumberOfPeopleChange} aria-label="Toggle" />
      </div>
    </div>
  );
}

export default CalculatorInput;
