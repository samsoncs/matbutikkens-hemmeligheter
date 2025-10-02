// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
const isCI = process.env.GITHUB_ACTIONS === "true";
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://samsoncs.github.io/matbutikkens-hemmeligheter/",
  base: isCI || isProd ? "/matbutikkens-hemmeligheter/" : undefined,
  vite: {
    plugins: [tailwindcss()],
  },
});
