import {
  Badge,
  BadgePlus,
  ChartPie,
  CircleDot,
  CirclePlus,
  Grid2x2,
  Grid2x2Plus,
  Home,
  Package,
  PackagePlus,
  TicketPlus,
  Tickets,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";

export const menuSide = [
  { name: "overview", href: "", icon: ChartPie },
  { name: "dashboard", href: "dashboard", icon: Home },
  { name: "categories", href: "categories", icon: Grid2x2 },
  { name: "add category", href: "add-category", icon: Grid2x2Plus },
  { name: "products", href: "products", icon: Package },
  { name: "add product", href: "add-product", icon: PackagePlus },
  { name: "users", href: "users", icon: Users },
  { name: "add user", href: "add-user", icon: UserPlus },
  { name: "brands", href: "brands", icon: Badge },
  { name: "add brand", href: "add-brand", icon: BadgePlus },
  { name: "subcategories", href: "subcategories", icon: CircleDot },
  { name: "add subcategory", href: "add-subcategory", icon: CirclePlus },
  { name: "coupons", href: "coupons", icon: Tickets },
  { name: "add coupon", href: "add-coupon", icon: TicketPlus },
  
//   { name: "add coupon", href: "add-coupon", icon: TicketPlus },
//   { name: "add coupon", href: "add-coupon", icon: TicketPlus },
//   { name: "add coupon", href: "add-coupon", icon: TicketPlus },
//   { name: "add coupon", href: "add-coupon", icon: TicketPlus },
  //   {name:'',href:'',icon:},
  //   {name:'',href:'',icon:},
] as const satisfies readonly {
  name: string;
  href: string;
  icon?: LucideIcon;
}[];
