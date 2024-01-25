import { Outlet, Link } from "react-router-dom";

import "../styles/app.css";

export default function App() {
  return (
    <>
      <div className="nav-bar-wrapper">
        <Link to={"home"}>Home</Link>
        <Link to={"about"}>About</Link>
      </div>
      <Outlet />
    </>
  );
}
