import Image from "../ui/Image";
import logo from "@/assets/svg/newave-store.svg";
const Logo = () => {
  return (
    <div className="logo flex items-center justify-center gap-1">
      <Image src={logo} alt="logo image of newave store" loading="lazy" />
      <span className="font-mono font-bold">newave</span>
    </div>
  );
};

export default Logo;
