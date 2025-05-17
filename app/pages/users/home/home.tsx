import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "home page - Newave Store" },
    { name: "description", content: "home for Newave Store" },
  ];
};
const home = () => {
  return <div>home</div>;
};

export default home;
