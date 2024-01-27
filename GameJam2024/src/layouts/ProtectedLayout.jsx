import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import { useEffect } from "react";

export default function ProtectedLayout() {
  const { user } = useAuth();

  useEffect(() => {
    document.documentElement.style.overflow = "auto";
  });

  if (!user) {
    console.log("Unauthorised");
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
