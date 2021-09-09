import React from 'react'
import { AppContext } from "../AppContext.js";

import '../css/card-input-section.css'

function CardInputSection() {
  // ----- Initializers -----

  const appContext = React.useContext(AppContext);

  // ----- Event Listeners -----

  function onBillAmountChange(event){
    appContext.actions.setBillAmount(parseInt(event.target.value));
    console.log('CardInput.js State Amount: ' + appContext.state.billAmount)
    console.log('--')
    console.log('--')
    // calculateTotals();
  }

  function onNumberOfPeopleChange(event){
    appContext.actions.setNumberOfPeople(parseInt(event.target.value));
    calculateTotals();
  }

  function onTipPercentageClick(event){
    appContext.actions.setTipPercentage(parseInt(event.target.getAttribute("data-percentage")));
    calculateTotals();
  }

  // ----- Logic -----

  function calculateTotals(){
    console.log(appContext.state.billAmount)
    console.log(appContext.state.tipPercentage)
    console.log(appContext.state.numberOfPeople)
    if (appContext.state.billAmount > 0 && appContext.state.tipPercentage > 0 && appContext.state.numberOfPeople > 0){


      var tipTotal = appContext.state.billAmount * (appContext.state.tipPercentage / 100)
      var tipPerPerson = tipTotal / appContext.state.numberOfPeople

      appContext.actions.setCalculatedTotalAmount(tipTotal);
      appContext.actions.setCalculatedTipAmount(tipPerPerson);
    }

  }

  return (
    <div className="card-input-section">
      <div className="card-input-section__input-container">
        <label className="card-input-section__input-container__label">Bill</label>
        <input className="" type="number" aria-label="Toggle" onChange={onBillAmountChange}/>
      </div>

      <div className="card-input-section__input-container">
        <label className="card-input-section__input-container__label">Tip percentage</label>
        <button onClick={onTipPercentageClick} data-percentage="5">5%</button>
        <button onClick={onTipPercentageClick} data-percentage="10">10%</button>
        <button onClick={onTipPercentageClick} data-percentage="15">15%</button>
        <button onClick={onTipPercentageClick} data-percentage="25">25%</button>
        <button onClick={onTipPercentageClick} data-percentage="50">50%</button>
        {/* <input className="" type="number" aria-label="Toggle"  placeholder="Custom"/> */}

      </div>

      <div className="card-input-section__input-container">
        <label className="card-input-section__input-container__label">Number of people</label>
        <input className="" type="number" aria-label="Toggle" onChange={onNumberOfPeopleChange} />

      </div>
    </div>
  );
}

export default CardInputSection;
