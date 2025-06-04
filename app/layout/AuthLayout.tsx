import { Link, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <section className="auth-form bg-background flex h-dvh w-full flex-col items-center justify-center p-4">
      <Outlet />
      <div className="mt-1 text-center text-sm text-zinc-500">
        <p className="">by clicking continue, you agree to our</p>
        <Link to={"/settings/terms"} className="underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link to={"/settings/privacy-policy"} className="underline">
          Privacy Policy
        </Link>
      </div>
    </section>
  );
};

export default AuthLayout;
