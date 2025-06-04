import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { AuthContextType, AuthState, Tokens } from "@/types/TAuthType";
import type { TUserType } from "@/types/TUser";

// Helper function to get tokens from localStorage
const getStoredTokens = (): Tokens | null => {
  const storedTokens = localStorage.getItem("token");
  if (storedTokens) {
    try {
      const parsedTokens = JSON.parse(storedTokens) as Tokens;
      // Basic validation for token structure
      if (
        parsedTokens &&
        parsedTokens.token &&
        parsedTokens.refreshToken &&
        parsedTokens.expiresAt
      ) {
        return parsedTokens;
      }
    } catch (error) {
      console.error("Error parsing stored tokens:", error);
      localStorage.removeItem("token"); // Clear invalid tokens
    }
  }
  return null;
};

// Helper function to get user from localStorage
const getStoredUser = (): TUserType | null => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    try {
      return JSON.parse(storedUser) as TUserType;
    } catch (error) {
      console.error("Error parsing stored user:", error);
      localStorage.removeItem("user"); // Clear invalid user data
    }
  }
  return null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  // Function to check token expiry and logout if needed
  const checkTokenExpiry = (tokens: Tokens | null) => {
    if (tokens && tokens.expiresAt) {
      // Assuming expiresAt is in seconds
      const isExpired = Date.now() >= tokens.expiresAt * 1000;
      if (isExpired) {
        console.log("Access token expired. Logging out.");
        logout(); // Or attempt to refresh token
        return true;
      }
    }
    return false;
  };

  // Effect to initialize auth state from localStorage and set up expiry check
  useEffect(() => {
    const storedTokens = getStoredTokens();
    const storedUser = getStoredUser();

    if (storedTokens && storedUser) {
      if (!checkTokenExpiry(storedTokens)) {
        setAuthState({
          isAuthenticated: true,
          user: storedUser,
          token: storedTokens,
        });
      } else {
        // Token was expired, logout already handled by checkTokenExpiry
        setAuthState((prev) => ({ ...prev, isLoading: false }));
      }
    } else {
      setAuthState((prev) => ({ ...prev, isLoading: false }));
    }

    // Optional: Set up an interval to periodically check token expiry
    // const intervalId = setInterval(() => {
    //   const currentTokens = getStoredTokens();
    //   if (currentTokens) {
    //     checkTokenExpiry(currentTokens);
    //   }
    // }, 60 * 1000); // Check every minute

    // return () => clearInterval(intervalId);
  }, []);

  // Login function (replace with your actual API call)
  const login = async (credentials: TUserType) => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      // --- API Call for Login ---
      // const response = await api.post('/auth/login', credentials);
      // const { user, accessToken, refreshToken, expiresIn } = response.data;
      // --- Mock Implementation ---
      console.log("Simulating login with:", credentials);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
      const user: TUserType = {
        _id: "1",
        username: "testuser",
        email: "test@example.com",
      };
      const token = "mockAccessToken";
      const refreshToken = "mockRefreshToken";
      const expiresIn = 3600; // 1 hour in seconds
      // --- End Mock Implementation ---

      const tokens: Tokens = {
        token,
        refreshToken,
        expiresAt: Date.now() / 1000 + expiresIn, // Convert to seconds timestamp
      };

      localStorage.setItem("authTokens", JSON.stringify(tokens));
      localStorage.setItem("user", JSON.stringify(user));

      setAuthState({
        isAuthenticated: true,
        user,
        token,
      });
    } catch (err: any) {
      console.error("Login failed:", err);
      setAuthState({
        isAuthenticated: false,
        user: null,
        token: null,
      });
      // Optionally re-throw or handle specific error types
    }
  };

  // Signup function (replace with your actual API call)
  const signup = async (userData: any) => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      // --- API Call for Signup ---
      // const response = await api.post('/auth/signup', userData);
      // const { user, accessToken, refreshToken, expiresIn } = response.data;
      // --- Mock Implementation ---
      console.log("Simulating signup with:", userData);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
      const user: TUserType = {
        _id: "2",
        username: userData.username,
        email: userData.email,
      };
      const token = "mockSignupAccessToken";
      const refreshToken = "mockSignupRefreshToken";
      const expiresIn = 3600; // 1 hour
      // --- End Mock Implementation ---

      const tokens: Tokens = {
        token,
        refreshToken,
        expiresAt: Date.now() / 1000 + expiresIn,
      };

      localStorage.setItem("token", JSON.stringify(tokens));
      localStorage.setItem("user", JSON.stringify(user));

      setAuthState({
        isAuthenticated: true,
        user,
        token,
        isLoading: false,
        error: null,
      });
    } catch (err: any) {
      console.error("Signup failed:", err);
      setAuthState({
        isAuthenticated: false,
        user: null,
        token: null,
      });
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthState({
      isAuthenticated: false,
      user: null,
      token: null,
    });
    // Optionally redirect to login page or perform other cleanup
    // window.location.href = '/login';
  };

  // Refresh token function (placeholder - implement based on your backend)
  // const refreshTokenFn = async () => {
  //   const currentTokens = getStoredTokens();
  //   if (!currentTokens || !currentTokens.refreshToken) {
  //     logout();
  //     return;
  //   }
  //   setAuthState(prev => ({ ...prev, isLoading: true }));
  //   try {
  //     // --- API Call for Refresh Token ---
  //     // const response = await api.post('/auth/refresh-token', { refreshToken: currentTokens.refreshToken });
  //     // const { accessToken, expiresIn } = response.data;
  //     // --- Mock Implementation ---
  //     await new Promise(resolve => setTimeout(resolve, 500));
  //     const accessToken = 'newMockRefreshedAccessToken';
  //     const expiresIn = 3600;
  //     // --- End Mock Implementation ---

  //     const newTokens: Tokens = {
  //       ...currentTokens,
  //       accessToken,
  //       expiresAt: Date.now() / 1000 + expiresIn,
  //     };
  //     localStorage.setItem('authTokens', JSON.stringify(newTokens));
  //     setAuthState(prev => ({
  //       ...prev,
  //       tokens: newTokens,
  //       isAuthenticated: true,
  //     }));
  //   } catch (error) {
  //     console.error('Failed to refresh token:', error);
  //     logout(); // If refresh fails, logout the user
  //   }
  // };

  // // Effect to set up automatic token refresh before expiry
  // useEffect(() => {
  //   let timeoutId: NodeJS.Timeout;
  //   if (authState.tokens && authState.tokens.expiresAt) {
  //     const now = Date.now() / 1000;
  //     const expiresIn = authState.tokens.expiresAt - now;
  //     const refreshThreshold = 5 * 60; // Refresh 5 minutes before expiry

  //     if (expiresIn > refreshThreshold) {
  //       const refreshIn = (expiresIn - refreshThreshold) * 1000;
  //       timeoutId = setTimeout(refreshTokenFn, refreshIn);
  //     }
  //   }
  //   return () => clearTimeout(timeoutId);
  // }, [authState.tokens]);

  return (
    <AuthContext.Provider value={{ ...authState, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
