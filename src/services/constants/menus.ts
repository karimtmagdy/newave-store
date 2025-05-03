import {
  Badge,
  ChartPie,
  Grid2x2XIcon as Grid2X,
  TicketIcon as Tickets,
  Home,
  Package,
  PackageOpen,
  Settings,
  Users,
  Grid2X2,
  ShieldCheck,
  Truck,
  CircleDot,
  Headset,
  BarChart,
  PackagePlus,
  UserPlus,
  BadgePlus,
  TicketPlus,
  CirclePlus,
  Wallet,
  CreditCard,
  ShoppingCart,
  Mail,
  CircleUser,
  UserCheck,
  LifeBuoy,
  LucideIcon,
} from "lucide-react";

export const menu = [
  { to: "", name: "overview", icon: ChartPie },
  { to: "dashboard", name: "Dashboard", icon: Home },
  { to: "categories", name: "categories", icon: Grid2X2 },
  { to: "add-brand", name: "add brand", icon: BadgePlus },
  { to: "add-subcategory", name: "add subcategory", icon: CirclePlus },
  // { to: "add-", name: "add ", icon: Users },
  { to: "add-coupon", name: "add coupon", icon: TicketPlus },
  // { to: "add-", name: "add ", icon: Users },
  { to: "add-user", name: "add user", icon: UserPlus },
  { to: "add-category", name: "add category", icon: Grid2X },
  { to: "add-product", name: "add product", icon: PackagePlus },
  { to: "brands", name: "brands", icon: Badge },
  { to: "users", name: "users", icon: Users },
  { to: "products", name: "products", icon: Package },
  { to: "coupons", name: "coupons", icon: Tickets },
  { to: "reports", name: "reports", icon: ShieldCheck },
  { to: "shipping", name: "shipping", icon: Truck },
  { to: "payment", name: "payment", icon: CreditCard },
  { to: "subcategories", name: "subcategories", icon: CircleDot },
  { to: "cart", name: "cart", icon: ShoppingCart },
  { name: "review", to: "review", icon: Mail },
  { to: "checkout", name: "checkout", icon: Wallet },
  { to: "analytics", name: "analytics", icon: BarChart },
  { to: "customer", name: "customer", icon: Headset },
  { to: "packages", name: "orders", icon: PackageOpen },
] as Array<{ name: string; to: string; icon: LucideIcon }>;
// menu?: Array<{ name: string; to: string; icon: any }>;
export const settings = [
  { to: "settings", name: "settings", icon: Settings },
] as Array<{ name: string; to: string; icon: any }>;

export const sidebarAdmins = [...menu, ...settings];

export const sidebarUsers = [...menu];
export const DropMenuAdmin = [
  { name: "admin profile", to: "account/profile", icon: CircleUser },
  { name: "user management", to: "", icon: UserCheck },
  { name: "system settings", to: "", icon: Settings },
] as Array<{ name: string; to: string; icon: LucideIcon }>;
export const DropMenuUser = [
  { name: "profile", to: "account/profile", icon: CircleUser },
  { name: "settings", to: "settings", icon: Settings },
  { name: "support", to: "support", icon: LifeBuoy },
] as Array<{ name: string; to: string; icon: LucideIcon }>;
