import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // When using styled-components as the styling engine for MUI:
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
  server: {
    host: true, // expose on the local network (useful for testing on phone/other devices)
    port: 5173, // default Vite port
  },
});
