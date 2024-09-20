import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [
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
			expressiveCode: true,
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
					label: "Builders",
					items: [
						{ label: "Overview", link: "/builders" },
						{
							label: "App Developers",
							items: [
								{ label: "Overview", link: "/builders/app-developers/overview" },
								{
									label: "sFUEL Distribution",
									items: [
										{ label: "Overview", link: "/builders/app-developers/sfuel-distribution" },
										{ label: "API Distribution", link: "/builders/app-developers/sfuel-distribution/api-distribution" },
										{ label: "POW Distribution", link: "/builders/app-developers/sfuel-distribution/pow-distribution" },
										{ label: "Contract Distribution", link: "/builders/app-developers/sfuel-distribution/contract-distribution" }
									]
								},
							]
						},
						{
							label: "Chain Operators",
							items: [
								{ label: "Overview", link: "/builders/chain-operators/overview" },
								{ label: "Architecture", link: "/builders/chain-operators/architecture" },
								{ label: "Access Control", link: "/builders/chain-operators/access-control" },
								// TODO
								// { label: "Best Practices", link: "/builders/chain-operators/best-practices" },
								{ label: "Administrative Contracts", link: "/builders/chain-operators/administrative-contracts" },
								// TODO
								// { label: "Manage Multisig", link: "/builders/chain-operators/multisig" },
								{ label: "SKALE Chain Wallet", link: "/builders/chain-operators/skale-chain-wallet" },
								{
									label: "Submit Chain Metadata",
									link: "/builders/chain-operators/submit-metadata",
									badge: {
										text: "Guide",
										variant: "note"
									}
								},
							]

						},
						{
							label: "Node Operators",
							items: [
								{ label: "Overview", link: "/builders/node-operators/overview" },
								{ label: "SKALE Nodes", link: "/builders/node-operators/skale-nodes" },
								{ label: "SKALE Proxy", link: "/builders/node-operators/skale-proxy" },
								{ label: "Full Sync Node", link: "/builders/node-operators/full-sync-node" },
								{ label: "Archive Node", link: "/builders/node-operators/archive-node" },
							]
						},
						{
							label: "Tools",
							items: [
								{ label: "Overview", link: "/builders/tools" },
								{
									label: "Bridges",
									items: [
										{ label: "Overview", link: "/builders/tools/bridges" },
										{ label: "SKALE Native Bridge", link: "/builders/tools/bridges/skale-native-bridge" },
										{ label: "Meson Finance", link: "/builders/tools/bridges/meson-fi" },
										{ label: "LayerZero", link: "/builders/tools/bridges/layer-zero" },
									]
								},
								{
									label: "Contracts",
									items: [
										{ label: "Overview", link: "/builders/tools/contracts" },
										{ label: "OpenZepplin", link: "/builders/tools/contracts/openzeppelin" },
										{ label: "Hardhat", link: "/builders/tools/contracts/hardhat" },
										{ label: "Remix", link: "/builders/tools/contracts/remix" },
										{ label: "Multicall", link: "/builders/tools/contracts/multicall" },
									]
								},
								{
									label: "Data",
									items: [
										{ label: "Overview", link: "builders/tools/data" },
										{ label: "Dune", link: "/builders/tools/data/dune" },
										{ label: "Subsquid", link: "/builders/tools/data/subsquid" },
										{ label: "The Graph", link: "/builders/tools/data/the-graph" },
									]
								},
								{
									label: "Gaming SDKs",
									items: [
										{ label: "Overview", link: "/builders/tools/gaming" },
										{ label: "Eidolon", link: "/builders/tools/gaming/eidolon" },
										{ label: "Emergence", link: "/builders/tools/gaming/emergence" },
										{ label: "Mirage", link: "/builders/tools/gaming/mirage" },
										{ label: "Web3.unreal", link: "/builders/tools/gaming/web3unreal" },
									]
								},
								{
									label: "Libraries",
									items: [
										{ label: "Overview", link: "/builders/tools/libraries" },
										{ label: "Web Libraries", link: "/builders/tools/libraries/web" },
										{ label: "Backend Libraries", link: "/builders/tools/libraries/backend" },
										{ label: "Unity Libraries", link: "/builders/tools/libraries/unity" },
										{ label: "Mobile Libraries", link: "/builders/tools/libraries/mobile" },
									]
								},
								{
									label: "NFTs",
									items: [
										{ label: "Overview", link: "/builders/tools/nfts" },
										{ label: "Marketplaces", link: "/builders/tools/nfts/marketplaces" },
										{ label: "NFT API", link: "/builders/tools/nfts/nft-api" },
										{ label: "NFT Mint", link: "/builders/tools/nfts/nft-minting" },

									]
								},
								{
									label: "Oracles",
									items: [
										{ label: "Overview", link: "/builders/tools/oracles" },
										{ label: "SKALE Connect", link: "/builders/tools/oracles/skale-connect" },
										{ label: "Razor", link: "/builders/tools/oracles/razor" },
									]
								},
								{
									label: "Payments",
									items: [
										{ label: "Overview", link: "/builders/tools/payments" },
										{ label: "On-Ramp", link: "/builders/tools/payments/on-ramp" },
										{ label: "NFT Checkout", link: "/builders/tools/payments/nft-checkout" },

									]
								},
								{
									label: "Wallets",
									items: [
										{ label: "Overview", link: "/builders/tools/wallets" },
										{ label: "Non-Custodial Wallets", link: "/builders/tools/wallets/non-custodial" },
										{ label: "Custodial Wallets", link: "/builders/tools/wallets/custodial" },
										{ label: "MPC Wallets", link: "/builders/tools/wallets/mpc" },
										{ label: "Wallets Aggregator", link: "/builders/tools/wallets/aggregator" },
									]
								},

								/*{
									label: "SKALE",
									collapsed: true,
									items: [
										{ label: "Overview", link: "/builders/tools/skale" },
										{ label: "Blockscout", link: "/builders/tools/skale/blockscout" },
										{ label: "SKALE Nodes", link: "/builders/tools/skale/skale-nodes" },
										{ label: "SKALE Proxy", link: "/builders/tools/skale/skale-proxy" },
										{ label: "Full Sync Node", link: "/builders/tools/skale/full-sync-node" },
										{ label: "Archive Node", link: "/builders/tools/skale/archive-node" },
									]
								}*/

							]
						},
						{
							label: "Integrating SKALE",
							link: "/builders/integration-guide",
							badge: {
								text: "Guide",
								variant: "note"
							}
						},

					]
				},
				{
					label: "Ecosystem",
					items: [
						{ label: "Overview", link: "/ecosystem" },
						{
							label: "Delegators",
							items: [
								{ label: "Overview", link: "/ecosystem/delegators/overview" }
							]
						},
						{
							label: "Governance",
							items: [
								{ label: "Overview", link: "/ecosystem/governance/overview" }
							]
						},
						{
							label: "Validators",
							items: [
								{ label: "Overview", link: "/ecosystem/validators/overview" },
								{ label: "Swap Limit Fix", link: "/ecosystem/validators/swap-limit-fix" },
                                { label: 'Releases', items: [ { label: "3.0.2 Upgrade", link: "/ecosystem/validators/releases/3-0-2-upgrade" } ] }
							]
						}
					]
				},
				{
					label: "Learn",
					items: [
						{ label: "About SKALE Network", link: "/learn/about-skale-network" },
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
						{ label: "FAQ", link: "/learn/faq" },
					]
				},
				{
					label: "Quick Start",
					autogenerate: { directory: "quick-start" }
				}
			],
		}),
	],
});
