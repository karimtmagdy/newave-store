import AdminHeader from "@/components/layout/admin/AdminHeader";
import AdminSideBarDesktop from "@/components/layout/admin/AdminSideBarDesktop";
import AdminSideBarMobile from "@/components/layout/admin/AdminSideBarMobile";
import { cn } from "@/utils/helpers";
import { useState } from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    console.log("isOpen", isOpen);
  };
  return (
    <section className="flex min-h-dvh w-full">
      <AdminSideBarDesktop />
      <AdminSideBarMobile isOpen={isOpen} />
      <div className="grow">
        <AdminHeader isOpen={isOpen} handleToggle={handleToggle} />
        <div
          className={cn("h-full md:ml-60 bg-gray-100 pl-2", isOpen ? "pt-14" : "pt-2")}
        >
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AdminLayout;
