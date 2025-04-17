import Button from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
import { Link, useNavigate } from "react-router";

const ServerErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background fixed inset-0 !z-50 flex h-dvh w-full flex-col items-center justify-center text-center">
      <h1 className="text-destructive text-6xl font-bold">403</h1>
      <div className="mt-4 flex gap-x-2">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          Access Denied
        </h2>
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          Forbidden
        </h2>
      </div>
      <p className="dark:text-danger mt-2 flex items-center gap-x-2 text-xs text-zinc-600 md:text-base">
        <ShieldAlert className="hidden md:block md:size-5" />
        You don't have permission to access this page. This area is restricted
        to administrators only.
      </p>
      <p className="text-muted-foreground mt-2">
        We're sorry, something went wrong.
      </p>
      <Button
        className="mt-6"
        // size={"md"}
        // shape={"curved"}
        // palette={"ghost"}
        onClick={() => navigate("/")}
      >
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  );
};

export default ServerErrorPage;
