import {
  type RouteConfig,
  index,
  route,
  layout,
  type RouteConfigEntry,
  getAppDirectory,
  prefix,
  relative,
} from "@react-router/dev/routes";

export default [
  layout("./layout/RootLayout.tsx", [
    route("admin", "./layout/AdminLayout.tsx", [
      route("dashboard", "./routes/admin.tsx"),
      // route("dashboard", "./pages/admin/dashboard.tsx"),
      route("categories", "./pages/admin/category/categoryList.tsx", [
        route(
          "update-category/:id",
          "./pages/admin/category/[id]/updateCategory.tsx",
        ),
      ]),
      route("add-category", "./pages/admin/category/[id]/addCategory.tsx"),
    ]),
    route("", "layout/UserLayout.tsx", [
      index("routes/home.tsx"),
      route("user", "routes/user.tsx"),
    ]),
  ]),
  // route("user", "./layout/UserLayout.tsx"),
  // route('user',{file:"./layout/AdminLayout.tsx",[
  //   route("profile","./routes/profile.tsx"),
  //   route("dashboard","./routes/dashboard.tsx"),
  //   route("post","./routes/post.tsx"),
  //   route("post/:id","./routes/post.tsx"),
  // ]}),
  // layout('admin',{ id: "admin",   }),
] satisfies RouteConfigEntry[];
