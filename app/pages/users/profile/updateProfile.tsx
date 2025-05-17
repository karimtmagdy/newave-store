import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "update profile - Newave Store" },
    { name: "description", content: "update profile for user" },
  ];
};
const updateProfile = () => {
  return <div>updateProfile</div>;
};

export default updateProfile;
// <div className="container py-8">
// <h1 className="mb-6 text-3xl font-bold">Your Profile</h1>
// <p>This is a protected page that only authenticated users can access.</p>
// {/* <span>Session: {JSON.stringify(session, null, 2)}</span> */}
// </div>
// This will throw an unauthorized() error if the user is not logged in
//   const session = await requireAuth();
//   console.log(session);
