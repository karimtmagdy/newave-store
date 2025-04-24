type Gender = "male" | "female";
export type Status = "active" | "inactive" | "banned" | "suspended";
export type Role = "user" | "admin";

export type TUserType = {
  _id: string;
  nickname: string;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  role: Role;
  status: Status;
  gender: Gender;

  updatedAt?: string;
  cart?: string;
  order?: string;

  permission: string[];

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
  active?: boolean;
  slug: string;
  photo: { url: string };
  verified: boolean;
  phone?: number;
  remember_me?: boolean;
  joinedAt: string;

  last_login: string;
};

export type AuthState = {
  user: TUserType | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  success: string | null;
};

export type DecodedToken = {
  exp?: number;
  iat?: number;
  sub?: string;
};

export interface AuthContextType extends Omit<AuthState, "success"> {
  isAuthenticated: boolean;
  isAdmin: boolean;
  register: (
    username: string,
    email: string,
    password: string,
    confirm_password: string
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<TUserType | undefined>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}
