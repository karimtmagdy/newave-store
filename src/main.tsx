import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/App.css";
import "@/styles/index.css";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/context/theme-context.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Toaster />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
