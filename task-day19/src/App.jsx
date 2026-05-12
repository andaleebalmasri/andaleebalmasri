import { Link } from "react-router-dom";
import { useContext } from "react";
import { VolunteerContext } from "./context/VolunteerContext";
function Navbar() {
  const { volunteers } = useContext(VolunteerContext);

  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/opportunities">Opportunities</Link> |{" "}
      <Link to="/volunteer">Volunteer</Link> |{" "}
      <Link to="/volunteers">Volunteers</Link> |{" "}
      <Link to="/contact">Contact</Link>

      <div style={{ marginTop: "10px", fontWeight: "bold" }}>
        Volunteers: {volunteers.length}
      </div>
    </nav>
  );
}

export default Navbar;