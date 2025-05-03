import { useAuth } from "@/hooks/useAuth";
import Logo from "../common/Logo";
import { Button, Container } from "../ui";
import Image from "../ui/Image";
import { UserCircle } from "lucide-react";
import { cn } from "@/utils/helpers";
import { useState } from "react";
import { Link } from "react-router-dom";
import { API_SIGNIN, API_SIGNUP } from "@/services/api/api-url";

const Header = () => {
  return (
    <header className="border-b">
      <Container className="flex h-14 items-center justify-between px-2">
        <Logo />
        <div className="flex items-center gap-2">
          <DropMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;

const DropMenu = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <Button color="ghost" icon={3} shape="default" onClick={handleToggle}>
        {user ? (
          <Image src={user?.photo?.url} alt={user?.slug} className="h-8 w-8" />
        ) : (
          <UserCircle />
        )}
      </Button>
      {isOpen && (
        <div
          className={cn(
            `absolute top-14 right-0 rounded-lg border p-1 ${user ? "w-52" : "w-32"} bg-white dark:bg-black`,
          )}
        >
          {user ? (
            <></>
          ) : (
            <div className="flex flex-col">
              <Link to={API_SIGNIN}>login</Link>
              <Link to={API_SIGNUP}>register</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
