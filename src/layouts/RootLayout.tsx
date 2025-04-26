import { Outlet } from "react-router";
import { ThemeProvider } from "@/context/theme-context";
// import { useCategory } from "@/hooks/useCategory";
 

const RootLayout = () => {
  return (
    //<AuthProvider>
    <div className="app-layout">
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>

      {/* <CategoryTable /> */}
    </div>
    //</AuthProvider>
  );
};

export default RootLayout;

 