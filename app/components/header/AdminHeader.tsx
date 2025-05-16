import { PanelRight } from "lucide-react";
import BaseHeader from "./BaseHeader";
import { Link } from "react-router";

const AdminHeader = ({
  toggleSidebar,
  openSidebar,
}: {
  toggleSidebar: () => void;
  openSidebar: boolean;
}) => {
  // Create the admin-specific content for the left side
  const adminLeftContent = (
    <div className="toggle-admin">
      <button
        className="cursor-pointer"
        onClick={toggleSidebar}
        aria-label={openSidebar ? "Close sidebar" : "Open sidebar"}
      >
        <PanelRight className={openSidebar ? "" : "rotate-180"} />
      </button>
      |<Link to="/admin">Admin</Link>
    </div>
  );

  // Pass the admin content to the BaseHeader
  return <BaseHeader leftContent={adminLeftContent} />;
};

export default AdminHeader;
