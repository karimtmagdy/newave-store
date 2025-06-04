import { createBrowserRouter as create, RouterProvider } from "react-router";
import RootLayout from "@/layout/RootLayout";
import AuthLayout from "@/layout/AuthLayout";
import SignInPage from "@/pages/auth/SignInPage";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";
import CategoriesList from "./pages/admin/category/CategoriesList";
import UpdateCategory from "./pages/admin/category/[id]/UpdateCategory";

const RoutesApplication = () => {
  const router = create([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "auth",
          element: <AuthLayout />,
          children: [{ path: "sign-in", element: <SignInPage /> }],
        },
        {
          path: "admin",
          element: <AdminLayout />,
          children: [
            {
              path: "categories",
              element: <CategoriesList />,
              children: [{ path: ":id", element: <UpdateCategory /> }],
            },
          ],
        },
        { path: "/", element: <UserLayout /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RoutesApplication;
