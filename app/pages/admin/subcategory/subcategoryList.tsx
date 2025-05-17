import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin subcategory Page - Newave Store" },
    { name: "description", content: "Admin subcategory page for Newave Store" },
  ];
};
const subcategoryList = () => {
  return <div>subcategoryList</div>;
};

export default subcategoryList;
