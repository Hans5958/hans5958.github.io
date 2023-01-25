import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

export default defineConfig({
  site: 'https://hans5958.github.io',
  integrations: [sitemap(), tailwind(), 
    import.meta.env.MODE === "production" && compress({
      img: false,
    })
  ]
});