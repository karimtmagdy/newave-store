import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin member Page - Newave Store" },
    { name: "description", content: "Admin member page for Newave Store" },
  ];
};

const memberList = () => {
  return <div>MemberList</div>;
};

export default memberList;
