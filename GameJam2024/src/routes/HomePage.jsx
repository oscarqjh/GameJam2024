import { useState } from "react";
import { useAuth } from "../hooks/AuthProvider";
import "../styles/homePage.css";
import NButton from "../component/NButton";
import { TextInput } from "grommet";

export default function HomePage() {
  const { user, login } = useAuth();
  const [name, setName] = useState("");

  const handleLogin = () => {
    const user = {
      name: name,
    };
    login(user);
  };

  const prompt = () =>{
    window.alert("Your name cannot be empty!");
  }

  return (
    <div className="homepage-wrapper">
      <h1>The Laughing Game</h1>
      <div>
      <TextInput
      style={{maxWidth:'250px',margin:'5px'}}
      placeholder="Name"
      value={name}
      onChange={event => setName(event.target.value)}
    />
      </div>
      <NButton onClick={name.trim().length>0?handleLogin:prompt} label={'Login'}></NButton>
    </div>
  );
}
