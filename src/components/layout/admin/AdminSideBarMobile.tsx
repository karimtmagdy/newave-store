// import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/utils/helpers";

const AdminSideBarMobile = ({ isOpen }: any) => {
  //   const { user } = useAuth();
  return (
    <aside
      className={cn(
        isOpen ? "w-56" : "w-14",
        "z-10 flex transform flex-col overflow-hidden border-r bg-white duration-300 ease-in-out md:hidden",
      )}
    >
      <div className="flex h-14 items-center justify-center border-b">AD</div>
      <ul>
        <li>URL</li>
        <li>URL</li>
        <li>URL</li>
      </ul>
      <div className="mt-auto flex h-14 items-center justify-center border-t">
        <div className="">AD</div>
      </div>
    </aside>
  );
};

export default AdminSideBarMobile;
