import React from 'react'
import { AppContext } from '../../AppContext.js';
import CalculatorOutputAmount from './CalculatorOutputAmount'
import DefaultButton from '../button/defaultButton';

import './calculator-output.css'

function CalculatorOutput(props) {
  // ----- Initializers -----
  const appContext = React.useContext(AppContext);
  const tipPerPerson = CalculateTotalTipPerPerson();
  const totalPerPerson = CalculateTotalAmountPerPerson();

  // ----- Event Listers -----
  function onResetInputsClick() {
    appContext.actions.clearCalculatorData();
  }

  function CalculateTotalAmountPerPerson() {
    let totalAmountPerPerson;
    if (appContext.state.billAmount > 0 && appContext.state.numberOfPeople > 0){
      totalAmountPerPerson =  appContext.state.billAmount / appContext.state.numberOfPeople;
      if (appContext.state.tipPercentage > 0){
        totalAmountPerPerson += CalculateTotalTipPerPerson();
      }
    }else{
      totalAmountPerPerson = 0;
    }
    return Math.round((totalAmountPerPerson + Number.EPSILON) * 100) / 100;
  }

  function CalculateTotalTipPerPerson() {
    let totalTipPerPerson;
    if (appContext.state.billAmount > 0 && appContext.state.numberOfPeople > 0 && appContext.state.tipPercentage > 0){
      totalTipPerPerson = (appContext.state.billAmount * appContext.state.tipPercentage / 100) / appContext.state.numberOfPeople;
    }else{
      totalTipPerPerson = 0;
    }
    return Math.round((totalTipPerPerson + Number.EPSILON) * 100) / 100;
  }

  return (
    <div className="calculator-output">
      <CalculatorOutputAmount
        amount={tipPerPerson}
        label={'Tip amount'}>
      </CalculatorOutputAmount>

      <CalculatorOutputAmount
        amount={totalPerPerson}
        label={'Total'}>
      </CalculatorOutputAmount>

      <DefaultButton onButtonClick={onResetInputsClick} buttonText="Reset" style="SECONDARY"></DefaultButton>

    </div>
  );
}

export default CalculatorOutput;
