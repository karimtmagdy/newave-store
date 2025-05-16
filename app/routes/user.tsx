import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "User Dashboard - Newave Store" },
    { name: "description", content: "User dashboard for Newave Store" },
  ];
};

export default function User() {
  return (
    <div className="grid gap-6">
      <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold">
          Welcome to your dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Manage your account and view your orders.
        </p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold">Recent Orders</h2>
        <p className="text-gray-600 dark:text-gray-300">
          You have no recent orders.
        </p>
      </div>
    </div>
  );
}
