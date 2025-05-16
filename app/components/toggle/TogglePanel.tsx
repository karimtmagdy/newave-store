// import { Button } from "@/components/ui";
import { Home, Shield } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

const TogglePanel = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const toggleSwitchPage = () => {
    const isAdminPath = pathname.includes("/admin");
    if (isAdminPath) navigate("/");
    else navigate("/admin");
  };

  {
    /* <Button onClick={toggleSwitchPage} icon={3} variant="ghost"> */
  }
  return (
    <button
      onClick={toggleSwitchPage}
      className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg border"
    >
      {pathname.includes("admin") ? <Home /> : <Shield />}
    </button>
  );
};

export default TogglePanel;
