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
			sidebar: routes
		})
	],
});
