import { ReactNode } from "react";
// import { JwtPayload } from "jwt-decode";
export type Role = "user" | "admin" | "manager" | "moderator";
type Gender = "male" | "female";
export type Status = "active" | "inactive" | "banned" | "suspended";
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
  [key: string]: any;
  exp: number;
} | null;

export type AuthContextType =
  | {
      user: TUserType | null;
      token?: string | null;
      isLoading?: boolean;
      error?: string | null;
      success?: string | null;
      isAuthenticated: boolean;
      isAdmin: boolean;
      register?: (
        username: string,
        email: string,
        password: string,
        confirm_password: string,
      ) => void;
      login: (email: string, password: string) => void;
      logout?: () => void;
    }
  | undefined;
export type ProviderProp = {
  children: ReactNode;
};
