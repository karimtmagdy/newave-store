import { cn } from "@/utils/helpers";
import { PanelRightClose, PanelRightOpen } from "lucide-react";

const AdminHeader = ({ isOpen, handleToggle }: any) => {
  return (
    <nav
      className={cn(
        isOpen ? "fixed left-0" : "relative",
        "flex h-14 w-full border-b md:hidden",
      )}
    >
      <ul className="flex w-full items-center gap-2 px-4">
        <li>admin</li>
        <li>admin</li>
      </ul>

      <div className="flex items-center gap-2 px-4">
        <button onClick={handleToggle}>
          {isOpen ? <PanelRightOpen /> : <PanelRightClose />}
        </button>
      </div>
    </nav>
  );
};

export default AdminHeader;
