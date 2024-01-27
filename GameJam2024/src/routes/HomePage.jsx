import { useState } from "react";
import { useAuth } from "../hooks/AuthProvider";
import "../styles/homePage.css";

export default function HomePage() {
  const { user, login } = useAuth();
  const [name, setName] = useState("");

  const handleLogin = () => {
    const user = {
      name: name,
    };
    login(user);
  };

  return (
    <div className="homepage-wrapper">
      <h1>The Laughing Game</h1>
      <input onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
