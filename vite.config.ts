/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      excludeNodeModules: true,
      exclude: ["./src/tests/**"],
    },
    setupFiles: ["./src/tests/setup.ts"],
  },
});
