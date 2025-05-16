import { Outlet } from "react-router";
import { ThemeProvider } from "~/context/ThemeContext";
import type { ChildrenProps } from "~/types/IGlobalType";

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <ThemeProvider>
      <div className="root-layout flex min-h-screen flex-col">
        <main className="flex-1">{children || <Outlet />}</main>
      </div>
    </ThemeProvider>
  );
}
