export type TUserType = {
  //   nickname: string;
  status: string;
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
  //   verified: boolean;
  //   phone?: number;
  //   remember_me?: boolean;
};
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

// export type TLoginUser = Pick<TUserType, "email" | "password">;
