// import UserHeader from "@/components/common/header/UserHeader";
// import Footer from "@/components/element/Footer";
// import NavCategories from "@/components/users/nav-categories";
import UserHeader from "@/components/common/header/user-header";
import { Link, Outlet } from "react-router";

const UserLayout = () => {
  return (
    <div className="user-layout min-h-[calc(100vh-56px)]">
      <UserHeader />
      {/* <NavCategories/> */}
      <nav className="flex h-12 items-center border-b bg-chart-3 px-2">
        <ul className="flex items-center gap-2">
          <li>
            <Link to="/" className="bg-pink-500 px-2 py-1 hover:bg-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/user"
              className="bg-pink-500 px-2 py-1 hover:bg-yellow-500"
            >
              User
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="mb-6 text-2xl font-bold">User Dashboard</h1>
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default UserLayout;
