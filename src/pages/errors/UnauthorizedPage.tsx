import SectionFixed from "@/components/elements/section-fixed";
import Button from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { API_SIGNIN } from "@/services/api/api";
import { ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const UnauthorizedPage = () => {
  const { isAuthenticated } = useAuth();
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <SectionFixed errorNumber="401" errorName="Access Denied Unauthorized">
      <p className="dark:text-danger mt-2 flex items-center gap-x-2 text-xs text-zinc-600 md:text-base">
        <ShieldAlert className="hidden md:block md:size-5" />
        {!isAuthenticated
          ? "You need to sign in to access this page. Your session may have expired or you haven't logged in yet."
          : "Sorry, you don't have permission to access this page."}
      </p>
      {countdown > 0 && (
        <span>
          You will be redirected to the home page in {countdown} seconds.
        </span>
      )}
      <Button className="mt-6" shape={"curved"}>
        <Link to={!isAuthenticated ? API_SIGNIN : "/"}>
          {!isAuthenticated ? "Sign In" : "Go to Home"}
        </Link>
      </Button>
    </SectionFixed>
  );
};

export default UnauthorizedPage;
