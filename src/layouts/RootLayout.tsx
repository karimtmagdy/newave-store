import { Outlet } from "react-router";
import { ThemeProvider } from "@/context/theme-context";
import { AuthProvider } from "@/context/AuthContext";

// import { useCategory } from "@/hooks/useCategory";

const RootLayout = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default RootLayout;
