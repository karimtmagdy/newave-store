import { Outlet } from "react-router";

const AuthenticationLayout = () => {
  return (
    <div className="flex h-dvh w-full items-center justify-center p-1 *:max-w-full *:space-y-2 *:rounded-lg *:border *:p-4 *:sm:w-80 *:md:w-96 *:lg:w-2/6 *:xl:w-1/3">
      <Outlet />
    </div>
  );
};

export default AuthenticationLayout;
