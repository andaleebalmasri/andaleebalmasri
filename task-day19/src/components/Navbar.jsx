import { Link } from "react-router-dom";
import { useContext } from "react";
import { VolunteerContext } from "./Navbar";

function Navbar() {
  const { volunteers } = useContext(VolunteerContext);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/opportunities">Opportunities</Link>
      <Link to="/volunteer">Volunteer</Link>
      <Link to="/volunteers">Volunteers</Link>
      <Link to="/contact">Contact</Link>

      <div className="counter">
        Volunteers: {volunteers.length}
      </div>
    </nav>
  );
}

export default Navbar;