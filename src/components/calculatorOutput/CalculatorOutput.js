import CalculatorOutputAmount from './CalculatorOutputAmount'
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

      <div className="calculator-output__container">
        <button onClick={onResetInputsClick} >Reset</button>
      </div>

    </div>
  );
}

export default CalculatorOutput;
