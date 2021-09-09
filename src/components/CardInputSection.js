import './../css/card-input-section.css'

function CardInputSection() {
  return (
    <div className="card-input-section">
      <div className="card-input-section__input-container">
        <label className="card-input-section__input-container__label">Bill</label>
        <input className="" type="number" aria-label="Toggle" />
      </div>

      <div className="card-input-section__input-container">
        <label className="card-input-section__input-container__label">Tip percentage</label>
        {/* change to buttons */}
        <input className="" type="number" aria-label="Toggle" />
      </div>

      <div className="card-input-section__input-container">
        <label className="card-input-section__input-container__label">Number of people</label>
        <input className="" type="number" aria-label="Toggle" />

      </div>
    </div>
  );
}

export default CardInputSection;
