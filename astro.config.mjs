// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import routes from "./routes/index.mjs";
import react from "@astrojs/react";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
	redirects: {
		"/": "/welcome/get-started"
	},
	integrations: [
		react(),
		starlight({
			title: 'SKALE Docs',
			customCss: [
				'./src/styles/global.css'
			],
			locales: {
				root: {
					label: 'English',
					lang: 'en'
				}
			},
			// Below error for some reason doesn't like badge variants from external files
			// If you remove and it breaks, I will be sad :(
			// @ts-ignore
			sidebar: routes,
			plugins: process.env.CHECK_LINKS ?  [starlightLinksValidator()] : []
		})
	],
});