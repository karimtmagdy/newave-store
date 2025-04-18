import { API_SIGNIN, API_SIGNUP } from "@/services/api/api";
import { Link } from "react-router";

const menu = [
  { to: API_SIGNIN, label: "login" },
  { to: API_SIGNUP, label: "register" },
];

const ListUnauthorized = () => {
  return (
    <li>
      {menu.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 flex h-8 w-full items-center justify-center gap-x-2 rounded-lg px-2 capitalize shadow-xs [&_svg]:size-4"
        >
          {item.label}
        </Link>
      ))}
    </li>
  );
};

export default ListUnauthorized;
