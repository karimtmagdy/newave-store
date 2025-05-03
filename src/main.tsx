import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/app.css";
import "@/styles/index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
import whyDidYouRender from "@welldone-software/why-did-you-render";
if (import.meta.env.NODE_ENV === "development") {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    <App />
  </StrictMode>,
);
