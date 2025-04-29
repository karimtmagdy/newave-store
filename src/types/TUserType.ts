type Gender = "male" | "female";
type Status = "active" | "inactive" | "banned" | "suspended";
type Role = "user" | "admin"

export type TUserType = {
  _id: string;
  //   nickname: string;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  role: Role;

  status: Status;
  gender: Gender;

  //   updatedAt?: string;
  //   cart?: string;
  //   order?: string;

  //   permission: string[];

  //   wishlist?: string;
  //   likes?: string;
  //   favorite?: string;
  //   address?: string;
  //   resetPasswordToken?: string;
  //   resetPasswordExpireAt?: string;
  //   forgotPassword?: string;
  //   forgotPasswordExpiry?: string;
  //   verificationToken?: string;
  //   verificationTokenExpireAt?: string;
  //   verifyOtp?: string;
  //   verifyOtpExpireAt?: number;
  //   resetOtp?: string;
  //   resetOtpExpireAt?: number;
  //   active?: boolean;
  //   slug: string;
  //   photo: { url: string };
  //   verified: boolean;
  //   phone?: number;
  //   remember_me?: boolean;
  //   joinedAt: string;

  //   last_login: string;
};

export type DecodedToken = {
  exp?: number;
  iat?: number;
  sub?: string;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  isAdmin: boolean;
  signup: (
    username: string,
    email: string,
    password: string,
    confirm_password: string,
  ) => Promise<TUserType | undefined>;
  signin: (email: string, password: string) => Promise<TUserType | undefined>;
  // logout: () => Promise<void>;
  // refresh: () => Promise<void>;
};
// export type TLoginUser = Pick<TUserType, "email" | "password">;

export type AuthAction =
  | { type: "AUTH_START" }
  | { type: "AUTH_SUCCESS"; payload: { user: TUserType; token: string } }
  | { type: "AUTH_ERROR"; payload: string }
  | { type: "SET_USER"; payload: TUserType }
  | { type: "SET_TOKEN"; payload: string }
  | { type: "CLEAR_STATUS" }
  | { type: "SET_SUCCESS"; payload: string }
  | { type: "LOGOUT" };

export type AuthState = {
  user: TUserType | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  success: string | null;
};
export const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  success: null,
};
