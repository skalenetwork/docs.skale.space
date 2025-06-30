import { Contract, JsonRpcProvider, Wallet, parseEther } from "ethers"; // npm add ethers

const PRIVATE_KEY = "[YOUR_PRIVATE_KEY]";
const ORIGIN_SCHAIN_RPC_URL = "[YOUR_RPC_URL]";
const ERC20_ADDRESS = "[ORIGIN_TOKEN_ADDRESS]";
const ERC20_ABI = [ "function approve(address spender, uint256 amount) external" ];
const TOKEN_MANAGER_ERC20_ADDRESS = "0xD2aAA00500000000000000000000000000000000"; // DO NOT CHANGE THIS
const TOKEN_MANAGER_ERC20_ABI = [ "function transferToSchainERC20(string calldata targetSchainName, address contractOnMainnet, uint256 amount) external" ];
const DST_SKALE_CHAIN_NAME = "[DST_SKALE_CHAIN_NAME]"; // e.g green-giddy-denebola (nebula mainnnet);
const NUMBER_TOKENS_TO_TRANSFER = parseEther("100"); // 100 tokens in wei format

// Setup the RPC Provider to connect to Ethereum
const provider = new JsonRpcProvider(ORIGIN_SCHAIN_RPC_URL);

// Setup the wallet with your private key and default to the Ethereum provider
const wallet = new Wallet(PRIVATE_KEY, provider);

// Setup the smart contracts which default to being signed by your wallet and connected on Ethereum
const tokenManagerContract = new Contract(TOKEN_MANAGER_ERC20_ADDRESS, TOKEN_MANAGER_ERC20_ABI, wallet);
const tokenContract = new Contract(ERC20_ADDRESS, ERC20_ABI, wallet);

// 1. Approve the bridge to move ERC-20
const approvalTx = await tokenContract.approve(TOKEN_MANAGER_ERC20_ADDRESS, NUMBER_TOKENS_TO_TRANSFER);
await approvalTx.wait(1); // Wait 1 blocks for confirmation, ~1s seconds

// 2. Deposit ERC-20 into bridge, will receive on same address on SKALE
const bridgeTx = await tokenManagerContract.transferToSchainERC20(DST_SKALE_CHAIN_NAME, ERC20_ADDRESS, NUMBER_TOKENS_TO_TRANSFER);
await bridgeTx.wait(1);

// Success! Now watch for delivery on Destination Chain
console.log("Success!");