import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">Amazon Clone</Link>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="nav-buttons">

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Register
        </Link>

        <Link to="/cart">
          Cart
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;