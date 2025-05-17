import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin add product - Newave Store" },
    { name: "description", content: "Admin add product for Newave Store" },
  ];
};
const addProduct = () => {
  return <div>addProduct</div>;
};

export default addProduct;
