import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

export default function PublicLayout() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
