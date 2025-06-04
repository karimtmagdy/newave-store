import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import {
  API_ME,
  API_SIGNIN,
  API_SIGNOUT,
  API_SIGNUP,
} from "@/services/constants/api-url";
import {
  allowedRoles,
  type AccessRole,
  type AuthContextType,
  type TUserType,
} from "@/types/TUser";
import type { DecodedToken, TAuth } from "@/types/TUser";

export const AuthContext = createContext<AuthContextType | undefined>({
  isAuthenticated: false,
} as AuthContextType | undefined);
const Provider = AuthContext.Provider;
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<TUserType | null>({} as TUserType);
  const [token, setToken] = useState<string | null>("");

  const isTokenExpired = (token: string): boolean => {
    try {
      const decoded = jwtDecode<DecodedToken>(token);
      if (!decoded.exp) return false;
      const currentTime = Math.floor(Date.now() / 1000);
      console.log(
        "Current Time:",
        new Date(currentTime * 1000).toLocaleString(),
      );
      console.log(
        "Token Expiration Time:",
        new Date(decoded.exp * 1000).toLocaleString(),
      );
      return decoded.exp < currentTime;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true;
    }
  };
  // CHECK USER AND TOKEN
  useLayoutEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedToken && storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const parsedToken = JSON.parse(storedToken);
      setUser(parsedUser);
      setToken(parsedToken);
    }
  }, []);
  // const isAuthenticated = useMemo(() => !!user, [user]);
  const signup = async (
    username: string,
    email: string,
    password: string,
    confirm_password: string,
  ) => {
    const credentials: TAuth = { username, email, password, confirm_password };
    try {
      const response = await axios.post(API_SIGNUP, credentials);
      const { data, status } = response;
      if (status === 200) {
        toast.success(data.message);
        navigate(API_SIGNIN);
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Registration failed";
      toast.error(errorMessage);
      console.log(err.response.data.error.errors);
    }
  };
  const signin = async (email: string, password: string) => {
    const credentials: TAuth = { email, password };
    try {
      const response = await axios.post(API_SIGNIN, credentials);
      const { data, status } = response;
      const { token: newToken, user: userData } = response.data;

      if (status === 200) {
        setUser(userData);
        setToken(newToken);
        const parsedUser = JSON.stringify(userData);
        const parsedToken = JSON.stringify(newToken);
        localStorage.setItem("user", parsedUser);
        localStorage.setItem("token", parsedToken);
        toast.success(data.message);
        if (allowedRoles.includes(userData?.role as AccessRole)) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Login failed";
      toast.error(errorMessage);
      console.log(err.response.data.error.errors);
    }
  };
  // FUNCTION GET USER HIM SELF
  const getMe = async () => {
    try {
      const response = await axios.get(API_ME);
      setUser(response.data);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message;
      toast.error(errorMessage);
      throw err;
    }
  };
  // FUNCTION TO LOGOUT USER
  const signout = async () => {
    try {
      if (token && isTokenExpired(token)) {
        await axios.post(API_SIGNOUT, {});
      }
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate(API_SIGNIN);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message;
      toast.error(errorMessage);
    }
  };
  const contextValue = useMemo(
    () => ({
      user,
      token,
      isAdmin: allowedRoles.includes(user?.role as AccessRole),
      isAuthenticated: !!token && !!user,
      signup,
      signin,
      signout,
      getMe,
    }),
    [user, token],
  );

  return <Provider value={contextValue}>{children}</Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext) as AuthContextType;
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context as AuthContextType;
};
