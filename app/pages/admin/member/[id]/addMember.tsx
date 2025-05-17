import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin add member page - Newave Store" },
    { name: "description", content: "Admin add member for Newave Store" },
  ];
};
const addMember = () => {
  return (
    <div>addMember</div>
  )
}

export default addMember