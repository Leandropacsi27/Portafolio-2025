import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://leandropacsi27.github.io",
  base: "/Portafolio-2025",
  outDir: './dist',
  build: {
    assets: 'assets'
  },
  integrations: [tailwind()]
});
