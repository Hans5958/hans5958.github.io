import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
	site: 'https://hans5958.github.io/',
	integrations: [
		sitemap(), tailwind(), icon(), vue(),
		import.meta.env.MODE === "production" && compress({
			img: false
		})
	],
	image: {
		remotePatterns: [{ protocol: "https" }],
		service: {
			entrypoint: 'astro/assets/services/sharp'
		}
	},
	compressHTML: false
});