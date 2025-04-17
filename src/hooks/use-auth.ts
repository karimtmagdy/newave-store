import { AuthContext } from "@/context/auth-context";
import { AuthContextType } from "@/types/TUserType";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext) as AuthContextType;
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};
