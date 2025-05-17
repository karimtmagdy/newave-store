import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "profile Page - Newave Store" },
    { name: "description", content: "profile page for user" },
  ];
};
// const { user } = useAuth();
// const { id } = useParams();
const profilePage = () => {
  return <div>profilePage</div>;
};

export default profilePage;
