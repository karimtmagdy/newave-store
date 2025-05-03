import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/utils/helpers";
import { LogOut } from "lucide-react";

const AdminSideBarMobile = ({ isOpen }: any) => {
  const { user } = useAuth();

  return (
    <aside
      className={cn(
        isOpen ? "w-56 bg-green-600" : "w-14 bg-red-600",
        "z-10 flex transform flex-col overflow-hidden border-r duration-300 ease-in-out md:hidden",
      )}
    >
      <div className="flex h-14 items-center justify-center border-b">AD</div>
      <ul>
        <li>URL</li>
        <li>URL</li>
        <li>URL</li>
      </ul>
      <UserItem />
    </aside>
  );
};

export default AdminSideBarMobile;

const UserItem = ({ isOpen }: any) => {
  const { user, isLoading, isAuthenticated } = useAuth();
  return (
    <>
      <div className="mt-auto border-t"></div>
      <div className="w-full p-1">
        <div
          className={cn(
            isOpen
              ? "w-full flex-row justify-between px-2 py-1"
              : "w-11 flex-col justify-center px-2 py-0.5",
            "mx-auto flex items-center gap-1 rounded-lg border",
          )}
        >
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 shrink-0 overflow-hidden rounded-lg select-none">
              {isLoading ? (
                user?.username.charAt(0)
              ) : (
                <img src={user?.photo?.url} alt={user?.slug} className='border w-full overflow-hidden rounded-lg h-full' />
              )}
            </div>

            <div
              className={cn(
                isOpen ? "flex flex-col leading-snug" : "hidden",
                "*:font-medium",
              )}
            >
              <strong className="text-sm text-zinc-700">
                {user?.username}
              </strong>
              <small className="text-xs text-zinc-500">{user?.email}</small>
            </div>
          </div>
          <form>
            <button>
              <LogOut />
            </button>
          </form>
        </div>
      </div>
      {/* 
      <div className="mt-auto flex h-14 items-center justify-center border-t">
        <div className="">{user?.username}</div>

        <span className="text-muted-foreground truncate text-xs">
          {user.email}
        </span>
      </div> */}
    </>
  );
};
