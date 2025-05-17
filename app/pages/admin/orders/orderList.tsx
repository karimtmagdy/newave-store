import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin orders Page - Newave Store" },
    { name: "description", content: "Admin orders page for Newave Store" },
  ];
};
const orderList = () => {
  return (
    <div>orderList</div>
  )
}

export default orderList