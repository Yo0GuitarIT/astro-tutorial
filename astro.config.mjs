// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321/",
  integrations: [react(), mdx()],
  vite: {
    plugins: [svgr()],
  },
});
