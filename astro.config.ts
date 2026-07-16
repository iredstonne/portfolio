import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import browserslist from "browserslist"
import { browserslistToTargets } from "lightningcss"

import mdx from "@astrojs/mdx";

const browserslistConfig = browserslist([
    'baseline widely available',
    'not dead',
    'not op_mini all',
])

const lightningcssTargets = browserslistToTargets(browserslistConfig)

export default defineConfig({
  site: "https://iredstonne.github.io",
  base: "/portfolio",
  compressHTML: true,
  integrations: [mdx(), sitemap()],
  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: lightningcssTargets
      }
    }
  }
})

