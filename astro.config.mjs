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
						{ label: "Explore", link: "/tools/explore" },
						{
							label: "Bridges",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/bridges" },
								{ label: "SKALE IMA", link: "/tools/bridges/skale-ima" },
								{ label: "Meson.fi", link: "/tools/bridges/meson-fi" },
							]
						},
						{
							label: "Contracts",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/contracts" },
								{ label: "Using Hardhat", link: "/tools/contracts/hardhat" },
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
							label: "Gaming SDKs",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/gaming" },
								{ label: "Eidolon", link: "/tools/gaming/eidolon" },
								{ label: "Emergence", link: "/tools/gaming/emergence" },
								{ label: "Mirage", link: "/tools/gaming/mirage" },
								{ label: "Web3.unity", link: "/tools/gaming/web3unity" },
								{ label: "Web3.unreal", link: "/tools/gaming/web3unreal" },
							]
						},
						{
							label: "Libraries",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/libraries" },
								{ label: "Web3j", link: "/tools/libraries/web3j" },
								{ label: "EthersV5", link: "/tools/libraries/ethersv5" },
								{ label: "EthersV6", link: "/tools/libraries/ethersv6" },
								{ label: "IMA.js", link: "/tools/libraries/imajs" },
								{ label: "JSON-RPC Calls", link: "/tools/libraries/json-rpc-calls" },
								{ label: "Kethereum", link: "/tools/libraries/kethereum" },
								{ label: "Nethereum", link: "/tools/libraries/nethereum" },
								{ label: "SKALE.js", link: "/tools/libraries/skalejs" },
								//{ label: "Thirdweb", link: "/tools/libraries/thirdweb" },
								{ label: "Viem", link: "/tools/libraries/viem" },
								{ label: "Web3dart", link: "/tools/libraries/web3dart" },
								{ label: "Web3js", link: "/tools/libraries/web3js" },
								{ label: "Web3swift", link: "/tools/libraries/web3swift" },
								{ label: "Metaport", link: "/tools/libraries/metaport" },
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
							label: "SKALE",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/skale" },
								{ label: "sFUEL Station", link: "/tools/skale/sfuel-station" },
								{ label: "Blockscout", link: "/tools/skale/blockscout" },
								{ label: "SKALE Nodes", link: "/tools/skale/skale-nodes" },
								{ label: "SKALE Proxy", link: "/tools/skale/skale-proxy" },
								{ label: "Full Sync Node", link: "/tools/skale/full-sync-node" },
								{ label: "Archive Node", link: "/tools/skale/archive-node" },
							]
						},
						{
							label: "Wallets",
							collapsed: true,
							items: [
								{ label: "Overview", link: "/tools/wallets" },
								{ label: "Bitski", link: "/tools/wallets/bitski" },
								{ label: "Metamask", link: "/tools/wallets/metamask" },
								{ label: "Coinbase", link: "/tools/wallets/coinbase" },
								{ label: "Enkrypt", link: "/tools/wallets/enkrypt" },
								{ label: "Invisible Signer", link: "/tools/wallets/invible-signer" },
								{ label: "Ledger", link: "/tools/wallets/ledger" },
								{ label: "Trezor", link: "/tools/wallets/trezor" },
								{ label: "Magic", link: "/tools/wallets/magic" },
								{ label: "Moon", link: "/tools/wallets/moon" },
								{ label: "Portis", link: "/tools/wallets/portis" },
								{ label: "Stardust", link: "/tools/wallets/stardust" },
								{ label: "Thirdweb", link: "/tools/wallets/thirdweb" },
								{ label: "Wallet Connect", link: "/tools/wallets/wallet-connect" },
								{ label: "Web3Auth", link: "/tools/wallets/web3auth" },
							]
						}

					]
				},
			],
		}),
	],
});
