export type ChainKey = "calypso" | "europa" | "nebula" | "titan";

export type ChainInfo = {
	chainId: number;
	rpcUrl: string;
	explorerUrl: string;
	contracts: {
		address: string;
		contractName: string;
		contractType: "erc20" | "erc721" | "erc1155";
		decimals?: number;
	}[]
}

export type Chain = {
	name: string;
	description: string;
	logoUrl: string;
	color: string;
	background: string;
    gradientBackground: string;
    chainInfo?: {
    	mainnet?: ChainInfo;
    	testnet: ChainInfo;
    }
};

const chains = {
	"calypso": {
		"name": "Calypso Hub",
		"description": "An Innovation Hub focused on projects looking to use blockchain in new and unique ways",
		"logoUrl": "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/honorable-steel-rasalhague.png",
		"color": "#FFF",
		"background": "#ce126f",
    	"gradientBackground": "linear-gradient(270deg, rgb(103 35 71), rgb(57 15 68))",
    	"chainInfo": {
    		"mainnet": {
    			"rpcUrl": "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague",
				"explorerUrl": "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com",
    			"chainId": 1564830818,
    			"contracts": []
    		},
    		"testnet": {
    			"rpcUrl": "https://testnet.skalenodes.com/v1/giant-half-dual-testnet",
				"explorerUrl": "https://giant-half-dual-testnet.explorer.testnet.skalenodes.com",
    			"chainId": 974399131,
    			"contracts": [
    				{
    					address: "0x2aebcdc4f9f9149a50422fff86198cb0939ea165",
    					contractName: "USDC",
    					contractType: "erc20",
    					decimals: 6
    				}
    			]
    		}
    	}
	},
	"europa": {
		"name": "Europa DeFi & Liquidity Hub",
		"description": "The Liquidity Hub acts as both a utility to the SKALE Ecosystem and the home of DeFi on SKALE",
		"logoUrl": "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/elated-tan-skat.png",
		"color": "#FFF",
		"background": "rgb(5 19 37)",
    	"gradientBackground": "linear-gradient(270deg, rgb(5, 19, 37), rgb(13 36 65))",
    	"chainInfo": {
    		"mainnet": {
    			"rpcUrl": "https://mainnet.skalenodes.com/v1/elated-tan-skat",
				"explorerUrl": "https://elated-tan-skat.explorer.mainnet.skalenodes.com",
    			"chainId": 2046399126,
    			"contracts": []
    		},
    		"testnet": {
				"rpcUrl": "https://testnet.skalenodes.com/v1/juicy-low-small-testnet",
				"explorerUrl": "https://juicy-low-small-testnet.explorer.testnet.skalenodes.com",
    			"chainId": 1444673419,
    			"contracts": [
	    			{
	    				address: "0xD2Aaa00700000000000000000000000000000000",
	    				contractName: "ETH",
	    				contractType: "erc20",
	    				decimals: 18
	    			},
    				{
    					address: "0x7aE734db73c57F3D16f5F141BAf6CfABD9E693bf",
    					contractName: "DAI",
    					contractType: "erc20",
    					decimals: 18
    				},
    				{
    					address: "0xbEE0FB0C095405A17c079Cd5C3cc89525e5A9a8C",
    					contractName: "USDP",
    					contractType: "erc20",
    					decimals: 18
    				},
    				{
    					address: "0x6CE77Fc7970F6984eF3E8748A3826972Ec409Fb9",
    					contractName: "USDC",
    					contractType: "erc20",
    					decimals: 6
    				}
    			]
    		},
    	}
	},
	"nebula": {
		"name": "Nebula Gaming Hub",
		"description": "A hub focused 100% on gaming, Nebula is the home of gaming on the SKALE Network",
		"logoUrl": "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/green-giddy-denebola.png",
		"color": "#FFF",
		"background": "#2c1626",
    	"gradientBackground": "linear-gradient(270deg, #2f1728, #1b0e17)",
    	"chainInfo": {
    		"mainnet": {
    			"rpcUrl": "https://mainnet.skalenodes.com/v1/green-giddy-denebola",
				"explorerUrl": "https://green-giddy-denebola.explorer.mainnet.skalenodes.com",
    			"chainId": 1482601649,
    			"contracts": []
    		},
    		"testnet": {
				"rpcUrl": "https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet",
				"explorerUrl": "https://lanky-ill-funny-testnet.explorer.testnet.skalenodes.com",
    			"chainId": 37084624,
    			"contracts": [
    				{
    					address: "0x5eaf4e5a908ba87abf3de768cb0da517db45db48",
    					contractName: "USDC",
    					contractType: "erc20",
    					decimals: 6
    				}
    			]
    		},
    	}
	},
	"titan": {
		"name": "Titan AI Hub",
		"description": "The AI Hub on SKALE is a great starting place to explore the crossover between AI and blockchain",
		"logoUrl": "https://portal.skale.space/assets/parallel-stormy-spica-068cfa33.png",
		"color": "#FFF",
		"background": "#FFF",
    	"gradientBackground": "linear-gradient(270deg, rgb(72, 33, 17), rgb(34, 13, 5))",
    	"chainInfo": {
    		"mainnet": {
    			"rpcUrl": "https://mainnet.skalenodes.com/v1/parallel-stormy-spica",
				"explorerUrl": "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com",
    			"chainId": 1350216234,
    			"contracts": []
    		},
    		"testnet": {
				"rpcUrl": "https://testnet.skalenodes.com/v1/aware-fake-trim-testnet",
				"explorerUrl": "https://aware-fake-trim-testnet.explorer.testnet.skalenodes.com",
    			"chainId": 1020352220,
    			"contracts": [
	    			{
	    				address: "0x10a30e73ab2da5328fc09b06443dde3e656e82f4",
	    				contractName: "USDC",
	    				contractType: "erc20",
	    				decimals: 6
	    			}
    			]
    		},
    	}
	},
} satisfies {[key: string]: Chain};

const chainList = Object.entries(chains);

export {
	chains,
	chainList
}
