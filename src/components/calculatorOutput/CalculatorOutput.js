import CalculatorOutputAmount from './CalculatorOutputAmount'
import './calculator-output.css'

function CalculatorOutput(props) {
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
        <button>Reset</button>
      </div>

    </div>
  );
}

export default CalculatorOutput;
