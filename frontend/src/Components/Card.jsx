import "../css/Card.css";

function Card({ movie }) {
  function onfavoriteClick() {
    alert("Clicked");
  }

  return (
    <div className="card">
      <div className="poster">
        <img src={movie.url} alt={movie.title} />

        <div className="category-badge">
          {movie.category || "DOORS"}
        </div>

        <div className="overlay">
          <button className="cart-btn" onClick={onfavoriteClick}>
            🤍
          </button>
        </div>
      </div>

      <div className="info">
        <h3>{movie.title}</h3>

        <p className="description">
          {movie.description}
        </p>

        <p className="sizes">
          <span>SIZES:</span>{" "}
          {movie.sizes || "4ft×7ft · 3ft×7ft · Custom"}
        </p>

        <div className="price-section">
          <p className="price-label">PER PIECE</p>
          <h2 className="price">{movie.price}</h2>
        </div>

        <div className="qty-container">
          <span>QTY</span>

          <div className="qty-box">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>

        <button className="order-btn">
          + ADD TO ORDER
        </button>
      </div>
    </div>
  );
}

export default Card;