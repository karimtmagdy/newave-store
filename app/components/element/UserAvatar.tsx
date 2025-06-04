import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/helper";

const UserAvatar = ({ className }: { className?: string }) => {
  const { user } = useAuth();

  return (
    <div
      className={cn("flex h-full w-full shrink-0 overflow-hidden", className)}
    >
      <img
        loading="lazy"
        src={user?.photo?.url}
        alt={`user-avatar-${user?.slug}-${user?._id}`}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default UserAvatar;

/* src="https://4kwallpapers.com/images/walls/thumbs_3t/12360.png" */
