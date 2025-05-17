import { PanelLeft, PanelRight } from "lucide-react";
import { Button } from "../ui";

const ToggleMenuBar = ({
  toggleSidebar,
  openSidebar,
}: {
  toggleSidebar: () => void;
  openSidebar: boolean;
}) => {
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
