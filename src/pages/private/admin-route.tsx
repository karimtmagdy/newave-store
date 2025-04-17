import { useAuth } from "@/hooks/use-auth";
import { useEffect, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isAdmin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/admin";

  useEffect(() => {
    if (isAuthenticated && isAdmin) navigate(from, { replace: true });
    if (isAuthenticated && !isAdmin) navigate("/forbidden", { replace: true });
    if (!isAuthenticated) navigate("/unauthorized", { replace: true });
  }, [isAuthenticated, isAdmin, navigate, from]);

  return children;
};

export default AdminRoute;
