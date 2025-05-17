import { Outlet } from "react-router";
import type { MetaFunction } from "react-router";

import { useState } from "react";
import { cn } from "~/lib/utils";
import SidebarMobile from "~/components/admin/sidebar/SidebarMobile";
import SidebarDesktop from "~/components/admin/sidebar/SidebarDesktop";
import AdminHeader from "~/components/header/AdminHeader";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin Page - Newave Store" },
    { name: "description", content: "Admin page for Newave Store" },
  ];
};

export interface ToggleSidebarProps {
  openSidebar?: boolean;
  toggleSidebar?: () => void;
  // setOpenSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
}
// } & React.HTMLAttributes<HTMLDivElement>;


export default function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const toggleSidebar = () => setOpenSidebar(!openSidebar);
  return (
    <div
      className={cn(
        "admin-layout",
        openSidebar ? "open-sidebar md:gap-1" : "closed-sidebar gap-0",
      )}
    >
      <SidebarMobile {...{ openSidebar, toggleSidebar, setOpenSidebar }} />
      <SidebarDesktop openSidebar={openSidebar} />
      <div className={cn("children")}>
        <AdminHeader {...{ toggleSidebar, openSidebar }} />
        <div className="p-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
