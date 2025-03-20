// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import routes from "./routes/index.mjs";

// https://astro.build/config
export default defineConfig({
	redirects: {
		"/": "/welcome/get-started"
	},
	integrations: [
		starlight({
			title: 'SKALE Docs',
			locales: {
				root: {
					label: 'English',
					lang: 'en'
				}
			},
			// Below error for some reason doesn't like badge variants from external files
			// If you remove and it breaks, I will be sad :(
			// @ts-ignore
			sidebar: routes
		})
	],
});