export type SKALEChains = "Calypso" | "Europa" | "Nebula" | "Titan" | "Playa";

export type WalletTypes = "Wallet Aggregator" | "MPC Wallet" | "Account Abstraction" | "Non-Custodial Wallet" | "Custodial Wallet";
export type DataToolTypes = "Data Indexer" | "Data Analytics";
export type BridgeTtpes = "Bridge";
export type NFTToolsypes = "NFT Marketplace" | "NFT Minter" | "NFT API";
export type PaymentTypes = "On-Ramp" | "NFT Checkout";
export type RandomTypes = "RNG"

export type ToolsCategories = WalletTypes | DataToolTypes | BridgeTtpes | NFTToolsypes | PaymentTypes | RandomTypes;

export type Tool = {
	title: string;
	description: string;
	image: string;
    chains: SKALEChains [];
    category: ToolsCategories [];
    docPath: string;
};
export type GroupedTools = {
    Wallets?: Tool[],
    Bridges?: Tool[],
    Data?: Tool[],
    NFTs?: Tool[],
    Payments?: Tool[],
    Randomness?: Tool[]
}

const tools = {
    "Wallets":[
        {
            "title": "Privy",
            "description": "This is a discription test for the tool.",
            "image": "/privy.jpeg",
            "chains": ["Calypso", "Europa", "Nebula", "Titan"],
            "category": ["Wallet Aggregator", "MPC Wallet"],
            "docPath": "/builders/tools/wallets/privy"
        },
        {
            "title": "Moon",
            "description": "This is a discription test for the tool.",
            "image": "/moon.png",
            "chains": ["Calypso", "Europa", "Nebula", "Titan"],
            "category": ["MPC Wallet"],
            "docPath": "/builders/tools/mpc/moon"
        },
        {
            "title": "Rainbow Kit",
            "description": "This is a discription test for the tool.",
            "image": "/rainbow.png",
            "chains": ["Calypso", "Europa", "Nebula", "Titan"],
            "category": ["Wallet Aggregator"],
            "docPath": "/builders/tools/aggregator/rainbowkit"
        },
        {
            "title": "Thirdweb",
            "description": "This is a discription test for the tool.",
            "image": "/3web.png",
            "chains": ["Calypso", "Europa", "Nebula", "Titan"],
            "category": ["Wallet Aggregator","Account Abstraction" ],
            "docPath": "/builders/tools/mpc/thirdweb"
        }
    ],
    "Bridges": [
        {
            "title": "Layer Zero",
            "description": "This is a discription test for the tool.",
            "image": "/lz.png",
            "chains": ["Europa"],
            "category": ["Bridge"],
            "docPath": "/builders/tools/bridges/layer-zero"
        },
        {
            "title": "Meson Fi",
            "description": "This is a discription test for the tool.",
            "image": "/mesonfi.png",
            "chains": ["Nebula", "Europa","Calypso"],
            "category": ["Bridge" ],
            "docPath": "/builders/tools/bridges/meson-fi"
        },
    ],
    "Payments":[
        {
            "title": "Transak",
            "description": "This is a discription test for the tool.",
            "image": "/transak.png",
            "chains": ["Europa"],
            "category": ["On-Ramp"],
            "docPath": "/builders/tools/payments/transak"
        }, 
        {
            "title": "Crossmint",
            "description": "This is a discription test for the tool.",
            "image": "/crossmint.png",
            "chains": ["Nebula"],
            "category": ["NFT Checkout"],
            "docPath": "/builders/tools/payments/crossmint"
        }, 
    ],
    "Randomness": [
        {
            "title": "SKALE RNG",
            "description": "This is a discription test for the tool.",
            "image": "/skale-logo.png",
            "chains": ["Nebula", "Europa","Calypso"],
            "category": ["RNG"],
            "docPath": "/builders/tools/rng/skale-rng"
        },
    ]
    
}satisfies GroupedTools;

const toolsList = Object.entries(tools);

export {
	tools,
	toolsList
}
