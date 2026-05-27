import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h3>ALFA ALUMINIUM</h3>
        <span>KANNUR, KERALA</span>
      </div>

      <div className="navbar-links">
        <Link to="/Whatsapp" className="nav-link order-link">
        💬 MESSAGE</Link>
        <Link to="/Contact" className="nav-link order-link">
        📞 CALL
        </Link>

        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/cart" className="nav-link cart-link">
          🛒 Cart
        </Link>

        <Link to="/order" className="nav-link order-link">
        Orders
        </Link>

      </div>
    </nav>
  );
}

export default NavBar;