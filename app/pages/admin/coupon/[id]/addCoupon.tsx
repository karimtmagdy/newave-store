import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin add coupon - Newave Store" },
    { name: "description", content: "Admin add coupon for Newave Store" },
  ];
};
const addCoupon = () => {
  return <div>addCoupon</div>;
};

export default addCoupon;
