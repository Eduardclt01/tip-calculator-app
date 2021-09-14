import './button.css'

function DefaultButton(props) {
  var buttonText = props.buttonText
  var onButtonClick = props.onButtonClick
  let className = props.style === 'SECONDARY' ? 'button button--secondary' : 'button';

  return (
    <button onClick={onButtonClick} className={className}>
      {buttonText}
    </button>
  );
}

export default DefaultButton;
