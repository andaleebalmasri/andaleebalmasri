import { useState, useContext } from "react";
import { VolunteerContext } from "../context/VolunteerContext";

function VolunteerForm() {
  const { addVolunteer } = useContext(VolunteerContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addVolunteer({ name, email });

    alert("Form Submitted Successfully");

    setName("");
    setEmail("");
  };

  return (
    <div className="page">
      <h2>Volunteer Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default VolunteerForm;