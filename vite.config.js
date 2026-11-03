import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  appType: "mpa",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        vpnTechnology: fileURLToPath(new URL("./vpn-technology/index.html", import.meta.url)),
      },
    },
  },
});
