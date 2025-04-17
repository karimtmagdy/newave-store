import {
  API_ME,
  API_REFRESH,
  API_SIGNIN,
  API_SIGNOUT,
  API_SIGNUP,
} from "@/services/api/api";
import api from "@/services/config/axios-config";
import { AuthContextType, ProviderProp, TUserType } from "@/types/TUserType";
import { createContext, useLayoutEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { jwtDecode } from "jwt-decode";
import { getCookie, removeCookie } from "@/lib/cookie";

export const AuthContext = createContext<AuthContextType | undefined>({
  isAuthenticated: false,
} as AuthContextType | undefined);

export const AuthProvider = ({ children }: ProviderProp) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<TUserType | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useLayoutEffect(() => {
    const refreshToken = getCookie("refreshToken");

    const checkRefreshToken = async () => {
      if (!refreshToken) logout();
    };
    if (refreshToken) checkRefreshToken();
  }, [token]);

  const refresh = async () => {
    setIsLoading(true);
    setError(null);
    const refreshToken = getCookie("refreshToken");
    if (!refreshToken) return logout();
    try {
      const response = await api.get(API_REFRESH, {
        headers: { Authorization: `Bearer ${refreshToken}` },
      });

      const newToken = response.data.token;
      setToken(newToken);
      localStorage.setItem("token", newToken);
      toast.success(response.data.message);
      const time = new Date().toLocaleString();
      const updated = `${user?.email} updated at ${time} with new token.`;
      console.log(updated);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message;
      toast.error(errorMessage);
      setError(errorMessage);
      console.log("refreshing error:", err);
      logout();
    } finally {
      setIsLoading(false);
      setSuccess(null);
      setError(null);
    }
  };

  const isTokenExpired = (token: string): boolean => {
    // decode the JWT and check its expiration
    try {
      const decoded = jwtDecode(token);
      if (!decoded.exp) return false;
      const currentTime = Math.floor(Date.now() / 1000);
      return decoded.exp < currentTime;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true;
    }
  };

  useLayoutEffect(() => {
    // Check if token is expired every minute
    if (!token) return;
    const checkTokenExpiry = () => {
      const isExpired = isTokenExpired(token);
      if (isExpired) logout();
    };
    // Check every minute
    const interval = setInterval(checkTokenExpiry, 60000);
    return () => clearInterval(interval);
  }, [token]);

  useLayoutEffect(() => {
    // check if user is logged in on initial load
    const checkUserLoggedIn = async () => {
      try {
        const response = await api.get(`${API_ME}/${id}`);
        setUser(response.data.user);
      } catch (err: any) {
        const errorMessage = err.response?.data?.message;
        toast.error(errorMessage);
        setError(errorMessage);
        console.error(err);
      } finally {
        setIsLoading(false);
        setSuccess(null);
      }
    };
    if (id) checkUserLoggedIn();
  }, [id]);

  // Check if user is already logged in on initial load
  useLayoutEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token") || getCookie("token");
    // Check if token expiry and refresh automatically
    if (storedToken && storedUser) {
      if (isTokenExpired(storedToken)) {
        refresh();
      }
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = async (
    username: string,
    email: string,
    password: string,
    confirm_password: string,
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.post(API_SIGNUP, {
        username,
        email,
        password,
        confirm_password,
      });
      setUser(response.data);
      toast.success("Registration successfully");
      navigate(API_SIGNIN);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message;
      toast.error(errorMessage);
      setError(errorMessage);
      console.log(errorMessage);
      return;
    } finally {
      setIsLoading(false);
      setSuccess(null);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.post(API_SIGNIN, { email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setToken(token);
      setUser(user);
      toast.success("Login successfully");
      console.log(response.data);
      if (user?.role === "admin") navigate("/admin");
      navigate("/");
      return user;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message;
      toast.error(errorMessage);
      setError(errorMessage);
      console.log("Login error:", err);
      return;
    } finally {
      setIsLoading(false);
      setSuccess(null);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setError(null);
    try {
      if (token) {
        await api.post(API_SIGNOUT, {});
        toast.success("logout successfully");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        removeCookie("refreshToken");
        navigate(API_SIGNIN);
        setToken(null);
        setUser(null);
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.message;
      toast.error(errorMessage);
      setError(errorMessage);
      console.log("Logout API error:", err);
    } finally {
      setIsLoading(false);
      setSuccess(null);
      setError(null);
    }
  };

  const value = {
    register,
    login,
    logout,
    success,
    error,
    isLoading,
    token,
    user,
    isAuthenticated: !!token && !!user,
    isAdmin: user?.role === "admin",
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// karim@gmail.com
