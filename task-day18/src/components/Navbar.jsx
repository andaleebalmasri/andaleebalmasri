import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo"/>
        <span style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}></span>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/opportunities">Opportunities</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;