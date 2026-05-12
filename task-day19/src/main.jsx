import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { VolunteerProvider } from "./context/VolunteerContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <VolunteerProvider>
        <App />
      </VolunteerProvider>
    </BrowserRouter>
  </React.StrictMode>
);