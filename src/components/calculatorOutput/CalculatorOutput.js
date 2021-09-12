import CalculatorOutputAmount from './CalculatorOutputAmount'
import DefaultButton from '../button/defaultButton';

import './calculator-output.css'

function CalculatorOutput(props) {
  // ----- Event Listers -----

  function onResetInputsClick() {
    console.log('Button Clicked: Reset Inputs')
  }

  return (
    <div className="calculator-output">
      <div className="calculator-output__amount-labels">
        <CalculatorOutputAmount
          amount={0}
          label={'Tip amount'}>
        </CalculatorOutputAmount>
      </div>

      <div className="calculator-output__amount-labels">
        <CalculatorOutputAmount
          amount={0}
          label={'Total'}>
        </CalculatorOutputAmount>
      </div>

      <div className="calculator-output__reset-button">
        <DefaultButton onClick={onResetInputsClick} buttonText="Reset"></DefaultButton>
      </div>

    </div>
  );
}

export default CalculatorOutput;
