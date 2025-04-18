import { Button } from "@/components/ui";
import { useAuth } from "@/hooks/use-auth";
import { LogOut, Settings, UserCircle } from "lucide-react";
import { Form, Link } from "react-router";

const ListAuthorized = () => {
  const { user, logout } = useAuth();
  const menu = [
    { to: `profile/${user?._id}`, label: "profile", icon: UserCircle },
    { to: "settings", label: "settings", icon: Settings },
    // { to: "settings", label: "settings", icon: Settings },
  ];
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logout!();
  };
  return (
    <>
      <li>
        {menu.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 flex h-8 w-full items-center justify-start gap-x-2 rounded-lg px-2 capitalize shadow-xs [&_svg]:size-4"
          >
            <item.icon />
            {item.label}
          </Link>
        ))}
      </li>
      <li>
        <Form method="post" onSubmit={onSubmit}>
          <Button
            variant={"ghost"}
            size={"sm"}
            fullWidth
            className="justify-start"
          >
            <LogOut />
            logout
          </Button>
        </Form>
      </li>
    </>
  );
};

export default ListAuthorized;
