import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import astroExpressiveCode from "astro-expressive-code";


// https://astro.build/config
export default defineConfig({
	integrations: [
		astroExpressiveCode(),
		react(),
		starlight({
			title: "SKALE Docs",
			customCss: [
				"./src/styles/hubs.css",
				"./src/styles/overrides.css",
				"./src/styles/mathml.css",
				"./src/styles/tips.css",
				"./node_modules/react-toastify/dist/ReactToastify.css"
			],
			components: {
				Badge: "./src/components/Overrides/Badge.astro",
				Header: "./src/components/Overrides/Header.astro",
				MobileMenuFooter: "./src/components/Overrides/MobileMenuFooter.astro",
				PageFrame: "./src/components/Overrides/PageFrame.astro",
				Sidebar: "./src/components/Overrides/Sidebar.astro",
				SidebarSublist: "./src/components/Overrides/SidebarSublist.astro"
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
								{ label: "Pre-compiled Contracts", link: "/learn/advanced/precompiled-contracts" },
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
					autogenerate: { directory: "quick-start" }
				},
				{
					label: "Tools",
					items: [
						{ label: "Overview", link: "/tools" },
						{
							label: "Wallets",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/wallets" },
								{ label: "Non-Custodial Wallets", link: "/tools/wallets/non-custodial" },
								{ label: "Custodial Wallets", link: "/tools/wallets/custodial" },
								{ label: "MPC Wallets", link: "/tools/wallets/mpc" },
								{ label: "Wallets Aggregator", link: "/tools/wallets/aggregator" },
							]
						},
						{
							label: "Libraries",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/libraries" },
								{ label: "Web Libraries", link: "/tools/libraries/web" },
								{ label: "Backend Libraries", link: "/tools/libraries/backend" },
								{ label: "Unity Libraries", link: "/tools/libraries/unity" },
								{ label: "Mobile Libraries", link: "/tools/libraries/mobile" },
							]
						},
						{
							label: "NFTs",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/nfts" },
								{ label: "Marketplaces", link: "/tools/nfts/marketplaces" },
								{ label: "NFT API", link: "/tools/nfts/nft-api" },
								{ label: "NFT Mint", link: "/tools/nfts/nft-minting" },
							
							]
						},
						{
							label: "Gaming SDKs",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/gaming" },
								{ label: "Eidolon", link: "/tools/gaming/eidolon" },
								{ label: "Emergence", link: "/tools/gaming/emergence" },
								{ label: "Mirage", link: "/tools/gaming/mirage" },
								{ label: "Web3.unreal", link: "/tools/gaming/web3unreal" },
							]
						},
						{
							label: "Bridges",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/bridges" },
								{ label: "SKALE Native Bridge", link: "/tools/bridges/skale-native-brige" },
								{ label: "Meson Finance", link: "/tools/bridges/meson-fi" },
								{ label: "Layer Zero", link: "/tools/bridges/layer-zero" },
							]
						},
						{
							label: "Contracts",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/contracts" },
								{ label: "Hardhat", link: "/tools/contracts/hardhat" },
								{ label: "Multicall", link: "/tools/contracts/multicall" },
							]
						},
						{
							label: "Data",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/data" },
								{ label: "Dune", link: "/tools/data/dune" },
								{ label: "Subsquid", link: "/tools/data/subsquid" },
								{ label: "The Graph", link: "/tools/data/the-graph" },
							]
						},
						{
							label: "Oracles",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/oracles" },
								{ label: "SKALE Connect", link: "/tools/oracles/skale-connect" },
								{ label: "Razor", link: "/tools/oracles/razor" },
							]
						},
						{
							label: "Payments",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/payments" },
								{ label: "On-Ramp", link: "/tools/payments/on-ramp" },
								{ label: "NFT Checkout", link: "/tools/payments/nft-checkout" },
							
							]
						},
						{
							label: "SKALE",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/skale" },
								{ label: "sFUEL Station", link: "/tools/skale/sfuel-station" },
								{
									label: "sFUEL Distribution",
									items: [
										{ label: "Overview", link: "/tools/skale/sfuel-distribution" },
										{ label: "API Distribution", link: "/tools/skale/sfuel-distribution/api-distribution" },
										{ label: "POW Distribution", link: "/tools/skale/sfuel-distribution/pow-distribution" },
										{ label: "Contract Distribution", link: "/tools/skale/sfuel-distribution/contract-distribution"}
									]
								},
								{ label: "Blockscout", link: "/tools/skale/blockscout" },
								{ label: "SKALE Nodes", link: "/tools/skale/skale-nodes" },
								{ label: "SKALE Proxy", link: "/tools/skale/skale-proxy" },
								{ label: "Full Sync Node", link: "/tools/skale/full-sync-node" },
								{ label: "Archive Node", link: "/tools/skale/archive-node" },
							]
						}

					]
				},
			],
		}),
	],
});
