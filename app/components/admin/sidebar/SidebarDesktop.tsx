import { cn } from "~/lib/utils";
import FooterSidebar from "./FooterSidebar";
import ContentSidebar from "./ContentSidebar";

const SidebarDesktop = ({ openSidebar }: { openSidebar: boolean }) => {
  return (
    <aside
      className={cn(
        "sidebar-desktop",
        openSidebar
          ? "w-64 translate-x-0"
          : "w-0 -translate-x-10 overflow-hidden opacity-0",
      )}
    >
      <article className="flex h-12 items-center border-b p-4 whitespace-nowrap">
        desktop sidebar
      </article>
      <ContentSidebar />
      <FooterSidebar />
    </aside>
  );
};

export default SidebarDesktop;
