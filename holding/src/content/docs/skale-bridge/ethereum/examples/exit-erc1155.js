import { Contract, JsonRpcProvider, Wallet, parseEther } from "ethers"; // npm add ethers

const PRIVATE_KEY = "[YOUR_PRIVATE_KEY]";
const SKALE_RPC_URL = "[YOUR_SKALE_RPC_URL]";
const ERC1155_ADDRESS = "[YOUR_TOKEN_ADDRESS]";
const ERC1155_ABI = [ "function setApprovalForAll(address operator, bool approved) external" ];
const TOKEN_MANAGER_ERC1155_ADDRESS = "0xD2aaA00900000000000000000000000000000000"; // DO NOT CHANGE THIS
const TOKEN_MANAGER_ERC1155_ABI = [ "function exitToMainERC1155(address contractOnMainnet, uint256 id, uint256 amount) external" ];
const TOKEN_ID = BigInt(1); // Token Id #1
const AMOUNT = parseEther("2"); // 2 in wei form

// Setup the RPC Provider to connect to Ethereum
const provider = new JsonRpcProvider(SKALE_RPC_URL);

// Setup the wallet with your private key and default to the Ethereum provider
const wallet = new Wallet(PRIVATE_KEY, provider);

// Setup the smart contracts which default to being signed by your wallet and connected on Ethereum
const tokenManagerERC1155Contract = new Contract(TOKEN_MANAGER_ERC1155_ADDRESS, TOKEN_MANAGER_ERC1155_ABI, wallet);
const erc1155TokenContract = new Contract(ERC1155_ADDRESS, ERC1155_ABI, wallet);

// 1. Approve the bridge to move ERC-1155 on your behalf
const approvalTx = await erc1155TokenContract.setApprovalForAll(TOKEN_MANAGER_ERC1155_ADDRESS, true);
await approvalTx.wait(1); // Wait 1 blocks for confirmation, ~1 seconds

// 2. Transfer ERC-1155 Token into bridge, will recieve on the same address on Ethereum
const exitTx = await tokenManagerERC1155Contract.exitToMainERC1155(ERC1155_ADDRESS, TOKEN_ID, AMOUNT);
await exitTx.wait(1);

// Success! Now watch for delivery on Ethereum
console.log("Success!");