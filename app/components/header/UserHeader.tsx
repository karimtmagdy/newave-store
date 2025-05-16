import BaseHeader from "./BaseHeader";
import logoLight from "~/welcome/logo-light.svg";
import logoDark from "~/welcome/logo-dark.svg";
import { Link } from "react-router";
const UserHeader = () => {
  // Create the logo content for the left side
  const logoContent = (
    <>
      <Link to="/">
        <img
          src={logoLight}
          alt="Newave Store"
          className="block w-full dark:hidden"
        />
        <img
          src={logoDark}
          alt="Newave Store"
          className="hidden w-full dark:block"
        />
      </Link>
      {/* <span className="text-xl font-bold">User Dashboard</span> */}
    </>
  );

  // Pass the logo content to the BaseHeader
  return <BaseHeader leftContent={logoContent} />;
};

export default UserHeader;
