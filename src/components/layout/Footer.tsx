import { Link } from "react-router";
import Container from "../ui/container";

const Footer = () => {
  return (
    <footer className="bg-white py-6 text-black">
      <Container className="px-4">
        <p className="text-zinc-700">
          © <strong className="text-black">Newave Store.</strong>{" "}
          {new Date().getFullYear()} All rights reserved. designed by{" "}
          <Link to={""}>@karimtmagdy</Link>
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
