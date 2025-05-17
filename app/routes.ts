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
      route("overview", "./pages/admin/dashboard/overview.tsx"),
      // route("dashboard", "./pages/admin/dashboard/dashboard.tsx"),

      route("categories", "./pages/admin/category/categoryList.tsx", [
        route( "update-category/:id", "./pages/admin/category/[id]/updateCategory.tsx"),
      ]),
      route("add-category", "./pages/admin/category/[id]/addCategory.tsx"),
      
      route("products", "./pages/admin/product/productList.tsx",[]),
      route("add-product", "./pages/admin/product/[id]/addProduct.tsx"),

      route("users", "./pages/admin/member/memberList.tsx",[]),
      route("add-user", "./pages/admin/member/[id]/addMember.tsx"),

      route("brands", "./pages/admin/brand/brandList.tsx",[]),
      route("add-brand", "./pages/admin/brand/[id]/addBrand.tsx"),

      route("subcategories", "./pages/admin/subcategory/subcategoryList.tsx",[]),
      route("add-subcategory", "./pages/admin/subcategory/[id]/addSubCategory.tsx"),


      route("coupons", "./pages/admin/coupon/couponList.tsx",[]),
      route("add-coupon", "./pages/admin/coupon/[id]/addCoupon.tsx"),
 
      route("orders", "./pages/admin/orders/orderList.tsx",[]),
      // route("add-order", "./pages/admin/orders/[id]/addProduct.tsx"),
 
      // route("products", "./pages/admin/product/productList.tsx",[]),
      // route("add-product", "./pages/admin/product/[id]/addProduct.tsx"),
 
    ]),
 
 
    route("", "layout/UserLayout.tsx", [
      index("routes/home.tsx"),
      route("user", "routes/user.tsx"),
        route("user/profile","pages/users/profile/profilePage.tsx"),
    ]),
  ]),
  // route("user", "./layout/UserLayout.tsx"),
  // route('user',{file:"./layout/AdminLayout.tsx",[
  //   route("dashboard","./routes/dashboard.tsx"),
  //   route("post","./routes/post.tsx"),
  //   route("post/:id","./routes/post.tsx"),
  // ]}),
  // layout('admin',{ id: "admin",   }),
] satisfies RouteConfigEntry[];
