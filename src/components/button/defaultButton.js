import './button.css'

function DefaultButton(props) {
  var buttonText = props.buttonText
  var onButtonClick = props.onClick

  return (
    <button onClick={onButtonClick} className="button">
      {buttonText}
    </button>
  );
}

export default DefaultButton;
