// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import routes from "./routes";

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
				},
				'pt-pt': {
					label: "Portuguese",
					lang: 'pt-pt'
				}
			},
			sidebar: [
				{
					label: "Welcome",
					items: routes.welcome
				}
			],
		}),
	],
});
