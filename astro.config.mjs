import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://hans5958.github.io',
  integrations: [sitemap(), tailwind(), 
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }), 
    import.meta.env.MODE === "production" && compress({
    img: false
  })]
});