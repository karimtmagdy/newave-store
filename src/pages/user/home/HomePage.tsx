// import ProductList from "@/components/elements/product/product-list";
import { Button } from "@/components/ui";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import { API_SIGNIN, API_SIGNUP } from "@/services/api/api";
import { LogOut, User, UserCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
// import { getCookie } from "@/lib/cookie";
const HomePage = () => {
  // const { user } = useAuth();
  // const time = new Date().toLocaleString();
  // const updated = `${user?.email} updated at ${time} with new token.`;
  return (
    <div>
      <Header />

      <h4>HomePage</h4>
      {/* {JSON.stringify(localStorage.getItem("token"))} */}
      {/* {JSON.stringify(getCookie("refreshToken"))} */}

      {/* <p>{updated}</p> */}
    </div>
  );
};

export default HomePage;

const Header = () => {
  const { user, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="flex h-14 items-center justify-center border-b px-4">
      <div className="container flex items-center justify-between">
        <span>logo</span>

        <div className="relative">
          <Button size={"icon"} variant={"outline"} onClick={toggle}>
            {user && isAuthenticated ? <User /> : <UserCircle />}
          </Button>
          {isOpen && (
            <ul
              className={cn(
                user && isAuthenticated ? "w-52" : "w-36",
                "absolute top-14 right-0 rounded-lg border bg-white p-1",
              )}
              onClick={() => setIsOpen(false)}
            >
              {user && isAuthenticated ? (
                <UserDropMenu />
              ) : (
                <UserNotAuthenticated />
              )}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

const UserNotAuthenticated = () => {
  return (
    <>
      <li>
        <Link to={API_SIGNUP}>
          <Button size={"sm"} fullWidth variant={"ghost"}>
            register
          </Button>
        </Link>
      </li>
      <li>
        <Link to={API_SIGNIN}>
          <Button size={"sm"} fullWidth variant={"ghost"}>
            login
          </Button>
        </Link>
      </li>
    </>
  );
};
const FormLogout = () => {
  const { isAuthenticated, logout } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) return logout;
  }, [isAuthenticated]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return logout!();
  };
  return (
    <form onSubmit={onSubmit}>
      <Button size={"sm"} fullWidth variant={"ghost"} className="justify-start">
        <LogOut />
        logout
      </Button>
    </form>
  );
};

const UserDropMenu = () => {
  const { user } = useAuth();
  return (
    <>
      <li>
        <Link
          to={`profile/${user?._id}`}
          className="flex h-9 items-center px-2"
        >
          profile
        </Link>
      </li>
      <li>
        <Link to={"settings"} className="flex h-9 items-center px-2">
          settings
        </Link>
      </li>
      <li>
        <FormLogout />
      </li>
    </>
  );
};
