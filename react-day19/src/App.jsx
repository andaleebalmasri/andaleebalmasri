import { Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <div style ={{padding:16}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      {/*Protected Route*/}
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      </Routes>
    </div>
  );
}

export default App;