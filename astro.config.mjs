import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		starlight({
			title: "Developer Docs",
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
			logo: {
				dark: './src/assets/skale_logo_w.svg',
				light: './src/assets/skale_logo_b.svg'
			},
			social: {
				discord: "https://discord.com/invite/gM5XBy6",
				github: "https://github.com/skalenetwork"
			},
			sidebar: [
				{
					label: "Developers",
					autogenerate: { directory: "developers" },
				},
				{
					label: "Learn",
					autogenerate: { directory: "learn" },
				},
				{
					label: "Quick Start",
					autogenerate: { directory: "quick-start" },
				},
				{
					label: "tools",
					autogenerate: { directory: "tools" },
				},
			],
		}),
	],
});
