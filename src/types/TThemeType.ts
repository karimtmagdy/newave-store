import { ReactNode } from "react";

export type Theme = "system" | "light" | "dark";
export type TThemeType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDarkMode: boolean;
};
export type ProviderProp = {
  children: ReactNode;
};
