import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import "../styles/aboutPage.css";

export default function AboutPage() {
  const { user, logout } = useAuth();
  const nvg = useNavigate()

  const handleLogout = () => {
    logout();
  };

  const handleStart = () =>{
    nvg("/game")
  }

  return (
    <>
      <div className="about-page-wrapper">
        <h2>Welcome, {user.name}</h2>
        <h3>To start, read out the words shown</h3>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleStart}>Start Game</button>
      </div>
    </>
  );
}
