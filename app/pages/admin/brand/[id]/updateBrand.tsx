import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin update brand - Newave Store" },
    { name: "description", content: "Admin update brand for Newave Store" },
  ];
};

const updateBrand = () => {
  return <div>updateBrand</div>;
};

export default updateBrand;
