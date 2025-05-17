import { cn } from "~/lib/utils";
import FooterSidebar from "./FooterSidebar";
import ContentSidebar from "./ContentSidebar";

const SidebarDesktop = ({ openSidebar }: { openSidebar: boolean }) => {
  return (
    <aside
      className={cn(
        "sidebar-desktop",
        openSidebar ? "" : "w-0 -translate-x-full border-none opacity-0",
      )}
    >
      <article className="head-side">desktop sidebar</article>
      <ContentSidebar />
      <FooterSidebar />
    </aside>
  );
};

export default SidebarDesktop;
