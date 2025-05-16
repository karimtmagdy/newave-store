import { cn } from "~/lib/utils";

const SidebarMobile = ({ openSidebar }: { openSidebar: boolean }) => {
  return (
    <aside
      className={cn(
        "sidebar-mobile",
        openSidebar ? "translate-x-0" : "-translate-x-full",
      )}
    >
      mobile sidebar
    </aside>
  );
};
export default SidebarMobile;
