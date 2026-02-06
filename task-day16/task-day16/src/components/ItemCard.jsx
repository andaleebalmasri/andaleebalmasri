function ItemCard({ name, hours, field }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Volunteer Hours: {hours}</p>
      <p>Field: {field}</p>
    </div>
  );
}

export default ItemCard;
