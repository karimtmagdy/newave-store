import { createBrowserRouter, RouterProvider } from "react-router";
// import { Suspense, lazy } from "react";

import ErrorBoundary from "@/pages/private/ErrorBoundary";
import RootLayout from "@/layouts/RootLayout";
import AdminLayout from "@/layouts/AdminLayout";
import AuthLayout from "@/layouts/AuthLayout";
import NotFound from "@/pages/private/NotFound";
import UserLayout from "@/layouts/UserLayout";
import SignUpPage from "@/pages/auth/SignUpPage";
import SignInPage from "@/pages/auth/SignInPage";
import HomePage from "@/pages/user/home/HomePage";
import AccountLayout from "@/layouts/AccountLayout";
import CategoriesPage from "./pages/admin/category/CategoriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary error={new Error("Page not found")} />,
    children: [
      { path: "*", element: <NotFound /> },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          { path: "sign-up", element: <SignUpPage /> },
          { path: "sign-in", element: <SignInPage /> },
        ],
      },
      {
        path: "",
        element: <UserLayout />,
        children: [{ index: true, element: <HomePage /> }],
      },
      { path: "account", element: <AccountLayout /> },
      // {path:'',element:},
      {
        path: "admin",
        element: <AdminLayout />,
        children: [{ index: true, element: <CategoriesPage /> }],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
//     {
//       index: true,
//       element: (
//         <Suspense
//           fallback={
//             <div className="flex !h-full w-full items-center justify-center bg-blue-600">
//               <div>Loading...</div>
//             </div>
//           }
//         >
//           <AdminDashboard />
//         </Suspense>
//       ),
//     },
