import { useAuth } from "../context/AuthContext.jsx";
function Profile() {
    const {user} = useAuth();
    return (
        <div>
            <h1>Profile</h1>
            <p>
            Wellcome,<b>{user.name}</b>
            </p>
            <p> This page protected (only logged-in users can see it ).</p>
        </div>
    );
}
export default Profile;