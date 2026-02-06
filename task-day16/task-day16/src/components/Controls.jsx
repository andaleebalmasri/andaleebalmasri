function Controls({ increase, decrease, changeName, reset }) {
  return (
    <div className="controls">
      <button onClick={increase}>Increase Hours</button>
      <button onClick={decrease}>Decrease Hours</button>
      <button onClick={changeName}>Change Name</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Controls;
