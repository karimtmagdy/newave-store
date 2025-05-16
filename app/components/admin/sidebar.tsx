import { NavLink } from "react-router";

const menuSide = [
  { name: "overview", href: "" },
  { name: "dashboard", href: "dashboard" },
  { name: "categories", href: "categories" },
  { name: "add category", href: "add-category" },
] as const satisfies readonly { name: string; href: string }[];

export const Sidebar = () => {
  return (
    <aside className="min-h-[calc(100dvh-56px)] w-64 border-r">
      <p className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
        Admin control panel
      </p>
      <ul className="flex w-full flex-col gap-2">
        {menuSide.map(({ name, href }) => (
          <li key={href} className="block bg-red-900">
            <NavLink
              to={href}
              className="h-10 w-full items-center bg-amber-400 px-4"
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};