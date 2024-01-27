import { Outlet } from "react-router-dom";
import { AuthProvider } from "../hooks/AuthProvider";

export default function AuthLayout() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
