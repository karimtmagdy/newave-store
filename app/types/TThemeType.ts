export type Theme = "light" | "dark";

export type TThemeType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDarkMode: boolean;
};
