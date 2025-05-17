import { Home, Shield } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { Button } from "../ui";

const TogglePanel = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const toggleSwitchPage = () => {
    const isAdminPath = pathname.includes("/admin");
    if (isAdminPath) navigate("/");
    else navigate("/admin");
  };

  return (
    <Button icon={3} variant="ghost" shape="square" onClick={toggleSwitchPage}>
      {pathname.includes("admin") ? <Home /> : <Shield />}
    </Button>
  );
};

export default TogglePanel;
