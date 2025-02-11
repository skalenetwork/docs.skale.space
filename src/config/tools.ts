export type SKALEChains = "Calypso" | "Europa" | "Nebula" | "Titan" | "Playa";

export type WalletTypes =
	| "Wallet Aggregator"
	| "MPC Wallet"
	| "Account Abstraction"
	| "Non-Custodial Wallet"
	| "Embedded Wallet"
	| "Custodial Wallet"
	| "Hardware Wallet";
export type DataToolTypes =
	| "Data Indexer"
	| "Network Data Analytics"
	| "Hosting Service"
	| "Self Hosting Service";


export type BridgeTtpes = "Bridge";
export type OracleTtpes = "Oracle";

export type NFTToolsypes = "NFT Marketplace" | "NFT Minter" | "NFT API" | "Whitelabel NFT Marketplace";
export type PaymentTypes = "On-Ramp" | "NFT Checkout";
export type RandomTypes = "RNG";
export type NotApplicable = "Not Applicable";
export type GamingSDKType = "Unity SDK" | "Unreal SDK" | "Web SDK" | "Multiple SDK";
export type ContractType = "Contract Development IDE" | "Contracts Library" | "Contract Functionality" | "Contract Generator";
export type LibraryType = 
    |"Web Library" 
    | "Unity Library" 
    | "Unreal Library" 
    | "Backend Library" 
    | "Mobile Library" 
    | "Javascript"
    | "Typescript"
    | "Dart"
    | "Csharp"
    | "Java"
    | "Kotlin"
    | "RPC Request"

export type ToolsCategories =
	| WalletTypes
	| DataToolTypes
	| BridgeTtpes
	| NFTToolsypes
	| PaymentTypes
	| RandomTypes
	| GamingSDKType
    | ContractType
    | LibraryType
    | OracleTtpes;

export type Tool = {
	title: string;
	description: string;
	image: string;
	chains: SKALEChains[];
	category: ToolsCategories[];
	docPath: string;
};
export type GroupedTools = {
	Wallets?: Tool[];
	Bridges?: Tool[];
	Data?: Tool[];
	NFTs?: Tool[];
	Payments?: Tool[];
	Randomness?: Tool[];
	Contracts?: Tool[];
	Gaming?: Tool[];
	Libraries?: Tool[];
	Oracles?: Tool[];
    "All In One"?: Tool[];
};

