// function Card({title , description }) {

//   return (
//     <div className="card">
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }
// export default Card;

function Card(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
