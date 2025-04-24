import { ThemeContext } from "@/context/theme-context";
import { TThemeType } from "@/types/TThemeType";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeContext) as TThemeType;
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
