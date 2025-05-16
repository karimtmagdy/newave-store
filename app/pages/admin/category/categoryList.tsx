import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin Category Page - Newave Store" },
    { name: "description", content: "Admin category page for Newave Store" },
  ];
};
const categoryList = () => {
  return <div>categoryList</div>;
};

export default categoryList;
