import { useState } from "react";

function VolunteerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Volunteer Application</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default VolunteerForm;