import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin Add Category - Newave Store" },
    { name: "description", content: "Admin add category for Newave Store" },
  ];
};
const addCategory = () => {
  return <div>addCategory</div>;
};

export default addCategory;
