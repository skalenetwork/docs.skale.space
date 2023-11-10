import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		starlight({
			title: "SKALE Developer Docs",
			customCss: [
				"./src/styles/overrides.css"
			],
			components: {
				Badge: "./src/components/Overrides/Badge.astro",
				Header: "./src/components/Overrides/Header.astro",
				MobileMenuFooter: "./src/components/Overrides/MobileMenuFooter.astro",
				Sidebar: "./src/components/Overrides/Sidebar.astro",
				SidebarSublist: "./src/components/Overrides/SidebarSublist.astro",
			},
			favicon: '/favicon.png',
			social: {
				discord: "https://discord.com/invite/gM5XBy6",
				github: "https://github.com/skalenetwork"
			},
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Example Guide", link: "/guides/example/", badge: "New" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});
