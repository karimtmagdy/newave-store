import Footer from "@/components/layout/Footer";
import { Outlet } from "react-router";

const UserLayout = () => {
  return <>
  <Outlet />
  <Footer />
  
  
  </>;
};
export default UserLayout;
