import { Theme, TThemeType } from "@/types/TThemeType";
import { ProviderProp } from "@/types/global.types";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<TThemeType>({
  theme: "light",
  setTheme: () => {},
  isDarkMode: false,
});

export const ThemeProvider = ({ children }: ProviderProp) => {
  const getInitialTheme = (): Theme => {
    if (typeof window === "undefined") return "light";

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return savedTheme && ["light", "dark"].includes(savedTheme)
      ? savedTheme
      : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const applyTheme = (newTheme: Theme) => {
    const root = window.document.documentElement.classList;
    root.remove("light", "dark");
    root.add(newTheme);
    setIsDarkMode(newTheme === "dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    applyTheme(theme);
  }, []);

  const value: TThemeType = {
    theme,
    setTheme,
    isDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
