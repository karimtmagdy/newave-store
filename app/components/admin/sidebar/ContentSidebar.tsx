import { NavLink } from "react-router";
import { cn } from "~/lib/utils";
import { menuSide } from "~/services/constants/menus";

const ContentSidebar = () => {
  return (
    <ul className="admin-side-list">
      {menuSide.map(({ name, href, icon: Icon }) => (
        <li key={href}>
          <NavLink to={href} className={"group"}>
            {({ isActive }: { isActive: boolean }) => (
              <div
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
