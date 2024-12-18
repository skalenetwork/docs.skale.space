import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import routes from "./routes/index.mjs";
import redirects from "./routes/redirects.mjs";

// https://astro.build/config
export default defineConfig({
	redirects: redirects,
	integrations: [
		react(),
		starlight({
			title: "SKALE Docs",
			customCss: [
				"./src/styles/hubs.css",
				"./src/styles/overrides.css",
				"./src/styles/mathml.css",
				"./src/styles/tips.css",
				"./node_modules/react-toastify/dist/ReactToastify.css",
			],
			components: {
				Badge: "./src/components/Overrides/Badge.astro",
				Header: "./src/components/Overrides/Header.astro",
				MobileMenuFooter:
					"./src/components/Overrides/MobileMenuFooter.astro",
				PageFrame: "./src/components/Overrides/PageFrame.astro",
				Sidebar: "./src/components/Overrides/Sidebar.astro",
				SidebarSublist:
					"./src/components/Overrides/SidebarSublist.astro",
				MobileMenuToggle: "./src/components/Overrides/MobileMenuToggle.astro",
			},
			expressiveCode: true,
			favicon: "/favicon.png",
			logo: {
				dark: "./src/assets/skale_logo_w.svg",
				light: "./src/assets/skale_logo_b.svg",
			},
			social: {
				discord: "https://discord.com/invite/gM5XBy6",
				github: "https://github.com/skalenetwork",
			},
			sidebar: routes,
		}),
	],
});
