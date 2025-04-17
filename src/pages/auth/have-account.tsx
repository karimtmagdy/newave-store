import { API_SIGNIN, API_SIGNUP } from "@/services/api/api";
import { memo, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
const HaveAccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loc = location.pathname.includes(API_SIGNUP);
  useEffect(() => {
    if (!loc) {
      navigate(API_SIGNIN, {
        state: { form: API_SIGNUP },
      });
    } else {
      navigate(API_SIGNUP, {
        state: { form: API_SIGNIN },
      });
    }
  }, [navigate, loc]);
  return (
    <div className="mt-2 flex items-center gap-x-2">
      <p className="text-muted-foreground text-sm">
        {loc ? "Already have an account?" : "Don't have an account?"}
      </p>
      <Link
        to={loc ? API_SIGNIN : API_SIGNUP}
        className="text-primary underline hover:text-blue-500 hover:underline active:text-blue-700"
      >
        {loc ? "Sign in" : "Sign up"}
      </Link>
    </div>
  );
};

export default memo(HaveAccount);
