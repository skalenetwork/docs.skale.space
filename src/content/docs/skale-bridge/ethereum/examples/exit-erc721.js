import { Contract, JsonRpcProvider, Wallet, parseEther } from "ethers"; // npm add ethers

const PRIVATE_KEY = "[YOUR_PRIVATE_KEY]";
const SKALE_RPC_URL = "[YOUR_SKALE_RPC_URL]";
const ERC721_ADDRESS = "[YOUR_TOKEN_ADDRESS]";
const ERC721_ABI = [ "function approve(address spender, uint256 amount) external" ];
const TOKEN_MANAGER_ERC721_ADDRESS = "0xD2aaa00600000000000000000000000000000000"; // DO NOT CHANGE THIS
const TOKEN_MANAGER_ERC721_ABI = [ "function exitToMainERC721(address contractOnMainnet, uint256 tokenId) external" ];
const TOKEN_ID = BigInt(1); // Token Id #1

// Setup the RPC Provider to connect to Ethereum
const provider = new JsonRpcProvider(SKALE_RPC_URL);

// Setup the wallet with your private key and default to the Ethereum provider
const wallet = new Wallet(PRIVATE_KEY, provider);

// Setup the smart contracts which default to being signed by your wallet and connected on Ethereum
const tokenManagerERC721Contract = new Contract(TOKEN_MANAGER_ERC721_ADDRESS, TOKEN_MANAGER_ERC721_ABI, wallet);
const erc721TokenContract = new Contract(ERC721_ADDRESS, ERC721_ABI, wallet);

// 1. Approve the bridge to move ERC-721 on your behalf
const approvalTx = await erc721TokenContract.approve(TOKEN_MANAGER_ERC721_ADDRESS, TOKEN_ID);
await approvalTx.wait(1); // Wait 1 blocks for confirmation, ~1 seconds

// 2. Transfer ERC-721 Token into bridge, will recieve on the same address on Ethereum
const exitTx = await tokenManagerERC721Contract.exitToMainERC721(ERC721_ADDRESS, TOKEN_ID);
await exitTx.wait(1);

// Success! Now watch for delivery on Ethereum
console.log("Success!");