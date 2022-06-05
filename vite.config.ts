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
      all: true,
      include: [
        "src/features/**",
        "src/components/**",
        "src/services/**",
        "src/utils/**",
        "src/app/**",
      ],
      exclude: [
        "node_modules/**",
        "src/tests/**",
        "dist/**",
        "public/**",
        "src/app/store.ts",
      ],
    },
    setupFiles: ["./src/tests/setup.ts"],
  },
});
