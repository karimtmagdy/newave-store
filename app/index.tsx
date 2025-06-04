import * as React from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "@/services/config/axios-global";
import { ThemeProvider } from "@/context/ThemeContext";
 
createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <ThemeProvider>
    <Toaster />
    <App />
  </ThemeProvider>,
  //</React.StrictMode>,
);
