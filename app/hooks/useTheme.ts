import { useContext } from "react";
import { ThemeContext } from "~/context/ThemeContext";
import type { TThemeType } from "~/types/TThemeType";

const useTheme = () => {
  const context = useContext(ThemeContext) as TThemeType;
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
export default useTheme;
