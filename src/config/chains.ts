type ChainKey = "none" | "calypso" | "europa" | "nebula" | "titan" | "appChain";

type Chain = {
	name: string;
	description: string;
	logoUrl: string;
	color: string;
	background: string;
    gradientBackground: string;
};

const chains = {
	"calypso": {
		"name": "Calypso Innovation Hub",
		"description": "An Innovation Hub focused on projects looking to use blockchain in new and unique ways",
		"logoUrl": "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/honorable-steel-rasalhague.png",
		"color": "#FFF",
		"background": "#ce126f",
    	"gradientBackground": "linear-gradient(270deg, rgb(103 35 71), rgb(57 15 68))",
	},
	"europa": {
		"name": "Europa DeFi & Liquidity Hub",
		"description": "The Liquidity Hub acts as both a utility to the SKALE Ecosystem and the home of DeFi on SKALE",
		"logoUrl": "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/elated-tan-skat.png",
		"color": "#FFF",
		"background": "rgb(5 19 37)",
    	"gradientBackground": "linear-gradient(270deg, rgb(5, 19, 37), rgb(13 36 65))",
	},
	"nebula": {
		"name": "Nebula Gaming Hub",
		"description": "A hub focused 100% on gaming, Nebula is the home of gaming on the SKALE Network",
		"logoUrl": "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/green-giddy-denebola.png",
		"color": "#FFF",
		"background": "#2c1626",
    	"gradientBackground": "linear-gradient(270deg, #2f1728, #1b0e17)",
	},
	"titan": {
		"name": "Titan AI Hub",
		"description": "The AI Hub on SKALE is a great starting place to explore the crossover between AI and blockchain",
		"logoUrl": "https://portal.skale.space/assets/parallel-stormy-spica-068cfa33.png",
		"color": "#FFF",
		"background": "#FFF",
    	"gradientBackground": "linear-gradient(270deg, rgb(72, 33, 17), rgb(34, 13, 5))",
	},
	"appChain": {
		"name": "Dedicated AppChain",
		"description": "AppChains are perfect for enterprises looking to have their own public blockchain and for high throughput applications",
		"logoUrl": "/",
		"color": "#000",
		"background": "#FFF",
		"gradientBackground": "linear-gradient(270deg, #d3d3d3, #c0c0c0)"
	},
	"chaos": {
		"name": "Chaos Testnet",
		"description": "Still not sure? Checkout Chaos Testnet to start. (Hint: You can always switch later!)",
		"logoUrl": "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/staging/logos/staging-fast-active-bellatrix.png",
		"color": "#FFF",
		"background": "#FFF",
		"gradientBackground": "linear-gradient(227deg, rgb(65, 159, 91), rgb(26, 81, 40))"
	},
} satisfies {[key: ChainKey]: Chain};

const chainList = Object.entries(chains);

export {
	chains,
	chainList
}