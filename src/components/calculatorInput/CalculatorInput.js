import React from 'react'
import { AppContext } from '../../AppContext.js';

import './calculator-input.css'

function CalculatorInput() {
  // ----- Initializers -----
  const appContext = React.useContext(AppContext);

  // ----- Event Listers -----
  function onBillTotalChange(event) {
    appContext.actions.setBillAmount(parseInt(event.target.value));
  }

  function onTipPercentageChange(event) {
    appContext.actions.setTipPercentage(parseInt(event.target.value));
  }

  function onNumberOfPeopleChange(event) {
    appContext.actions.setNumberOfPeople(parseInt(event.target.value));
  }

  return (
    <div className="calculator-input">
      <div className="calculator-input__input-container">
        <label className="calculator-input__input-container--label">Bill</label>
        <input className="calculator-input__input-container--input-box" value={appContext.state.billAmount} type="number" onChange={onBillTotalChange} aria-label="Toggle" />
      </div>

      <div className="calculator-input__input-container">
        <label className="calculator-input__input-container--label">Tip percentage</label>
        <div onChange={onTipPercentageChange} value={appContext.state.tipPercentage}>
          <input type="radio" value="5"  name="tipPercentage" /> 5%
          <input type="radio" value="10" name="tipPercentage" /> 10%
          <input type="radio" value="15" name="tipPercentage" /> 15%
          <input type="radio" value="25" name="tipPercentage" /> 25%
          <input type="radio" value="50" name="tipPercentage" /> 50%
        </div>
      </div>

      <div className="calculator-input__input-container">
        <label className="calculator-input__input-container--label">Number of people</label>
        <input className="calculator-input__input-container--input-box" value={appContext.state.numberOfPeople} type="number" onChange={onNumberOfPeopleChange} aria-label="Toggle" />
      </div>
    </div>
  );
}

export default CalculatorInput;
