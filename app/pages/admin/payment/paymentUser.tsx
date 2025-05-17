import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin payment user page  - Newave Store" },
    { name: "description", content: "Admin payment user for Newave Store" },
  ];
};
const paymentUser = () => {
  return <div>paymentUser</div>;
};

export default paymentUser;
