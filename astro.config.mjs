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
				"./src/styles/mathml.css",
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
						{ 
							label: "SKALE Chain",
							items: [
								{ label: "Overview", link: "/learn/skale-chain-overview" },
								{ label: "AppChain", link: "/learn/app-chain" },
								{ label: "HubChain", link: "/learn/hub-chain" },
								{ label: "Calypso Innovation Hub", link: "/learn/calypso" },
								{ label: "Chaos Open Testnet", link: "/learn/chaos" },
								{ label: "Europa Liquidity Hub", link: "/learn/europa" },
								{ label: "Nebula Gaming Hub", link: "/learn/nebula" },
								{ label: "Titan AI Hub", link: "/learn/titan" },
							]
						},
						{ 
							label: "Beginner",
							items: [
								{ label: "EVM Compatability", link: "/learn/beginner/evm-compatability" },
								{ label: "Hybrid Architecture", link: "/learn/beginner/hybrid-architecture" },
								{ label: "SKALE Chain Gas", link: "/learn/beginner/skale-chain-gas" },
								{ label: "Zero Gas Fees", link: "/learn/beginner/zero-gas-fees" }
							]
						},
						{
							label: "Advanced",
							items: [
								{ label: "Block Rotation", link: "/learn/advanced/block-rotation" },
								{ label: "Consensus", link: "/learn/advanced/consensus" },
								{ label: "Consensus Deep Dive", link: "/learn/advanced/consensus-deep-dive" },
								{ label: "Distributed Key Generation with BLS", link: "/learn/advanced/dkg-bls" },
								{ label: "JSON-RPC Compatability", link: "/learn/advanced/json-rpc-compatability" },
								{ label: "Precompiled Contracts", link: "/learn/advanced/precompiled-contracts" },
								{ label: "Snapshots", link: "/learn/advanced/snapshots" },
								{
									label: "Topics",
									items: [
										{ label: "Intro to Elliptic Curve Cryptography", link: "/learn/advanced/topics/elliptic-curve-cryptography" },
										{ label: "Intro to Threshold Schemes", link: "/learn/advanced/topics/threshold-schemes" }
									]
								}
							]
						},
						{ label: "Mainnet Beta", link: "/learn/mainnet-beta" },
						{ label: "FAQ", link: "/learn/faq"},
					]
				},
				{
					label: "Quick Start",
					autogenerate: { directory: "quick-start" },
					// items: [
					// 	{ label: "Start Here", link: "/quick-start/index" },
					// 	{ label: "Select a Chain", link: "/quick-start/select-a-chain" },
					// 	{ label: "Acquire sFUEL (Gas)", link: "/quick-start/acquire-sfuel" },
					// 	{ label: "Build on SKALE", link: "/quick-start/build" },
					// 	{ label: "Go Live", link: "/quick-start/select-a-chain" },
					// ]
				},
				{
					label: "tools",
					autogenerate: { directory: "tools" },
				},
			],
		}),
	],
});
