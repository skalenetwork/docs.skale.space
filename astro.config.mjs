// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import routes from "./routes/index.mjs";
import react from "@astrojs/react";
import starlightLinksValidator from "starlight-links-validator";
import sitemap from "@astrojs/sitemap";
import starlightLlmsTxt from "starlight-llms-txt";

const llms = starlightLlmsTxt({
	projectName: "SKALE Network",
	description: "SKALE is a network of layer 1 blockchains offering infinite scalability, zero gas fees, and one of the fastest EVMs in thew world.",
	optionalLinks: [
		{
			label: "SKALE Network Github",
			url: "https://github.com/skalenetwork",
			description: "SKALE Network GitHub Organization"
		},
		{
			label: "Dirt Road Dev Docs",
			url: "https://docs.dirtroad.dev",
			description: "3rd party contributor Dirt Road Development docs which contains key SKALE contributions"
		},
		{
			label: "Eidolon Docs",
			url: "https://docs.eidolon.gg",
			description: "3rd party contributor Eidolon Labs docs which contains key SKALE contributions"
		}
	]
})

// https://astro.build/config
export default defineConfig({
	site: process.env.NODE_ENV === "production" ? "https://docs.skale.space" : "http://localhost:4321",
	redirects: {
		"/": "/welcome/get-started"
	},
	integrations: [
		sitemap(),
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
			plugins: process.env.CHECK_LINKS ?  [
				starlightLinksValidator(),
				llms,
			] : [
				llms
			]
		})
	],
});