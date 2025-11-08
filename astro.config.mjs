import { defineConfig } from "astro/config";
import github from "@astrojs/github/pages";

export default defineConfig({
  site: "https://leandropacsi27.github.io/Portafolio-2025/",
  integrations: [github()],
});
