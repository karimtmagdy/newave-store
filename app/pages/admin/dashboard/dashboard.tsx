import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin Dashboard - Newave Store" },
    { name: "description", content: "Admin dashboard for Newave Store" },
  ];
};
const dashboard = () => {
  return <div>dashboard</div>;
};

export default dashboard;
