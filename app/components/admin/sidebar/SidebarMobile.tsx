import { cn } from "~/lib/utils";
import FooterSidebar from "./FooterSidebar";
import ContentSidebar from "./ContentSidebar";
import ToggleMenuBar from "~/components/toggle/ToggleMenuBar";
import type { ToggleSidebarProps } from "~/layout/AdminLayout";

const SidebarMobile = ({
  openSidebar,
  toggleSidebar,
  setOpenSidebar,
}: {
  openSidebar: boolean;
  toggleSidebar: () => void;
  setOpenSidebar: any;
}) => {
  return (
    <aside
      className={cn(
        "sidebar-mobile",
        openSidebar ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <article className="head-side h-[52px] justify-between">
        <span>desktop sidebar</span>

        <ToggleMenuBar {...{ toggleSidebar, openSidebar }} />
      </article>
      <ContentSidebar {...setOpenSidebar} />
      <FooterSidebar />
    </aside>
  );
};
export default SidebarMobile;
