import AdminHeader from "@/components/common/header/admin-header";
import { SideBarProvider, useSideBar } from "@/context/SideBarContext";
import { cn } from "@/lib/helper";
import ChatBotAI from "@/modules/ai/chat-bot-ai";
import SidebarDesktop from "@/modules/sidebar/SidebarDesktop";
import { Outlet } from "react-router";
const AdminLayout = () => {
  return (
    <SideBarProvider>
      <AdminContent />
    </SideBarProvider>
  );
};

export default AdminLayout;

const AdminContent = () => {
  const { isOpenSidebar } = useSideBar();
  return (
    <div
      className={cn(
        "admin-layout bg-background relative flex min-h-dvh p-1",
        isOpenSidebar ? "md:gap-1" : "gap-0",
      )}
    >
      <SidebarDesktop />
      <div className="children bg-background text-foreground grow overflow-hidden rounded-xl border">
        <AdminHeader />
        <div className="p-7">
          <Outlet />
          <ChatBotAI />
        </div>
      </div>
    </div>
  );
};
