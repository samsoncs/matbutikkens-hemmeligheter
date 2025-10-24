// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

const isCF = process.env.CF_PAGES === "1" || !!process.env.CF_PAGES_URL;
const cfEnv = process.env.CF_PAGES_ENV;
const siteName = "https://brobert.no";

const site = !isCF
  ? "http://localhost:4321"
  : cfEnv === "production"
    ? siteName
    : process.env.CF_PAGES_URL || siteName;

export default defineConfig({
  site,
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap(), svelte()],
});