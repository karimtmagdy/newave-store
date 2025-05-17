import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin overview page - Newave Store" },
    { name: "description", content: "Admin overview for Newave Store" },
  ];
};
const overview = () => {
  return <div>overview</div>;
};

export default overview;
