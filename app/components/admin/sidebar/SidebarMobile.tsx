import { cn } from "~/lib/utils";
import FooterSidebar from "./FooterSidebar";
import ContentSidebar from "./ContentSidebar";
import ToggleMenuBar from "~/components/toggle/ToggleMenuBar";

const SidebarMobile = ({
  openSidebar,
  toggleSidebar,
}: {
  openSidebar: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <aside
      className={cn(
        "sidebar-mobile",
        openSidebar ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <article className="head-side justify-between h-[52px]">
        <span>desktop sidebar</span>

        <ToggleMenuBar {...{ toggleSidebar, openSidebar }} />
      </article>
      <ContentSidebar />
      <FooterSidebar />
    </aside>
  );
};
export default SidebarMobile;
