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
      <CalculatorOutputAmount
        amount={0}
        label={'Tip amount'}>
      </CalculatorOutputAmount>

      <CalculatorOutputAmount
        amount={0}
        label={'Total'}>
      </CalculatorOutputAmount>

      <DefaultButton onButtonClick={onResetInputsClick} buttonText="Reset" style="SECONDARY"></DefaultButton>

    </div>
  );
}

export default CalculatorOutput;
