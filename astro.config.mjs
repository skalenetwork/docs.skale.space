// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SKALE Docs',
			// defaultLocale: 'root',
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
					autogenerate: { directory: 'welcome' },
				}
			],
		}),
	],
});