const tools = {
	Wallets: [
		{
			title: "Coinbase",
			description: "Secure, user-friendly non-custodial wallet for managing crypto across multiple chains",
			image: "coinbase",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Non-Custodial Wallet"],
			docPath: "/builders/tools/wallets/coinbase",
		},
		{
			title: "Connect Kit",
			description: "Wallet aggregator designed to streamline connections between various crypto wallets",
			image: "connectkit",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Wallet Aggregator"],
			docPath: "/builders/tools/wallets/connectkit",
		},
		{
			title: "Dynamic",
			description: "Versatile wallet aggregator and embedded wallet solution",
			image: "dynamic",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Wallet Aggregator", "Embedded Wallet"],
			docPath: "/builders/tools/wallets/dynamic-xyz",
		},
		{
			title: "Enkrypt",
			description: "Non-custodial wallet supporting multiple blockchain ecosystems",
			image: "enkrypt",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Non-Custodial Wallet"],
			docPath: "/builders/tools/wallets/enkrypt",
		},
		{
			title: "Invible Signer",
			description: "SKALE native solution using custodial wallets to provide 100% frictionless solution to users",
			image: "skale",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Custodial Wallet"],
			docPath: "/builders/tools/wallets/invisible-signer",
		},
		{
			title: "Ledger",
			description: "Leading hardware wallet offering top-tier security for crypto assets",
			image: "ledger",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Hardware Wallet"],
			docPath: "/builders/tools/wallets/ledger",
		},
		{
			title: "Magic",
			description: "Seamless embedded wallet solution, focusing on easy integration and user experience",
			image: "magic",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Embedded Wallet"],
			docPath: "/builders/tools/wallets/magic",
		},
		{
			title: "Metakeep",
			description: "MPC wallet service that offers smooth integration and reliable security for decentralized applications",
			image: "metakeep",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["MPC Wallet"],
			docPath: "/builders/tools/wallets/metakeep",
		},
		{
			title: "Metamask",
			description: " Popular non-custodial wallet with browser extension and mobile app for secure crypto management",
			image: "metamask",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Non-Custodial Wallet"],
			docPath: "/builders/tools/wallets/metamask",
		},
		{
			title: "Moon",
			description: "MPC wallet delivering enhanced security and privacy for crypto asset management",
			image: "/moon.png",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["MPC Wallet"],
			docPath: "/builders/tools/wallets/moon",
		},
		{
			title: "Portis",
			description: "Non-custodial wallet with a focus on ease of use",
			image: "portis",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Non-Custodial Wallet"],
			docPath: "/builders/tools/wallets/portis",
		},
		{
			title: "Privy",
			description: "Comprehensive wallet aggregator and embedded wallet solution aimed at enhancing privacy and user control",
			image: "privy",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Wallet Aggregator", "Embedded Wallet"],
			docPath: "/builders/tools/wallets/privy",
		},
		{
			title: "Rainbow Kit",
			description: "Intuitive wallet aggregator designed for easy integration with various crypto platforms",
			image: "rainbow",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Wallet Aggregator"],
			docPath: "/builders/tools/wallets/rainbowkit",
		},
		{
			title: "Trezor",
			description: "Trusted hardware wallet known for its robust security features and user-friendly interface",
			image: "trezor",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Non-Custodial Wallet"],
			docPath: "/builders/tools/wallets/trezor",
		},
		{
			title: "Wallet Connect",
			description: "Enables seamless connection to multiple wallets through a simple and secure interface",
			image: "walletconnect",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Wallet Aggregator"],
			docPath: "/builders/tools/wallets/wallet-connect",
		},
		{
			title: "Web3Auth",
			description: "Multi-party computation wallet with embedded features for simplified user onboarding and security",
			image: "web3auth",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Wallet Aggregator", "MPC Wallet", "Embedded Wallet"],
			docPath: "/builders/tools/wallets/web3auth",
		},
	],
	Contracts: [
		{
			title: "Hardhat",
			description: "Powerful contract development IDE for building, testing, and deploying smart contracts",
			image: "hardhat",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Contract Development IDE"],
			docPath: "/builders/tools/contracts/hardhat",
		},
		{
			title: "Multicall",
			description: "Efficiently aggregate multiple contract calls into a single on-chain transaction",
			image: "skale",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Contract Functionality"],
			docPath: "/builders/tools/contracts/multicall",
		},
		{
			title: "OpenZeppelin",
			description: "Robust library of secure, audited, reusable smart contract components with the industry standards",
			image: "openzepplin",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Contracts Library"],
			docPath: "/builders/tools/contracts/openzeppelin",
		},
		{
			title: "Remix",
			description: "Browser-based IDE for writing, deploying, and debugging smart contracts",
			image: "remix",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Contract Development IDE"],
			docPath: "/builders/tools/contracts/remix",
		},
	],
	Bridges: [
		{
			title: "Layer Zero",
			description: "Omnichain interoperability protocol facilitating seamless cross-chain communication",
			image: "layerzero",
			chains: ["Europa"],
			category: ["Bridge"],
			docPath: "/builders/tools/bridges/layer-zero",
		},
		{
			title: "Meson Fi",
			description: "Secure bridge enabling fast, low-cost transfers across multiple chains",
			image: "mesonfi",
			chains: ["Nebula", "Europa", "Calypso"],
			category: ["Bridge"],
			docPath: "/builders/tools/bridges/meson-fi",
		},
		{
			title: "SKALE Bridge",
			description: "Native bridge solution for seamless asset transfers on SKALE network and Ethereum",
			image: "skale",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Bridge"],
			docPath: "/builders/tools/bridges/skale-native-bridge",
		},
	],
	Data: [
		{
			title: "Dune",
			description: "Analytics platform providing customizable dashboards for blockchain data insights",
			image: "dune",
			chains: [],
			category: ["Network Data Analytics"],
			docPath: "/builders/tools/data/dune",
		},
		{
			title: "Goldsky",
			description: "Comprehensive data indexer and hosting service for blockchain analytics",
			image: "goldsky",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Data Indexer", "Hosting Service"],
			docPath: "/builders/tools/data/goldsky",
		},
		{
			title: "Subsquid",
			description: "Flexible data indexing framework with hosting services for blockchain applications",
			image: "subsquid",
			chains: ["Nebula"],
			category: ["Data Indexer", "Hosting Service"],
			docPath: "/builders/tools/data/subsquid",
		},
		{
			title: "The Graph",
			description: "Decentralized protocol for querying and indexing blockchain data",
			image: "thegraph",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Data Indexer", "Self Hosting Service"],
			docPath: "/builders/tools/data/the-graph",
		},
	],
	Gaming: [
		{
			title: "Eidolon",
			description: "Unity SDK tailored for blockchain-based game development on SKALE Network",
			image: "eidolon",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Unity SDK"],
			docPath: "/builders/tools/gaming/eidolon",
		},
		{
			title: "Emergence",
			description: "Cross-platform SDK supporting Unity and Unreal Engine for Web3 game integration",
			image: "emergence",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Unity SDK", "Unreal SDK"],
			docPath: "/builders/tools/gaming/emergence",
		},
		{
			title: "Mirage",
			description: "SDK for seamless integration of blockchain functionalities in Unity and Unreal Engine",
			image: "mirage",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Unity SDK", "Unreal SDK"],
			docPath: "/builders/tools/gaming/mirage",
		},
		{
			title: "Web3 Unreal",
			description: "Specialized Unreal Engine SDK for blockchain game development",
			image: "web3unreal",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Unreal SDK"],
			docPath: "/builders/tools/gaming/web3unreal",
		},
	],
	Libraries: [
		{
			title: "Ethers v5",
			description: "Comprehensive JavaScript/TypeScript library for Ethereum development",
			image: "ethers",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Web Library", "Backend Library", "Javascript", "Typescript"],
			docPath: "/builders/tools/libraries/ethersv5",
		},
		{
			title: "Ethers v6",
			description: "Advanced version of Ethers with enhanced features for blockchain applications",
			image: "ethers",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Web Library", "Backend Library" ,"Javascript", "Typescript"],
			docPath: "/builders/tools/libraries/ethersv6",
		},
		{
			title: "JSON RPC Call",
			description: "Streamlined commands for making JSON RPC requests to blockchain nodes",
			image: "skale",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["RPC Request"],
			docPath: "/builders/tools/libraries/json-rpc-calls",
		},
		{
			title: "Kethereum",
			description: "Kotlin library designed for Ethereum blockchain development",
			image: "kethereum",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Backend Library", "Kotlin"],
			docPath: "/builders/tools/libraries/kethereum",
		},
		{
			title: "Nethereum",
			description: "C# library enabling Ethereum development within Unity and .NET applications",
			image: "nethereum",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Unity Library", "Csharp"],
			docPath: "/builders/tools/libraries/nethereum",
		},
		{
			title: "Viem",
			description: "Lightweight, fast JavaScript/TypeScript library for blockchain interactions",
			image: "viem",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Web Library", "Javascript", "Typescript"],
			docPath: "/builders/tools/libraries/viem",
		},
		{
			title: "Web3 Dart",
			description: "Dart library optimized for mobile blockchain applications",
			image: "web3dart",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Mobile Library", "Dart"],
			docPath: "/builders/tools/libraries/web3dart",
		},
		{
			title: "Web3j",
			description: "Java library for integrating blockchain functionalities into backend systems",
			image: "web3j",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Backend Library", "Java"],
			docPath: "/builders/tools/libraries/web3j",
		},
		{
			title: "Web3js",
			description: "Popular JavaScript/TypeScript library for Ethereum web development",
			image: "web3js",
			chains: ["Nebula", "Europa", "Calypso", "Titan"],
			category: ["Web Library", "Javascript", "Typescript"],
			docPath: "/builders/tools/libraries/web3js",
		},
	],
	NFTs: [
		{
			title: "Dripverse",
			description: "All-in-one NFT marketplace and minter for the Calypso chain",
			image: "dripverse",
			chains: ["Calypso"],
			category: ["NFT Marketplace", "NFT Minter"],
			docPath: "/builders/tools/nfts/dripverse",
		},
		{
			title: "Keepsake",
			description: "User-friendly NFT marketplace for Calypso and Nebula chains",
			image: "keepsake",
			chains: ["Calypso", "Nebula"],
			category: ["NFT Marketplace"],
			docPath: "/builders/tools/nfts/keepsake",
		},
		{
			title: "Pixel Ream",
			description: "Vibrant NFT marketplace catering to Nebula chain users",
			image: "pixelrealm",
			chains: ["Nebula"],
			category: ["NFT Marketplace"],
			docPath: "/builders/tools/nfts/pixelrealm",
		},
		{
			title: "Reservoir",
			description: "Comprehensive API for accessing NFT data and market analytics",
			image: "reservoir",
			chains: ["Nebula"],
			category: ["NFT API"],
			docPath: "/builders/tools/nfts/reservoir",
		},
		{
			title: "Snag",
			description: "Whitelabel NFT marketplace solution for easy deployment on Nebula",
			image: "snag",
			chains: ["Nebula"],
			category: ["Whitelabel NFT Marketplace"],
			docPath: "/builders/tools/nfts/snag",
		},
	],
	Oracles: [
		{
			title: "SKALE Connect",
			description: "Reliable oracle service providing real-world data to blockchain applications",
			image: "skale",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Oracle"],
			docPath: "/builders/tools/oracles/skale-connect",
		},
		{
			title: "Razor",
			description: "Decentralized oracle offering accurate, tamper-proof data for smart contracts",
			image: "razor",
			chains: [],
			category: ["Oracle"],
			docPath: "/builders/tools/oracles/razor",
		},
	],
	Payments: [
		{
			title: "Transak",
			description: "Easy-to-use on-ramp service for converting fiat to crypto on the Europa chain",
			image: "transak",
			chains: ["Europa"],
			category: ["On-Ramp"],
			docPath: "/builders/tools/payments/transak",
		},
	],
	Randomness: [
		{
			title: "SKALE RNG",
			description: "Random Number Generator present on every SKALE Chain and mathematical provable",
			image: "skale",
			chains: ["Nebula", "Europa", "Calypso"],
			category: ["RNG"],
			docPath: "/builders/tools/rng/skale-rng",
		},
	],
    "All In One": [
        {
            title: "Crossmint",
			description: "Crossmint is a versatile platform that provides tools like NFT checkout, NFT APIs, and custodial wallets.",
			image: "crossmint",
			chains: ["Nebula"],
			category: ["NFT Checkout", "NFT API", "Custodial Wallet"],
			docPath: "/builders/tools/all-in-one/crossmint",
        },
		{
            title: "Sequence",
			description: "Sequence offers an all-in-one platform with features like account abstraction, NFT APIs, contract generators, custom NFT marketplace and SDKs (ex: Unity, Web, etc).",
			image: "sequence",
			chains: ["Nebula"],
			category: ["Account Abstraction", "NFT API", "NFT Marketplace", "Contract Generator", "Multiple SDK"],
			docPath: "/builders/tools/all-in-one/sequence",
        },
		{
			title: "Thirdweb",
			description: "Thirdweb provides wallet aggregators, embedded wallets, and contract generators. It empowers developers with multiple SDKs (ex: Unity, Web, etc) for a seamless integration.",
			image: "thirdweb",
			chains: ["Calypso", "Europa", "Nebula", "Titan"],
			category: ["Wallet Aggregator", "Embedded Wallet", "Contract Generator", "Multiple SDK"],
			docPath: "/builders/tools/all-in-one/thirdweb",
		},
    ]
} satisfies GroupedTools;

const toolsList = Object.entries(tools);

export { tools, toolsList };
