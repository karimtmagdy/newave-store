import { ReactNode } from "react";
export type Role = "user" | "admin" | "manager" | "moderator";
type Gender = "male" | "female";
export type Status = "active" | "inactive" | "banned" | "suspended";

export interface DecodedToken {
  exp?: number;
  [key: string]: any;
}

export type TUserType = {
  _id: string;
  nickname: string;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  active?: boolean;
  slug: string;
  photo: { url: string };
  verified: boolean;
  phone?: number;
  remember_me?: boolean;
  joinedAt: string;
  updatedAt: string;
  last_login: string;

  permission: string[];
  role: Role;
  status: Status;
  gender: Gender;
  cart?: string;
  order?: string;
  wishlist?: string;
  likes?: string;
  favorite?: string;
  address?: string;
  resetPasswordToken?: string;
  resetPasswordExpireAt?: string;
  forgotPassword?: string;
  forgotPasswordExpiry?: string;
  verificationToken?: string;
  verificationTokenExpireAt?: string;
  verifyOtp?: string;
  verifyOtpExpireAt?: number;
  resetOtp?: string;
  resetOtpExpireAt?: number;
} | null;

export interface AuthState {
  user: TUserType | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  success: string | null;
}

export type ProviderProp = {
  children: ReactNode;
};

export interface AuthContextType extends AuthState {
  register: (
    username: string,
    email: string,
    password: string,
    confirm_password: string,
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<TUserType | undefined>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
  isAuthenticated: boolean;
  isAdmin: boolean;
}
