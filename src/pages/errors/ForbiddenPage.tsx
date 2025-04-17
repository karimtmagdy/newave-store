import SectionFixed from "@/components/elements/section-fixed";
import Button from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
import { Link, useNavigate } from "react-router";

const ForbiddenPage = () => {
  const navigate = useNavigate();

  return (
    <SectionFixed errorNumber="403" errorName="Access Denied Forbidden">
      <p className="dark:text-danger mt-2 flex items-center gap-x-2 text-xs text-zinc-600 md:text-base">
        <ShieldAlert className="hidden md:block md:size-5" />
        You don't have permission to access this page. This area is restricted
        to administrators only.
      </p>
      <Button className="mt-6" shape={"curved"} onClick={() => navigate("/")}>
        <Link to="/">Go to Home</Link>
      </Button>
    </SectionFixed>
  );
};

export default ForbiddenPage;
