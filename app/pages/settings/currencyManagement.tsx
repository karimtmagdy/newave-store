import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin currency management - Newave Store" },
    { name: "description", content: "Admin currency management for Newave Store" },
  ];
};
const currencyManagement = () => {
  return <div>currencyManagement</div>;
};

export default currencyManagement;
