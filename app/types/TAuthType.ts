import type { TUserType } from "./TUser";

export interface Tokens {
  token: string | null;
  refreshToken: string;
  expiresAt: number; // Timestamp for access token expiry
}

export interface AuthState {
  isAuthenticated: boolean;
  user: TUserType | null;
  token: Tokens | null;
}

export interface AuthContextType extends AuthState {
  // Replace 'any' with your login credentials type
  login: (credentials: TUserType) => Promise<void>;
  // Replace 'any' with your signup data type
  signup: (userData: TUserType) => Promise<void>;
  logout: () => void;
  // Optional: expose refresh token function if needed directly
  // refreshToken: () => Promise<void>;
}
