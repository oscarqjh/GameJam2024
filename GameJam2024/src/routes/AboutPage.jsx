import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import "../styles/aboutPage.css";
import NButton from "../component/NButton";
import { RiSpeakFill } from "react-icons/ri";
import { DiGithubBadge } from "react-icons/di";

export default function AboutPage() {
  const { user, logout } = useAuth();
  const nvg = useNavigate();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className="about-page-wrapper">
        <h2>Welcome, {user.name}</h2>
        <h3>To start, read out the words shown</h3>
        <div>
        <RiSpeakFill fontSize={'15rem'} />
        </div>
        
        <NButton onClick={handleStart} label={"Start Game"}></NButton>
        <NButton onClick={handleLogout} label={"Logout"}></NButton>
        <h4>A game developed for GlobalGameJam 2024</h4>
        <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{display:'inline-block'}}>
          <DiGithubBadge fontSize={'2rem'} style={{display:'inline-block',margin:5,verticalAlign:'top'}}/>
          <h5 style={{display:'inline-block',verticalAlign:'top'}}>oscarqjh</h5>    
        </div>
        <div style={{display:'inline-block'}}>
          <DiGithubBadge fontSize={'2rem'} style={{display:'inline-block',margin:5,verticalAlign:'top'}}/>
          <h5 style={{display:'inline-block',verticalAlign:'top'}}>ykIsCoding</h5>
        </div>
        </div>
      </div>
    </>
  );
}
