import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin privacy - Newave Store" },
    { name: "description", content: "Admin privacy for Newave Store" },
  ];
};
const privacy = () => {
  return <div>privacy</div>;
};

export default privacy;
