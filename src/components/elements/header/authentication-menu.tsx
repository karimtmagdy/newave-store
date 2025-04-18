import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import ListUnauthorized from "./list-unauthorized";
import ListAuthorized from "./list-authorized";

const AuthenticationMenu = ({ isOpen }: { isOpen: boolean }) => {
  const { isAuthenticated, user } = useAuth();

  return (
    <>
      {isOpen && (
        <ol
          className={cn(
            "dark:bg-background bg-background absolute top-12 right-0 flex flex-col gap-y-1 rounded-lg border p-1 *:w-full *:overflow-hidden *:rounded-lg",
            isOpen ? "block" : "hidden",
            isAuthenticated ? "w-52" : "w-36",
          )}
        >
          {user ? <ListAuthorized /> : <ListUnauthorized />}
        </ol>
      )}
    </>
  );
};

export default AuthenticationMenu;
