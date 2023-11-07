import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		starlight({
			title: 'My Docs',
			components: {
				Header: './src/components/Overrides/Header.astro',
				MobileMenuFooter: './src/components/Overrides/MobileMenuFooter.astro',
				Sidebar: './src/components/Overrides/Sidebar.astro',
				SidebarSublist: './src/components/Overrides/SidebarSublist.astro'
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
