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
				"./src/styles/hubs.css",
				"./src/styles/overrides.css",
				"./src/styles/tips.css"
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
					items: [
						{ label: "About SKALE Network", link: "/learn/about-skale-network"},
						{ label: "Mainnet Beta", link: "/learn/mainnet-beta" },
						{ label: "SKALE Chain Overview", link: "/learn/skale-chain-overview"},
						{ label: "FAQ", link: "/learn/faq"},
						{ 
							label: "Beginner",
							items: [
								{ label: "AppChain", link: "/learn/beginner/app-chain" },
								{ label: "EVM Compatability", link: "/learn/beginner/evm-compatability" },
								{ label: "HubChain", link: "/learn/beginner/hub-chain" },
								{
									label: "Hubs",
									collapsed: true,
									items: [
										{ label: "Calypso Innovation Hub", link: "/learn/beginner/hubs/calypso" },
										{ label: "Chaos Open Testnet", link: "/learn/beginner/hubs/chaos" },
										{ label: "Europa Liquidity Hub", link: "/learn/beginner/hubs/europa" },
										{ label: "Nebula Gaming Hub", link: "/learn/beginner/hubs/nebula" },
										{ label: "Titan AI Hub", link: "/learn/beginner/hubs/titan" },
									]
								},
								{ label: "Hybrid Architecture", link: "/learn/beginner/hybrid-architecture" },
								{ label: "SKALE Chain Fuel", link: "/learn/beginner/skale-chain-fuel" },
								{ label: "Zero Gas Fees", link: "/learn/beginner/zero-gas-fees" }
							]
						},
						{
							label: "Advanced",
							items: [
								{ label: "Block Rotation", link: "/learn/advanced/block-rotation" },
								{ label: "Code Size Limits", link: "/learn/advanced/code-size-limits" },
								{ label: "Consensus", link: "/learn/advanced/consensus" },
								{ label: "Consensus Deep Dive", link: "/learn/advanced/consensus-deep-dive" },
								{ label: "Distributed Key Generation with BLS", link: "/learn/advanced/dkg-bls" },
								{ label: "JSON-RPC Compatability", link: "/learn/advanced/json-rpc-compatability" },
								{ label: "Precompiled Contracts", link: "/learn/advanced/precompiled-contracts" },
								{ label: "Predeployed Contracts", link: "/learn/advanced/predeployed-contracts" },
								{ label: "Snapshots", link: "/learn/advanced/snapshots" },
								{
									label: "Topics",
									items: [
										{ label: "Intro to Elliptic Curve Cryptography", link: "/learn/advanced/topics/ellptic-curve-cryptography" },
										{ label: "Intro to Threshold Schemes", link: "/learn/advanced/topics/threshold-schemes" }
									]
								}
							]
						}
					]
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
