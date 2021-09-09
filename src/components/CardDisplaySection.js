import './../css/card-display-section.css'

function CardDisplaySection() {
  return (
    <div className="card-display-section">

      <div className="card-display-section__container">
        <div className="card-display-section__container--labels">
          <p>Tip Amount</p>
          <p>/person</p>
        </div>

        <div className="card-display-section__container--amount">
          <p>R0</p>
        </div>
      </div>

      <div className="card-display-section__container">
        <div className="card-display-section__container--labels">
          <p>Total</p>
          <p>/person</p>
        </div>

        <div className="card-display-section__container--amount">
          <p>R0</p>
        </div>
      </div>

      <div className="card-display-section__container">
        <button>Reset</button>
      </div>

    </div>
  );
}

export default CardDisplaySection;
