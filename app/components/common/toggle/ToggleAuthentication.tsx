import Button from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/helper";
import { API_SIGNIN, API_SIGNUP } from "@/services/constants/api-url";
import { LogOut, UserCircle } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router";
import useClickOutSide from "@/hooks/useClickOutSide";
const ToggleAuthentication = () => {
  const [isOpenDropMenu, setIsOpenDropMenu] = useState(false);
  const handleOpen = useCallback(() => {
    setIsOpenDropMenu((prevState) => !prevState);
  }, []);
  const { isAuthenticated, user } = useAuth();
  const ref = useClickOutSide<HTMLDivElement>(() => setIsOpenDropMenu(false));
  return (
    <>
      <Button
        onClick={handleOpen}
        icon={2}
        variant={"muted"}
        aria-haspopup="true"
        aria-expanded={isOpenDropMenu}
      >
        <span className="sr-only">Open user menu</span>
        {isAuthenticated ? (
          <div className="h-full w-full overflow-hidden">
            <img src={user?.photo?.url} alt="" />
          </div>
        ) : (
          <UserCircle />
        )}
      </Button>

      {isOpenDropMenu && (
        <div
          ref={ref}
          className={cn(
            "bg-background absolute top-12 right-0 z-10 rounded-lg border p-4 shadow",
            isAuthenticated ? "w-52" : "w-40",
          )}
        >
          {isAuthenticated && (
            <h6 className="text-deep font-semibold select-none">
              User information
            </h6>
          )}
          {/* <ol role="menu" className=""> */}
          <ol role="menu" className="space-y-[var(--system)]">
            {isAuthenticated ? <SignedIn /> : <NotSigned />}
          </ol>
        </div>
      )}
    </>
  );
};

export default ToggleAuthentication;

const NotSigned = () => {
  const menu = useMemo(
    () => [
      { name: "register", href: API_SIGNUP },
      { name: "login", href: API_SIGNIN },
    ],
    [],
  );
  return (
    <>
      {menu.map(({ name, href }) => (
        <li key={name}>
          <Link
            role="menuitem"
            to={href}
            className="hover:bg-sidebar-accent flex h-7 items-center justify-center rounded-lg px-[var(--system-lg)] py-1"
          >
            {name}
          </Link>
        </li>
      ))}
    </>
  );
};
const SignedIn = () => {
  const { isAuthenticated, signout } = useAuth();
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAuthenticated) signout();
  };
  const menu = useMemo(
    () => [
      { name: "profile settings", href: "/profile", icon: LogOut },
      { name: "account", href: "/account", icon: LogOut },
      { name: "preferences", href: "/preferences", icon: LogOut },
      { name: "help & support", href: "/help-and-support", icon: LogOut },
    ],
    [],
  );
  return (
    <>
      {menu.map(({ name, href }) => (
        <li key={name}>
          <Link
            to={href}
            role="menuitem"
            className="hover:bg-sidebar-accent flex h-7 items-center gap-x-[var(--system-lg)] rounded-lg bg-zinc-200 px-[var(--system-lg)] py-1"
          >
            {/* {React.createElement({icon },)} */}
            {/* <Icon icon={icon} /> */}
            {name}
          </Link>
        </li>
      ))}
      <li>
        <form onSubmit={onSubmit}>
          <Button
            align={"left"}
            variant={"ghost"}
            fullWidth
            size={"xs"}
            className="px-[var(--system-lg)] hover:text-red-500"
          >
            <LogOut /> logout
          </Button>
        </form>
      </li>
    </>
  );
};
