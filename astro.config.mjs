// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import routes from "./routes/index.mjs";
import redirects from "./redirects/index.mjs";
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
		}	]
})

// https://astro.build/config
export default defineConfig({
	site: process.env.NODE_ENV === "production" ? "https://docs.skale.space" : "http://localhost:4321",
	redirects: redirects,
	integrations: [
		sitemap(),
		react(),
		starlight({
			title: 'SKALE Docs',
			customCss: [
				'./src/styles/global.css'
			],
			favicon: "./skale_token_b.png",
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