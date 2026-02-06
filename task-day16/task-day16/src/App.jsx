import { useState } from "react";
import ItemCard from "./components/ItemCard";
import Controls from "./components/Controls";
import "./App.css";

function App() {
  const [name, setName] = useState("Andaleeb");
  const [hours, setHours] = useState(10);
  const [field, setField] = useState("Education");

  const increaseHours = () => setHours(hours + 1);
  const decreaseHours = () => setHours(hours - 1);

  const changeName = () => setName("New Volunteer");

  const reset = () => {
    setName("Andaleeb");
    setHours(10);
    setField("Education");
  };

  return (
    <div className="app">
      <h1>Volunteer Profile</h1>

      <ItemCard
        name={name}
        hours={hours}
        field={field}
      />

      <Controls
        increase={increaseHours}
        decrease={decreaseHours}
        changeName={changeName}
        reset={reset}
      />
    </div>
  );
}

export default App;
