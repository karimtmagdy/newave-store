import { NavLink } from "react-router";
import useClickOutSide from "~/hooks/useClickOutSide";

import { cn } from "~/lib/utils";
import { menuSide } from "~/services/constants/menus";

const ContentSidebar = ({ setOpenSidebar }: { setOpenSidebar: any }) => {
  const ref = useClickOutSide(() => setOpenSidebar(false));
  return (
    <ul className="admin-side-list">
      {menuSide.map(({ name, href, icon: Icon }) => (
        <li key={href}>
          <NavLink to={href} onClick={() => setOpenSidebar(false)}>
            {({ isActive }: { isActive: boolean }) => (
              <div
                ref={ref}
                className={cn("nav-item", {
                  "active-link": isActive,
                })}
              >
                {Icon && <Icon className="side-icon" />}
                <span>{name}</span>
              </div>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ContentSidebar;
