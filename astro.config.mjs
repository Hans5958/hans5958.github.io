import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import compress from "astro-compress"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
	site: 'https://hans5958.github.io/',

	integrations: [
		sitemap(),
		icon(),
		import.meta.env.MODE === "production" && compress({
			img: false
		}),
	],

	image: {
		remotePatterns: [{ protocol: "https" }],
	},
	vite: {
		plugins: [
			tailwindcss()
		],
	},
	compressHTML: false,
})