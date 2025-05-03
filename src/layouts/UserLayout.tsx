import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Outlet } from "react-router";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default UserLayout;
