import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin coupon Page - Newave Store" },
    { name: "description", content: "Admin coupon page for Newave Store" },
  ];
};
const couponList = () => {
  return <div>couponList</div>;
};

export default couponList;
