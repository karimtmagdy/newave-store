import { Button } from "@/components/ui";
import { useAuth } from "@/hooks/use-auth";
import { UserCircle } from "lucide-react";

const ToggleAuthentication = ({ toggle }: { toggle: () => void }) => {
  const { user, isAuthenticated } = useAuth();
  return (
    <Button onClick={toggle} icon={2} variant={"outline"} shape={"curved"}>
      {user && isAuthenticated ? (
        <img src={user.photo.url} alt={user.slug} />
      ) : (
        <UserCircle />
      )}
    </Button>
  );
};

export default ToggleAuthentication;
