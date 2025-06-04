import { useState } from "react";
import { NavLink } from "react-router";
import { cn } from "@/lib/helper";

interface MenuItem {
  title: string;
  path?: string;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  path: string;
}

export function Menu() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { title: "Home", path: "/" },
    {
      title: "Products",
      submenu: [
        { title: "Electronics", path: "/electronics" },
        { title: "Clothing", path: "/clothing" },
        { title: "Books", path: "/books" },
      ],
    },
    {
      title: "Services",
      submenu: [
        { title: "Consulting", path: "/consulting" },
        { title: "Training", path: "/training" },
        { title: "Support", path: "/support" },
      ],
    },
    { title: "Contact", path: "/contact" },
  ];

  // Custom NavLink styling function
  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    cn("flex items-center px-4 h-8 rounded-md transition-colors", {
      "bg-blue-700 text-white font-medium": isActive,
      "hover:bg-blue-700 hover:text-white text-blue-100": !isActive,
    });
  // `... ${isActive ? 'active-classes' : 'inactive-classes'}`
  return (
    <nav className="text-foreground flex h-12 items-center border-b bg-blue-600">
      <ul className="bg-background flex items-center space-x-4 py-1">
        {menuItems.map((item) => (
          <li
            className="group relative"
            key={item.title}
            onMouseLeave={() => item.submenu && setOpenSubmenu(null)}
            onMouseEnter={() => item.submenu && setOpenSubmenu(item.title)}
          >
            {item.path ? (
              <NavLink to={item.path} className={navLinkStyle} end>
                {item.title}
              </NavLink>
            ) : (
              <>
                <button
                  className="h-8 rounded-md px-4 transition-colors hover:bg-blue-700"
                  onClick={() =>
                    item.submenu &&
                    setOpenSubmenu(
                      openSubmenu === item.title ? null : item.title,
                    )
                  }
                >
                  {item.title}
                </button>
                {item.submenu && (
                  <ol
                    className={cn(
                      "absolute top-full left-0 rounded-md bg-blue-600 shadow-lg group-hover:block",
                      openSubmenu === item.title ? "block" : "hidden",
                    )}
                  >
                    {item.submenu.map((subItem) => (
                      <li key={subItem.title}>
                        <NavLink
                          end
                          to={subItem.path}
                          className={({ isActive }) =>
                            cn(
                              "block rounded-md px-6 py-2 hover:bg-violet-800",
                              {
                                "bg-blue-700 font-medium": isActive,
                              },
                            )
                          }
                        >
                          {subItem.title}
                        </NavLink>
                      </li>
                    ))}
                  </ol>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
