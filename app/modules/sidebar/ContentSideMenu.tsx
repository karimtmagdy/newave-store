// import { useSideBar } from "@/context/SideBarContext";
import { cn } from "@/lib/helper";
import { menuSideAdmin } from "@/services/constants/menus";
import { NavLink } from "react-router";

const ContentSideMenu = () => {
  // const { setIsOpenSidebar } = useSideBar();
  // onClick={() => setIsOpenSidebar(false)}
  return (
    <ul className="admin-list-menu h-full w-full space-y-1 overflow-y-scroll p-2 [&::-webkit-scrollbar]:w-0">
      {menuSideAdmin.map(({ name, href, icon: Icon }) => (
        <li key={name}>
          <NavLink to={href}>
            {({ isActive }: { isActive: boolean }) => (
              <div
                className={cn(
                  "nav-item flex h-8 w-full items-center gap-2 rounded-lg bg-red-500 px-2 whitespace-nowrap capitalize",
                  {
                    "active-link bg-green-500 font-semibold active:bg-green-500":
                      isActive,
                  },
                )}
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

export default ContentSideMenu;
