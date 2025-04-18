import Button from "@/components/ui/button";
import { Home, Shield } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useLocation, useNavigate } from "react-router";
import { memo } from "react";

const ToggleAdmin = () => {
  const { isAdmin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminPage = location.pathname.includes("/admin");
  const toggle = () => {
    if (isAdminPage) {
      navigate("/", { replace: true });
    } else if (!isAdminPage) {
      navigate("/admin", { replace: true });
    }
  };
  return (
    <>
      {isAdmin && (
        <Button variant={"outline"} icon={2} shape={"curved"} onClick={toggle}>
          {isAdminPage ? <Home /> : <Shield />}
        </Button>
      )}
    </>
  );
};

export default memo(ToggleAdmin);
