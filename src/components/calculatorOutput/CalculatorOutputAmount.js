import './calculator-output.css'

function CalculatorOutputAmount(props) {
  return (
    <div className="calculator-output">
      <div className="calculator-output__container">
        <div className="calculator-output__container--labels">
          <p>{props.label}</p>
          <p>/person</p>
        </div>

        <div className="calculator-output__container--amount">
          <p>R{props.amount}</p>
        </div>
      </div>
    </div>
  );
}

export default CalculatorOutputAmount;
