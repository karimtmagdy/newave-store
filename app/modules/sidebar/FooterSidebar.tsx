import UserAvatar from "@/components/element/UserAvatar";
import { useAuth } from "@/context/AuthContext";

const FooterSidebar = () => {
  const { user } = useAuth();

  {
    /* <footer className="foot-side bg-amber-400 mt-auto flex h-12 items-center gap-2 border-t px-2 py-1 duration-300 ease-in-out"> */
  }
  return (
    <footer className="foot-side mt-auto flex h-12 items-center gap-2 border-t bg-amber-400 px-2 py-1 duration-300 ease-in-out">
      <UserAvatar className="h-10 w-10 rounded-lg" />
      <div className="leading-none">
        <p className="text-sm font-semibold">{user?.username}</p>
        <p className="text-xs text-zinc-400">{user?.email}</p>
      </div>
    </footer>
  );
};

export default FooterSidebar;
