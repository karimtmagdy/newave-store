import { createBrowserRouter as create } from "react-router";
import App from "@/app/App";
import RootLayout from "@/layout/root-layout";
import AuthenticationLayout from "@/layout/auth-layout";
import PageSignIn from "@/pages/auth/page-sign-in";
import PageSignUp from "@/pages/auth/page-sign-up";
import UserLayout from "@/layout/user-layout";
import HomePage from "@/pages/user/home/HomePage";
import AdminLayout from "@/layout/admin-layout";
import ProfilePage from "@/pages/profile/ProfilePage";
import ProtectedRoute from "@/pages/private/protected-route";
import ForbiddenPage from "@/pages/errors/ForbiddenPage";
import UnauthorizedPage from "@/pages/errors/UnauthorizedPage";
import NotFoundPage from "@/pages/errors/NotFoundPage";
import PrivateRoute from "@/pages/private/private-route";
import AdminRoute from "@/pages/private/admin-route";
import Privacy from "@/pages/settings/Privacy";
import CurrencyManagement from "@/pages/settings/CurrencyManagement";
import Analytics from "@/pages/settings/Analytics";
import PageForgotPassword from "@/pages/auth/page-forgot-password";

export const router = create([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <RootLayout />,
        children: [
          { path: "*", element: <NotFoundPage /> },
          { path: "/unauthorized", element: <UnauthorizedPage /> },
          { path: "/forbidden", element: <ForbiddenPage /> },
          {
            path: "/auth",
            element: (
              <PrivateRoute>
                <AuthenticationLayout />
              </PrivateRoute>
            ),
            children: [
              { path: "sign-up", element: <PageSignUp /> },
              { path: "sign-in", element: <PageSignIn /> },
              { path: "forgot-password", element: <PageForgotPassword /> },
            ],
          },
          {
            path: "/",
            element: <UserLayout />,
            children: [
              { index: true, element: <HomePage /> },
              // { path: "cart", element: <GetCartPage /> },
              {
                path: "profile/:id",
                element: (
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                ),
              },
            ],
          },
          {
            path: "/admin",
            element: (
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            ),
            children: [
              { path: "analytics", element: <Analytics /> },
              { path: "currency-management", element: <CurrencyManagement /> },
              { path: "privacy", element: <Privacy /> },
            ],
          },
        ],
      },
    ],
  },
]);
// { path: "/auth-status", element: <div>AuthStatusPage</div> },

// {
//     path: "dashboard",
//     element: () => import("@/pages/admin/content/dashboard/DashboardPage"),
//     return: { Component: DashboardPage },
//   },
// { path:  "forgot-password", element: <ForgotPasswordPage /> },
// { path: "reset-password" , element: <ResetPasswordPage /> },
// { path: "change-password" , element: <ChangePasswordPage /> },
// { path:  "otp-verification", element: <OtpVerificationPage /> },
// { index: true, element: <HomePage /> },
// { path: "cart", element: <GetCartPage /> },
// { path: "/server-error", element: <div>ServerErrorPage</div> },
