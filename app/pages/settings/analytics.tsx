import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin analytics - Newave Store" },
    { name: "description", content: "Admin analytics for Newave Store" },
  ];
};
const analytics = () => {
  return <div>analytics</div>;
};

export default analytics;
