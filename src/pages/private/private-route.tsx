import { useAuth } from "@/hooks/use-auth";
import { useEffect, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";
type PrivateRouteProp = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProp) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.form?.pathname;

  useEffect(() => {
    // Redirect to login page and save the location they were trying to access
    if (!isAuthenticated) {
      if (from) {
        navigate(from, {
          replace: true,
          state: { from: location },
        });
      }
    }
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, navigate]);

  return children;
};
export default PrivateRoute;
