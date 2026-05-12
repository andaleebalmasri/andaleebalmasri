import { createContext, useState } from "react";

export const VolunteerContext = createContext();

export const VolunteerProvider = ({ children }) => {
  const [volunteers, setVolunteers] = useState([]);

  const addVolunteer = (volunteer) => {
    setVolunteers((prev) => [...prev, volunteer]);
  };

  return (
    <VolunteerContext.Provider value={{ volunteers, addVolunteer }}>
      {children}
    </VolunteerContext.Provider>
  );
};