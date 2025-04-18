import { Button } from "@/components/ui";
import { UserCircle } from "lucide-react";
import ToggleAuthentication from "../toggle/toggle-authentication";
import AuthenticationMenu from "./authentication-menu";
import { useState } from "react";
import ToggleTheme from "../toggle/toggle-theme";
import useClickOutSide from "@/hooks/use-click-outside";
import ToggleAdmin from "../toggle/toggle-admin";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const ref = useClickOutSide<HTMLDivElement>(() => setIsOpen(false));
  return (
    <header className="flex h-14 items-center justify-center border-b px-4">
      <div className="container flex items-center justify-between">
        <span>logo</span>

        <article className="flex items-center gap-x-2" ref={ref}>
          <Button icon={2} variant={"outline"}>
            <UserCircle />
          </Button>
          <Button icon={2} variant={"outline"}>
            <UserCircle />
          </Button>
          <ToggleAdmin />
          <template className="relative flex shrink-0">
            <ToggleAuthentication toggle={toggle} />
            <AuthenticationMenu isOpen={isOpen} />
          </template>
          <ToggleTheme />
        </article>
      </div>
    </header>
  );
};

export default Header;
