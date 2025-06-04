import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "./",
  clearScreen: true,
  envPrefix: "VITE_",
  json: { stringify: true },
  html: { cspNonce: "newave-store" },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./app/css/globals.css";`,
      },
    },
  },
  server: {
    cors: true,
    // headers: {
    //   "Cross-Origin-Opener-Policy": "same-origin",
    //   "Cross-Origin-Embedder-Policy": "same-origin",
    //  "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    // },
    origin: "http://localhost:8000",
    port: 3000,
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@/": "/app",
      "@/assets": "/app/assets",
      "@/components": "/app/components",
      "@/context": "/app/context",
      "@/css": "/app/css",
      "@/hooks": "/app/hooks",
      "@/layout": "/app/layout",
      "@/lib": "/app/lib",
      "@/modules": "/app/modules",
      "@/pages": "/app/pages",
      "@/routes": "/app/routes",
      "@/services": "/app/services",
      "@/types": "/app/types",
    },
  },
});
