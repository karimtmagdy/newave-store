import { useSideBar } from "@/context/SideBarContext";
import ContentSideMenu from "./ContentSideMenu";
import FooterSidebar from "./FooterSidebar";
import { cn } from "@/lib/helper";

const SidebarDesktop = () => {
  const { isOpenSidebar } = useSideBar();
  return (
    <aside
      className={cn(
        "sidebar-desktop sticky inset-y-0 top-1 left-0 hidden overflow-hidden rounded-xl border transition-all duration-300 ease-in-out md:flex md:flex-col",
        isOpenSidebar
          ? "sidebar-open w-64"
          : "sidebar-close w-0 -translate-x-full border-none opacity-0",
      )}
    >
      <div className="block h-[52px] border-b p-4">header</div>
      <ContentSideMenu />
      <FooterSidebar />
    </aside>
  );
};

export default SidebarDesktop;
