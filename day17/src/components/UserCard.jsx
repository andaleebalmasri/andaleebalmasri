import "./UserCard.css";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3>{user.firstName} {user.lastName}</h3>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserCard;
