import {
  API_ME,
  API_REFRESH,
  API_SIGNIN,
  API_SIGNOUT,
  API_SIGNUP,
} from "@/services/api/api";
import api from "@/services/config/axios-config";
import {
  AuthContextType,
  AuthState,
  DecodedToken,
  ProviderProp,
  TUserType,
} from "@/types/TUserType";
import {
  createContext,
  useCallback,
  useLayoutEffect,
  useMemo,
  useReducer,
} from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { jwtDecode } from "jwt-decode";
import { getCookie, removeCookie } from "@/lib/cookie";

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  success: null,
};

// Action types for the reducer
type AuthAction =
  | { type: "AUTH_START" }
  | { type: "AUTH_SUCCESS"; payload: { user: TUserType; token: string } }
  | { type: "AUTH_ERROR"; payload: string }
  | { type: "SET_USER"; payload: TUserType }
  | { type: "SET_TOKEN"; payload: string }
  | { type: "CLEAR_STATUS" }
  | { type: "SET_SUCCESS"; payload: string }
  | { type: "LOGOUT" };

// Reducer function to handle state changes
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
  const { id } = useParams();
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

  const checkAndRefreshToken = useCallback(async () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken && isTokenExpired(storedToken)) {
      await refresh();
    }
  }, []);

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

        checkAndRefreshToken();
        // if (isTokenExpired(storedToken)) {
        //   refresh();
        // }
      } catch (err) {
        console.error("Error parsing stored user:", err);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
  }, [checkAndRefreshToken]);

  useLayoutEffect(() => {
    const fetchUserById = async () => {
      if (!id) return;

      dispatch({ type: "AUTH_START" });
      try {
        const response = await api.get(`${API_ME}/${id}`);
        dispatch({ type: "SET_USER", payload: response.data.user });
      } catch (err: any) {
        const errorMessage =
          err.response?.data?.message || "Failed to fetch user data";
        toast.error(errorMessage);
        dispatch({ type: "AUTH_ERROR", payload: errorMessage });
      }
    };

    fetchUserById();
  }, [id]);

  useLayoutEffect(() => {
    if (!token) return;

    const checkTokenExpiry = () => {
      if (token && isTokenExpired(token)) {
        logout();
      }
    };

    // Check every minute
    const interval = setInterval(checkTokenExpiry, 60000);
    return () => clearInterval(interval);
  }, [token]);

  useLayoutEffect(() => {
    const refreshToken = getCookie("refreshToken");

    if (!refreshToken && token) {
      logout();
    }
  }, [token]);

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

  const register = async (
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

  const login = async (email: string, password: string) => {
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

      // Redirect based on user role
      navigate(userData?.role === "admin" ? "/admin" : "/");
      return userData;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Login failed";
      toast.error(errorMessage);
      dispatch({ type: "AUTH_ERROR", payload: errorMessage });
      throw err;
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
      // Still clear local data even if API call fails
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
      register,
      login,
      logout,
      refresh,
      isAuthenticated: !!token && !!user,
      isAdmin: user?.role === "admin" || false,
    }),
    [user, token, isLoading, error, success],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// export const AuthProvider = ({ children }: ProviderProp) => {

//   const [user, setUser] = useState<TUserType | null>(null);
//   const [token, setToken] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);

//   useEffect(() => {
//     const refreshToken = getCookie("refreshToken");

//     const checkRefreshToken = async () => {
//       if (!refreshToken) logout();
//     };
//     if (refreshToken) checkRefreshToken();
//   }, [token]);

//   const refresh = async () => {
//     setIsLoading(true);
//     setError(null);
//     const refreshToken = getCookie("refreshToken");
//     if (!refreshToken) return logout();
//     try {
//       const response = await api.get(API_REFRESH, {
//         headers: { Authorization: `Bearer ${refreshToken}` },
//       });

//       const newToken = response.data.token;
//       setToken(newToken);
//       localStorage.setItem("token", newToken);
//       toast.success(response.data.message);
//       const time = new Date().toLocaleString();
//       const updated = `${user?.email} updated at ${time} with new token.`;
//       console.log(updated);
//     } catch (err: any) {
//       const errorMessage = err.response?.data?.message;
//       toast.error(errorMessage);
//       setError(errorMessage);
//       console.log("refreshing error:", err);
//       logout();
//     } finally {
//       setIsLoading(false);
//       setSuccess(null);
//       setError(null);
//     }
//   };

//   useEffect(() => {
//     // Check if token is expired every minute
//     if (!token) return;
//     const checkTokenExpiry = () => {
//       const isExpired = isTokenExpired(token);
//       if (isExpired) logout();
//     };
//     // Check every minute
//     const interval = setInterval(checkTokenExpiry, 60000);
//     return () => clearInterval(interval);
//   }, [token]);

//   useEffect(() => {
//     // check if user is logged in on initial load
//     const checkUserLoggedIn = async () => {
//       try {
//         const response = await api.get(`${API_ME}/${id}`);
//         setUser(response.data.user);
//       } catch (err: any) {
//         const errorMessage = err.response?.data?.message;
//         toast.error(errorMessage);
//         setError(errorMessage);
//         console.error(err);
//       } finally {
//         setIsLoading(false);
//         setSuccess(null);
//       }
//     };
//     if (id) checkUserLoggedIn();
//   }, [id]);

//   // Check if user is already logged in on initial load
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const storedToken = localStorage.getItem("token") || getCookie("token");
//     // Check if token expiry and refresh automatically
//     if (storedToken && storedUser) {
//       if (isTokenExpired(storedToken)) {
//         refresh();
//       }
//       setToken(storedToken);
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const register = async (
//     username: string,
//     email: string,
//     password: string,
//     confirm_password: string,
//   ) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await api.post(API_SIGNUP, {
//         username,
//         email,
//         password,
//         confirm_password,
//       });
//       setUser(response.data);
//       toast.success("Registration successfully");
//       navigate(API_SIGNIN);
//     } catch (err: any) {
//       const errorMessage = err.response?.data?.message;
//       toast.error(errorMessage);
//       setError(errorMessage);
//       console.log(errorMessage);
//       return;
//     } finally {
//       setIsLoading(false);
//       setSuccess(null);
//     }
//   };

//   const login = async (email: string, password: string) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await api.post(API_SIGNIN, { email, password });
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("user", JSON.stringify(response.data.user));
//       setToken(token);
//       setUser(user);
//       toast.success("Login successfully");
//       console.log(response.data);
//       if (user?.role === "admin") navigate("/admin");
//       navigate("/");
//       // return user;
//     } catch (err: any) {
//       const errorMessage = err.response?.data?.message;
//       toast.error(errorMessage);
//       setError(errorMessage);
//       console.log("Login error:", err);
//       return;
//     } finally {
//       setIsLoading(false);
//       setSuccess(null);
//     }
//   };

//   const logout = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       if (token) {
//         await api.post(API_SIGNOUT, {});
//         toast.success("logout successfully");
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         removeCookie("refreshToken");
//         navigate(API_SIGNIN);
//         setToken(null);
//         setUser(null);
//       }
//     } catch (err: any) {
//       const errorMessage = err.response?.data?.message;
//       toast.error(errorMessage);
//       setError(errorMessage);
//       console.log("Logout API error:", err);
//     } finally {
//       setIsLoading(false);
//       setSuccess(null);
//       setError(null);
//     }
//   };
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// karim@gmail.com
