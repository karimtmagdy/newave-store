import BaseHeader from "./base-header";
import { Link } from "react-router";
import logo from "@/assets/svg/newave-store.svg";

const UserHeader = () => {
  // Create the logo content for the left side
  const logoContent = (
    <Link to="/">
      <img src={logo} alt="Newave Store" />
    </Link>
  );

  /* <span className="text-xl font-bold">User Dashboard</span> */

  return <BaseHeader leftContent={logoContent} />;
};

export default UserHeader;
