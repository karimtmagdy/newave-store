import { type TLogin, type TRegister } from "./../services/validation/authValidate";
export type Role = "user" | "admin" | "moderator" | "manager";
export const allowedRoles = ["admin", "manager", "moderator"] as const;
export type AccessRole = (typeof allowedRoles)[number];
export type Status = "active" | "inactive" | "banned" | "suspended";
export type Online = "online" | "offline";
export type Gender = "male" | "female";
export type TUserType = {
  _id: string;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  role: Role;
  status: Status;
  gender: Gender;
  isOnline?: Online;
  photo: { url: string };
  slug: string;
  active?: boolean;
  joinedAt: string;
  last_login: string;
  updatedAt?: string;
} | null;

export type AuthContextType = {
  user: TUserType | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  token: string | null;
  signup: (
    username: string,
    email: string,
    password: string,
    confirm_password: string,
  ) => Promise<void | TRegister>;
  signin?: (email: string, password: string) => Promise<void | TLogin>;
  signout: () => Promise<void>;
};

export type TAuth = Pick<
  "username" | "email" | "password" | "confirm_password",
  keyof TUserType
>;
// export type TAuth = TAuths & { token: string; role: Role; _id: string };
// refresh: () => Promise<void>;
export type DecodedToken = {
  exp?: number;
  iat?: number;
  sub?: string;
  _id?: string;
  email?: string;
  role?: string;
};
