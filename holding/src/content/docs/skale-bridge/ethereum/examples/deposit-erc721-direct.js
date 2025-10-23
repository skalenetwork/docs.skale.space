import { Contract, JsonRpcProvider, Wallet } from "ethers"; // npm add ethers

const PRIVATE_KEY = "[YOUR_PRIVATE_KEY]";
const ETHEREUM_RPC_URL = "[YOUR_ETHEREUM_RPC_URL]";
const ERC721_ADDRESS = "[YOUR_TOKEN_ADDRESS]";
const ERC721_ABI = [ "function approve(address to, uint256 tokenId) external" ];
const DEPOSIT_BOX_ERC721_ADDRESS = "[DEPOSIT_BOX_ERC20_ADDRESS]";
const DEPOSIT_BOX_ERC721_ABI = [ "function depositERC721Direct(string calldata schainName, address erc721OnMainnet, uint256 tokenId, address receiver) external" ];
const SKALE_CHAIN_NAME = "[SKALE_CHAIN_NAME]"; // e.g elated-tan-skat (europa mainnnet);
const TOKEN_ID = BigInt(1); // TokenId to bridge
const CUSTOM_RECEIVER = "[CUSTOM_RECEIVER_WALLET_ADDRESS]";

// Setup the RPC Provider to connect to Ethereum
const provider = new JsonRpcProvider(ETHEREUM_RPC_URL);

// Setup the wallet with your private key and default to the Ethereum provider
const wallet = new Wallet(PRIVATE_KEY, provider);

// Setup the smart contracts which default to being signed by your wallet and connected on Ethereum
const depositBoxContract = new Contract(DEPOSIT_BOX_ERC721_ADDRESS, DEPOSIT_BOX_ERC721_ABI, wallet);
const erc721TokenContract = new Contract(ERC721_ADDRESS, ERC721_ABI, wallet);

// 1. Approve the bridge to move ERC-721 Token Id #1
const approvalTx = await erc721TokenContract.approve(DEPOSIT_BOX_ERC721_ADDRESS, TOKEN_ID);
await approvalTx.wait(1); // Wait 1 blocks for confirmation, ~15 seconds

// 2. Deposit ERC-721 Token Id #1 into bridge, will receive on custom address on SKALE
const depositTx = await depositBoxContract.depositERC721Direct(SKALE_CHAIN_NAME, ERC721_ADDRESS, TOKEN_ID, CUSTOM_RECEIVER);
await depositTx.wait(1);

// Success! Now watch for delivery on SKALE Chain
console.log("Success!");