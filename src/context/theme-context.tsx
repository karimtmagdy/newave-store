import { ProviderProp, Theme, TThemeType } from "@/types/TThemeType";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<TThemeType>({
  theme: "system",
  setTheme: () => {},
  isDarkMode: false,
});

export const ThemeProvider = ({ children }: ProviderProp) => {
  const getInitialTheme = (): Theme => {
    if (typeof window === "undefined") return "system";

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return savedTheme && ["system", "light", "dark"].includes(savedTheme)
      ? savedTheme
      : "system";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const getSystemTheme = (): "light" | "dark" => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const applyTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    const effectiveTheme = newTheme === "system" ? getSystemTheme() : newTheme;

    root.classList.remove("light", "dark");
    root.classList.add(effectiveTheme);

    setIsDarkMode(effectiveTheme === "dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
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
