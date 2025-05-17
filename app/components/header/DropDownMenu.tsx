import { useState } from "react";
import { Link } from "react-router";
import useClickOutSide from "~/hooks/useClickOutSide";
import { cn } from "~/lib/utils";
import { Button } from "../ui";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutSide(() => setIsOpen(false));
  return (
    <div className="relative" ref={ref}>
      <Button
        icon={3}
        variant="ghost"
        shape="square"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="sr-only">Open user menu</span>
        <img
          src="https://4kwallpapers.com/images/walls/thumbs_3t/12360.png"
          alt="user image"
        />
      </Button>

      <menu
        className={cn(
          "toggle-dropdown",
          isOpen
            ? "animate-in fade-in zoom-in-95 slide-in-from-top-2 slide-in-from-top translate-y-0 scale-100 opacity-100"
            : "slide-in-from-bottom zoom-out-95 pointer-events-none -translate-y-2 scale-y-95 opacity-0",
        )}
      >
        <div className="text-sm font-medium">User information</div>
        <ul className="mt-2 text-xs text-gray-500">
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:bg-sidebar-accent flex h-7 items-center rounded-lg px-2 py-1"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <button className="hover:bg-sidebar-accent flex h-7 w-full cursor-pointer items-center rounded-lg px-2 py-1 text-red-500">
              Sign out
            </button>
          </li>
        </ul>
      </menu>
    </div>
  );
}

const menu = [
  { name: "profile settings", href: "/profile" },
  { name: "account", href: "/account" },
  { name: "admin panel", href: "/admin" },
  { name: "preferences", href: "/preferences" },
  { name: "help & support", href: "/help-and-support" },
];
