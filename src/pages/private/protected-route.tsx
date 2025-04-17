import { useAuth } from "@/hooks/use-auth";
import { API_SIGNIN } from "@/services/api/api";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router";

type ProtectedRouteProp = {
  children: ReactNode;
  // requiredRole?: "user" | "admin";
};
const ProtectedRoute = ({ children }: ProtectedRouteProp) => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) navigate(API_SIGNIN, { replace: true });
    // If a specific role is required and user doesn't have it
    //    if (!isAuthenticated && requiredRole && user?.role !== requiredRole)
    if (!isAuthenticated && !user?.role)
      navigate("/unauthorized", { replace: true });
  }, [isAuthenticated, navigate, user?.role]);

  return children;
};

export default ProtectedRoute;
