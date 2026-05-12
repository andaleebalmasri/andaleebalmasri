import { useContext } from "react";
import { VolunteerContext } from "../context/VolunteerContext";

function Volunteers() {
  const { volunteers } = useContext(VolunteerContext);

  return (
    <div className="page">
      <h2>Registered Volunteers</h2>

      {volunteers.length === 0 ? (
        <p>No volunteers yet.</p>
      ) : (
        <ul>
          {volunteers.map((v, index) => (
            <li key={index}>
              {v.name} - {v.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Volunteers;