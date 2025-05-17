import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin payment - Newave Store" },
    { name: "description", content: "Admin payment for Newave Store" },
  ];
};
const paymentAdmin = () => {
  return <div>paymentAdmin</div>;
};

export default paymentAdmin;
