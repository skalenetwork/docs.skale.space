export type ChainKey = "calypso" | "europa" | "nebula" | "titan";

export type ChainInfo = {
	chainId: number;
	rpcUrl: string;
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
		"name": "Calypso Innovation Hub",
		"description": "An Innovation Hub focused on projects looking to use blockchain in new and unique ways",
		"logoUrl": "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/honorable-steel-rasalhague.png",
		"color": "#FFF",
		"background": "#ce126f",
    	"gradientBackground": "linear-gradient(270deg, rgb(103 35 71), rgb(57 15 68))",
    	"chainInfo": {
    		"mainnet": {
    			"rpcUrl": "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague",
    			"chainId": 1564830818,
    			"contracts": []
    		},
    		"testnet": {
    			"rpcUrl": "https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar",
    			"chainId": 344106930,
    			"contracts": [
    				{
    					address: "0x7E1B8750C21AebC3bb2a0bDf40be104C609a9852",
    					contractName: "SKL",
    					contractType: "erc20",
    					decimals: 18
    				},
    				{
    					address: "0x49c37d0Bb6238933eEe2157e9Df417fd62723fF6",
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
    			"chainId": 2046399126,
    			"contracts": []
    		},
    		"testnet": {
    			"rpcUrl": "https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor",
    			"chainId": 476158412,
    			"contracts": [
	    			{
	    				address: "0xD2Aaa00700000000000000000000000000000000",
	    				contractName: "ETH",
	    				contractType: "erc20",
	    				decimals: 18
	    			},
					{
    					address: "0xbA1E9BA7CDd4815Da6a51586bE56e8643d1bEAb6",
    					contractName: "SKL",
    					contractType: "erc20",
    					decimals: 18
    				},
    				{
    					address: "0xf06De9214B1Db39fFE9db2AebFA74E52f1e46e39",
    					contractName: "Ruby",
    					contractType: "erc20",
    					decimals: 18
    				},
    				{
    					address: "0x3595E2f313780cb2f23e197B8e297066fd410d30",
    					contractName: "DAI",
    					contractType: "erc20",
    					decimals: 18
    				},
    				{
    					address: "0xe0E2cb3A5d6f94a5bc2D00FAa3e64460A9D241E1",
    					contractName: "USDP",
    					contractType: "erc20",
    					decimals: 18
    				},
    				{
    					address: "0xa388F9783d8E5B0502548061c3b06bf4300Fc0E1",
    					contractName: "USDT",
    					contractType: "erc20",
    					decimals: 6
    				},
    				{
    					address: "0x5d42495D417fcd9ECf42F3EA8a55FcEf44eD9B33",
    					contractName: "USDC",
    					contractType: "erc20",
    					decimals: 6
    				},
    				{
    					address: "0xf5E880E1066DDc90471B9BAE6f183D5344fd289F",
    					contractName: "WBTC",
    					contractType: "erc20",
    					decimals: 8
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
    			"chainId": 1482601649,
    			"contracts": []
    		},
    		"testnet": {
    			"rpcUrl": "https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird",
    			"chainId": 503129905,
    			"contracts": [
    				{
    					address: "0x7F73B66d4e6e67bCdeaF277b9962addcDabBFC4d",
    					contractName: "SKL",
    					contractType: "erc20",
    					decimals: 18
    				},
    				{
    					address: "0x717d43399ab3a8aada669CDC9560a6BAfdeA9796",
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
    			"chainId": 1350216234,
    			"contracts": []
    		},
    		"testnet": {
    			"rpcUrl": "https://staging-v3.skalenodes.com/v1/staging-aware-gianfar",
    			"chainId": 1517929550,
    			"contracts": []
    		},
    	}
	},
} satisfies {[key: string]: Chain};

const chainList = Object.entries(chains);

export {
	chains,
	chainList
}
