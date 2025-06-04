import { Button } from "@/components/ui";
import { useAuth } from "@/context/AuthContext";
import { Home, Shield } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

const TogglePanel = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const toggleSwitchPage = () => {
    const isAdminPath = pathname.includes("/admin");
    if (isAdminPath) navigate("/");
    else navigate("/admin");
  };
  return (
    <>
      {isAdmin && (
        <Button icon={2} variant="muted" onClick={toggleSwitchPage}>
          {pathname.includes("admin") ? <Home /> : <Shield />}
        </Button>
      )}
    </>
  );
};

export default TogglePanel;
