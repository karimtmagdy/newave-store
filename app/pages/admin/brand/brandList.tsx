import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin brand Page - Newave Store" },
    { name: "description", content: "Admin brand page for Newave Store" },
  ];
};
const brandList = () => {
  return <div>brandList</div>;
};

export default brandList;
