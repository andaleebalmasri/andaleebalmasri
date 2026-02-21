import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Navbar() {
    const {user,logout} = useAuth();
    return (
    <nav style={{display:"flex",gap:12, marginBottom:16}}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {/*show login link only if user is not logged in*/}
        {!user && <Link to="/login">Login</Link>}
        {/*show logout button only if user is logged in*/}
        {user &&(
         <button type="button" onClick={logout}>Logout</button>
         )}
        
    </nav>);

}
export default Navbar;