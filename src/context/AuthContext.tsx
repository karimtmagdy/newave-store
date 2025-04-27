import api from "@/config/axiosConfig";
import {
  API_ME,
  API_REFRESH,
  API_SIGNIN,
  API_SIGNOUT,
  API_SIGNUP,
} from "@/services/api/api-url";
import { ProviderProp } from "@/types/global.types";
import {
  AuthAction,
  AuthContextType,
  AuthState,
  DecodedToken,
  initialState,
} from "@/types/TUserType";
import { jwtDecode } from "jwt-decode";
import { getCookie, removeCookie } from "@/utils/cookies";
import {
  createContext,
  useCallback,
  useLayoutEffect,
  useMemo,
  useReducer,
} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, isLoading: true, error: null, success: null };
    case "AUTH_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        error: null,
      };
    case "AUTH_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "CLEAR_STATUS":
      return { ...state, isLoading: false, error: null, success: null };
    case "SET_SUCCESS":
      return { ...state, success: action.payload };
    case "LOGOUT":
      return { ...initialState };
    default:
      return state;
  }
};

export const AuthContext = createContext<AuthContextType | undefined>({
  isAuthenticated: false,
} as AuthContextType | undefined);

export const AuthProvider = ({ children }: ProviderProp) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { user, token, isLoading, error, success } = state;

  const isTokenExpired = (token: string): boolean => {
    try {
      const decoded = jwtDecode<DecodedToken>(token);
      if (!decoded.exp) return false;
      const currentTime = Math.floor(Date.now() / 1000);
      return decoded.exp < currentTime;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true;
    }
  };

  const getMe = async () => {
    try {
      const response = await api.get(API_ME);
      const userData = response.data;
      dispatch({ type: "SET_USER", payload: userData });
      return userData;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to fetch user data";
      dispatch({ type: "AUTH_ERROR", payload: errorMessage });
      throw err;
    }
  };
  const checkAndRefreshToken = useCallback(async () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken && isTokenExpired(storedToken)) {
      await refresh();
      await getMe();
    }
  }, []);

  useLayoutEffect(() => {
    checkAndRefreshToken();
    const interval = setInterval(checkAndRefreshToken, 300000); // Check every 5 minutes
    return () => clearInterval(interval);
  }, [checkAndRefreshToken]);

  useLayoutEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token") || getCookie("token");

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        dispatch({
          type: "AUTH_SUCCESS",
          payload: { user: parsedUser, token: storedToken },
        });
      } catch (err) {
        console.error("Error parsing stored user:", err);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
  }, []);

  useLayoutEffect(() => {
    if (!token) return;

    const checkTokenExpiry = () => {
      if (token && isTokenExpired(token)) {
        logout();
      }
    };

    const interval = setInterval(checkTokenExpiry, 60000);
    return () => clearInterval(interval);
  }, [token]);

  useLayoutEffect(() => {
    const refreshToken = getCookie("refreshToken");
    if (!refreshToken && token) {
      logout();
    }
  }, [token]);

  const signup = async (
    username: string,
    email: string,
    password: string,
    confirm_password: string,
  ) => {
    dispatch({ type: "AUTH_START" });
    try {
      const response = await api.post(API_SIGNUP, {
        username,
        email,
        password,
        confirm_password,
      });
      toast.success("Registration successful");
      navigate(API_SIGNIN);
      return response.data;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Registration failed";
      toast.error(errorMessage);
      dispatch({ type: "AUTH_ERROR", payload: errorMessage });
      throw err;
    }
  };
  const signin = async (email: string, password: string) => {
    dispatch({ type: "AUTH_START" });
    try {
      const response = await api.post(API_SIGNIN, { email, password });
      const { token: newToken, user: userData } = response.data;
      localStorage.setItem("token", newToken);
      localStorage.setItem("user", JSON.stringify(userData));

      dispatch({
        type: "AUTH_SUCCESS",
        payload: { user: userData, token: newToken },
      });
      toast.success("Login successful");

      navigate(userData?.role === "admin" ? "/admin" : "/");
      return userData;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Login failed";
      toast.error(errorMessage);
      dispatch({ type: "AUTH_ERROR", payload: errorMessage });
      throw err;
    }
  };
  const refresh = async () => {
    dispatch({ type: "AUTH_START" });
    const refreshToken = getCookie("refreshToken");

    if (!refreshToken) {
      return logout();
    }
    try {
      const response = await api.get(API_REFRESH, {
        headers: { Authorization: `Bearer ${refreshToken}` },
      });
      const newToken = response.data.token;
      dispatch({ type: "SET_TOKEN", payload: newToken });
      localStorage.setItem("token", newToken);
      toast.success(response.data.message || "Token refreshed successfully");
      const time = new Date().toLocaleString();
      console.log(`${user?.email} updated at ${time} with new token.`);
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Failed to refresh token";
      toast.error(errorMessage);
      dispatch({ type: "AUTH_ERROR", payload: errorMessage });
      console.error("Refresh error:", err);
      logout();
    }
  };
  const logout = async () => {
    dispatch({ type: "AUTH_START" });
    try {
      if (token) {
        await api.post(API_SIGNOUT, {});
      }
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      removeCookie("refreshToken");
      dispatch({ type: "LOGOUT" });
      toast.success("Logout successful");
      navigate(API_SIGNIN);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Logout failed";
      toast.error(errorMessage);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      removeCookie("refreshToken");
      dispatch({ type: "LOGOUT" });
      navigate(API_SIGNIN);
    }
  };
  const contextValue = useMemo(
    () => ({
      user,
      token,
      isLoading,
      error,
      success,
      signup,
      signin,
      logout,
      refresh,
      isAuthenticated: !!token && !!user,
      isAdmin: user?.role === "admin" || false,
      getMe,
    }),
    [user, token, isLoading, error, success],
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
