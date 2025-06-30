import { Contract, JsonRpcProvider, Wallet } from "ethers"; // npm add ethers

const PRIVATE_KEY = "[YOUR_PRIVATE_KEY]";
const ORIGIN_SCHAIN_RPC_URL = "[YOUR_RPC_URL]";
const ERC721_ADDRESS = "[ORIGIN_TOKEN_ADDRESS]";
const ERC721_ABI = [ "function approve(address spender, uint256 tokenId) external" ];
const TOKEN_MANAGER_ERC721_ADDRESS = "0xD2aaa00600000000000000000000000000000000"; // DO NOT CHANGE THIS
const TOKEN_MANAGER_ERC721_ABI = [ "function transferToSchainERC721(string calldata targetSchainName, address contractOnMainnet, uint256 tokenId) external" ];
const DST_SKALE_CHAIN_NAME = "[DST_SKALE_CHAIN_NAME]"; // e.g green-giddy-denebola (nebula mainnnet);
const TOKEN_ID = BigInt(1);

// Setup the RPC Provider to connect to Ethereum
const provider = new JsonRpcProvider(ORIGIN_SCHAIN_RPC_URL);

// Setup the wallet with your private key and default to the Ethereum provider
const wallet = new Wallet(PRIVATE_KEY, provider);

// Setup the smart contracts which default to being signed by your wallet and connected on Ethereum
const tokenManagerContract = new Contract(TOKEN_MANAGER_ERC721_ADDRESS, TOKEN_MANAGER_ERC721_ABI, wallet);
const tokenContract = new Contract(ERC721_ADDRESS, ERC721_ABI, wallet);

// 1. Approve the bridge to move ERC-721 Token Id #1
const approvalTx = await tokenContract.approve(TOKEN_MANAGER_ERC721_ADDRESS, TOKEN_ID);
await approvalTx.wait(1); // Wait 1 blocks for confirmation, ~15 seconds

// 2. Deposit ERC-721 Token Id #1 into bridge, will receive on same address on SKALE
const bridgeTx = await tokenManagerContract.transferToSchainERC721(DST_SKALE_CHAIN_NAME, ERC721_ADDRESS, TOKEN_ID);
await bridgeTx.wait(1);

// Success! Now watch for delivery on Destination Chain
console.log("Success!");