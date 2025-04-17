import { useAuth } from "@/hooks/use-auth";
import { useParams } from "react-router";

const ProfilePage = () => {
  const { user } = useAuth();
  const { id } = useParams();
  return (
    <div>
      <h1>Profile Page</h1>
      <h1>{user?._id}</h1>
      <h1>{user?.email}</h1>
      <h1>{user?.joinedAt}</h1>
      <h1>{user?.last_login}</h1>
      <h1>{user?.username}</h1>
      <h1>{user?.status}</h1>
      <h1>{user?.role}</h1>
      {/* <img src={user?.photo.url} alt="" /> */}
      <h1>{id}</h1>
    </div>
  );
};

export default ProfilePage;
