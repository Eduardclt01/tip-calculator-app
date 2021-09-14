import './calculator-output-amount.css'

function CalculatorOutputAmount(props) {
  return (
    <div className="calculator-output-amount">
      <div className="calculator-output-amount__label">
        <p>{props.label}</p>
        <p>/person</p>
      </div>

      <div className="calculator-output-amount__total">
        <p>R{props.amount}</p>
      </div>
    </div>
  );
}

export default CalculatorOutputAmount;
