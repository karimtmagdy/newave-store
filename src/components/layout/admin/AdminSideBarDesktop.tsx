import LinkPro from "@/components/ui/link-pro";
import { menu, settings } from "@/services/constants/menus";
import logo from "@/assets/svg/newave-store.svg";
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/utils/helpers";
const AdminSideBarDesktop = () => {
  const { user } = useAuth();
  const { isDarkMode, setTheme, theme } = useTheme();
  return (
    <aside className="inset-y-0 hidden w-60 overflow-hidden border bg-white md:fixed md:top-0 md:left-0 md:flex md:flex-col dark:bg-black">
      <Link
        to="/"
        className="flex h-14 items-center justify-start gap-2 border-b text-xl"
      >
        <div className="h-8">
          <img
            src={logo}
            alt="website logo"
            className="h-full w-full object-center"
          />
        </div>
        <span className="font-bold uppercase">admin panel</span>
      </Link>
      <ul className="ml-1 flex h-full flex-col gap-2 overflow-y-scroll p-1 [&::-webkit-scrollbar]:w-0">
        {menu.map((item) => (
          <li key={item.to}>
            <LinkPro
              to={item.to}
              className={({ isActive, isPending, isTransitioning }) =>
                cn(
                  "h-8 rounded-lg border border-transparent bg-white px-2 text-base capitalize hover:border-zinc-300 hover:text-zinc-600 dark:bg-black dark:hover:border-zinc-600 dark:hover:text-zinc-600",
                  isTransitioning ? "!border-green-500 text-green-500" : "",
                  isActive &&
                    "border-violet-700 font-semibold text-violet-700 hover:border-violet-700 hover:text-violet-700 dark:border-violet-700 dark:text-violet-700 dark:hover:border-violet-700 dark:hover:text-violet-700",
                  isPending && "opacity-50",
                )
              }
              title={item.name}
              aria-label={item.name}
            >
              <span>{<item.icon />}</span>
              <h6>{item.name}</h6>
            </LinkPro>
          </li>
        ))}

        {/* "h-9  dark:text-white " */}
        <div className="space-y-2">
          <li>
            <button
              onClick={() => {
                setTheme(isDarkMode ? "light" : "dark");
              }}
              aria-label="theme"
              aria-checked={theme === "light" ? false : true}
              title="theme"
              className="flex h-9 w-full items-center justify-start gap-2 rounded-lg border border-transparent bg-white p-2 dark:bg-black dark:text-white dark:hover:text-zinc-600"
            >
              <span>{isDarkMode ? "🌞" : "🌜"}</span>
              <h6>Theme</h6>
            </button>
          </li>
          {settings.map((item) => (
            <li key={item.name}>
              <LinkPro
                to={item.to}
                className={
                  "h-9 rounded-lg border border-transparent bg-white p-2 capitalize transition-colors duration-300 ease-in-out hover:border-zinc-300 hover:text-zinc-600 dark:bg-black dark:text-white dark:hover:border-zinc-600 dark:hover:text-white"
                }
              >
                <span>{<item.icon />}</span>
                <h6>{item.name}</h6>
              </LinkPro>
            </li>
          ))}
        </div>
      </ul>
      <div className="mt-auto flex h-14 items-center gap-2 border-t p-2 select-none">
        <div className="h-9 w-9 overflow-hidden rounded-lg">
          <img src={user?.photo.url} alt="" />
        </div>
        <div className="leading-snug">
          <strong className="text-sm text-zinc-800 dark:text-zinc-200">
            {user?.username}
          </strong>
          <p className="text-xs text-zinc-600 dark:text-zinc-300">
            {user?.email}
          </p>
        </div>
      </div>
    </aside>
  );
};

export default AdminSideBarDesktop;
