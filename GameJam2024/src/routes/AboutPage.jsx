import { useAuth } from "../hooks/AuthProvider";
import "../styles/aboutPage.css";

export default function AboutPage() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className="about-page-wrapper">
        <h2>Welcome, {user.name}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}
