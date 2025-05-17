import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin reports - Newave Store" },
    { name: "description", content: "Admin reports for Newave Store" },
  ];
};
const reports = () => {
  return <div>reports</div>;
};

export default reports;
