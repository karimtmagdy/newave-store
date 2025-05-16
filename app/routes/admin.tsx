import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin Dashboard - Newave Store" },
    { name: "description", content: "Admin dashboard for Newave Store" },
  ];
};

export default function Admin() {
  return (
    <section className="flex min-h-[calc(100vh-64px)]">
      <div className="grow gap-6 space-y-6">
        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold">Admin Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your store, products, and users.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold">Store Statistics</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-md bg-blue-50 p-4 dark:bg-blue-900/30">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Products
              </p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/30">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Orders
              </p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="rounded-md bg-purple-50 p-4 dark:bg-purple-900/30">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Users
              </p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
