import { AuthProvider } from "@/context/AuthContext";
import { CategoryProvider } from "@/context/CategoryContext";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <CategoryProvider>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </CategoryProvider>
  );
};

export default RootLayout;
