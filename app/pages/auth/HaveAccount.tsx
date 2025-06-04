import { API_SIGNIN, API_SIGNUP } from "@/services/constants/api-url";
import { useEffect } from "react";
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
    <>
      <div className="flex items-center gap-2 text-sm">
        <p>{loc ? "Already" : "Don't"} have an account?</p>
        <Link
          to={loc ? API_SIGNIN : API_SIGNUP}
          className="text-blue-700 hover:text-blue-500 hover:underline"
        >
          {loc ? "Sign in" : "Sign up"}
        </Link>
      </div>
    </>
  );
};
export default HaveAccount;
