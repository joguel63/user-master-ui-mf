import replace from "@rollup/plugin-replace";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: "mife",
      serverPort: 4173,
      projectId: "user-ui",
      spaEntryPoints: "src/spa.tsx",
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
      preventAssignment: true,
    }),
  ],
});
