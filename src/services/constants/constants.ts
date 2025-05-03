import {
  // LayoutGrid,
  // House,
  // Shapes,
  // CirclePlus,
  Users,
  // UserPlus,
  // PackageOpen,
  // Plus,
  // CircleDot,
  Bell,
  Activity,
  Settings,
  FileText,
  AlertTriangle,
  Mail,
  HelpCircle,
  TrendingUp,
  Headset,
  MessageSquare,
} from "lucide-react";
// import { IMenu } from "@/types/IMenuType";
// import { Apple, AtSign, Clock } from "@/assets/icon/icons";

export const ORDER_TABLE_HEADER = ["id", "user", "status", "actions"];
export const PAYMENT_TABLE_HEADER = ["id", "user", "status", "actions"];
export const teamItems = [
  //teamItems: IMenu[]
  { icon: Bell, name: "Team Notifications", to: "team-notifications" },
  { icon: Activity, name: "Team activity", to: "team-activity" },
  { icon: AlertTriangle, name: "Team Errors", to: "team-errors" },
  { icon: TrendingUp, name: "Team Growth", to: "team-growth" },
  { icon: Mail, name: "Team Messages", to: "team-messages" },
  { icon: Users, name: "Team Members", to: "team-members" },
  { icon: MessageSquare, name: "Team Chat", to: "team-chat" },
  { icon: HelpCircle, name: "Team Support", to: "team-support" },
  { icon: FileText, name: "Team Documents", to: "team-documents" },
  { icon: Headset, name: "customer service", to: "customer-service" },
  { icon: Settings, name: "Team Settings", to: "team-settings" },
];
