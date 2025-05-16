import { createContext, useEffect, useState } from "react";
import type { ChildrenProps } from "~/types/IGlobalType";
import type { Theme, TThemeType } from "~/types/TThemeType";

export const ThemeContext = createContext<TThemeType>({
  theme: "light",
  setTheme: () => {},
  isDarkMode: false,
});

export const ThemeProvider = ({ children }: ChildrenProps) => {
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
