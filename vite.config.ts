import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@/": "./app",
      "@/components": "./app/components",
      "@/context": "./app/context",
      "@/css": "./app/css",
      "@/hooks": "./app/hooks",
      "@/layout": "./app/layout",
      "@/lib": "./app/lib",
      "@/pages": "./app/pages",
      "@/routes": "./app/routes",
      "@/services": "./app/services",
      "@/types": "./app/types",
      "@/welcome": "./app/welcome",
    },
  },
});
