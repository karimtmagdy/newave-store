import { PanelLeft, PanelRight } from "lucide-react";
import { Button } from "../ui";
import type { ToggleSidebarProps } from "~/layout/AdminLayout";

const ToggleMenuBar = ({ toggleSidebar, openSidebar }: ToggleSidebarProps) => {
  return (
    <Button
      icon={3}
      variant="ghost"
      shape="square"
      onClick={toggleSidebar}
      aria-label={openSidebar ? "Close sidebar" : "Open sidebar"}
    >
      {openSidebar ? <PanelLeft /> : <PanelRight />}
    </Button>
  );
};
export default ToggleMenuBar;
