import { Button } from "@/components/ui";
import BaseHeader from "./base-header";
import { PanelLeft, PanelRight } from "lucide-react";
import { useSideBar } from "@/context/SideBarContext";
// import ToggleMenuBar from "../toggle/ToggleMenuBar";
const AdminHeader = () => {
  const { isOpenSidebar, toggleSidebar } = useSideBar();
  const adminLeftContent = (
    <div className="toggle-admin flex items-center gap-2">
      <Button
        icon={2}
        variant={"muted"}
        onClick={() => toggleSidebar()}
        aria-label={isOpenSidebar ? "Close sidebar" : "Open sidebar"}
      >
        {isOpenSidebar ? <PanelLeft /> : <PanelRight />}
      </Button>
    </div>
  );
  //   <ToggleMenuBar />|<Link to="/admin">Admin</Link>
  return <BaseHeader leftContent={adminLeftContent} />;
};
export default AdminHeader;
