import { Contract, JsonRpcProvider, Wallet } from "ethers"; // npm add ethers

const PRIVATE_KEY = "[YOUR_PRIVATE_KEY]";
const ORIGIN_SCHAIN_RPC_URL = "[YOUR_RPC_URL]";
const ERC1155_ADDRESS = "[ORIGIN_TOKEN_ADDRESS]";
const ERC1155_ABI = [ "function setApprovalForAll(address operator, bool approved) external" ];
const TOKEN_MANAGER_ERC1155_ADDRESS = "0xD2aaA00900000000000000000000000000000000"; // DO NOT CHANGE THIS
const TOKEN_MANAGER_ERC1155_ABI = [ "function transferToSchainERC1155(string calldata targetSchainName, address contractOnMainnet, uint256 id, uint256 amount) external" ];
const DST_SKALE_CHAIN_NAME = "[DST_SKALE_CHAIN_NAME]"; // e.g green-giddy-denebola (nebula mainnnet);
const NUMBER_TOKENS_TO_TRANSFER = parseEther("100"); // 100 tokens in wei format
const TOKEN_ID = BigInt(1);

// Setup the RPC Provider to connect to Ethereum
const provider = new JsonRpcProvider(ORIGIN_SCHAIN_RPC_URL);

// Setup the wallet with your private key and default to the Ethereum provider
const wallet = new Wallet(PRIVATE_KEY, provider);

// Setup the smart contracts which default to being signed by your wallet and connected on Ethereum
const tokenManagerContract = new Contract(TOKEN_MANAGER_ERC1155_ADDRESS, TOKEN_MANAGER_ERC1155_ABI, wallet);
const tokenContract = new Contract(ERC1155_ADDRESS, ERC1155_ABI, wallet);

// 1. Approve the bridge to move ERC-1155 Tokens
const approvalTx = await tokenContract.setApprovalForAll(TOKEN_MANAGER_ERC1155_ADDRESS, true);
await approvalTx.wait(1); // Wait 1 blocks for confirmation, ~1 seconds

// 2. Bridge 100 of ERC-1155 Token Id #1, will receive on same address on new skale chain
const bridgeTx = await tokenManagerContract.transferToSchainERC1155(DST_SKALE_CHAIN_NAME, ERC1155_ADDRESS, TOKEN_ID, NUMBER_TOKENS_TO_TRANSFER);
await bridgeTx.wait(1); // Wait 1 blocks for confirmation, ~1 seconds

// Success! Now watch for delivery on Destination Chain
console.log("Success!");