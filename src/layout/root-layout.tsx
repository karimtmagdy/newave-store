import { AuthProvider } from "@/context/auth-context";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default RootLayout;
