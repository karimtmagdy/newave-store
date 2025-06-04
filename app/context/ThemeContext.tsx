import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export type Theme = "light" | "dark";
export type TThemeType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDarkMode: boolean;
};

export const ThemeContext = createContext<TThemeType>({
  theme: "light",
  setTheme: () => {},
  isDarkMode: false,
});
const Provider = ThemeContext.Provider;
export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return savedTheme && ["light", "dark"].includes(savedTheme)
      ? savedTheme
      : "light";
  });

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
    // document.documentElement.setAttribute("data-theme", theme);
    // setIsDarkMode(theme === "dark");
  }, [theme]);

  const valueContext: TThemeType = {
    theme,
    setTheme,
    isDarkMode,
  };
  return <Provider value={valueContext}>{children}</Provider>;
};
export const useTheme = () => {
  const context = useContext(ThemeContext) as TThemeType;
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
