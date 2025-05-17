import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin product Page - Newave Store" },
    { name: "description", content: "Admin product page for Newave Store" },
  ];
};
const productList = () => {
  return <div>productList</div>;
};

export default productList;
