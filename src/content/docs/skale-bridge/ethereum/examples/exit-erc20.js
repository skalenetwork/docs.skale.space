import { Contract, JsonRpcProvider, Wallet, parseEther } from "ethers"; // npm add ethers

const PRIVATE_KEY = "[YOUR_PRIVATE_KEY]";
const SKALE_RPC_URL = "[YOUR_SKALE_RPC_URL]";
const ERC20_ADDRESS = "[YOUR_TOKEN_ADDRESS]";
const ERC20_ABI = [ "function approve(address spender, uint256 amount) external" ];
const TOKEN_MANAGER_ERC20_ADDRESS = ""; // DO NOT CHANGE THIS
const TOKEN_MANAGER_ERC20_ABI = [ "function exitToMainERC20(address contractOnMainnet, uint256 amount) external" ];
const ONE_HUNDRED_TOKENS = parseEther("100"); // 100 tokens in wei format

// Setup the RPC Provider to connect to Ethereum
const provider = new JsonRpcProvider(SKALE_RPC_URL);

// Setup the wallet with your private key and default to the Ethereum provider
const wallet = new Wallet(PRIVATE_KEY, provider);

// Setup the smart contracts which default to being signed by your wallet and connected on Ethereum
const tokenManagerERC20Contract = new Contract(TOKEN_MANAGER_ERC20_ADDRESS, TOKEN_MANAGER_ERC20_ABI, wallet);
const erc20TokenContract = new Contract(ERC20_ADDRESS, ERC20_ABI, wallet);

// 1. Approve the bridge to move ERC-20 on your behalf
const approvalTx = await erc20TokenContract.approve(TOKEN_MANAGER_ERC20_ADDRESS, ONE_HUNDRED_TOKENS);
await approvalTx.wait(1); // Wait 1 blocks for confirmation, ~1 seconds

// 2. Transfer ERC-20 into bridge, will recieve on the same address on Ethereum
const exitTx = await tokenManagerERC20Contract.exitToMainERC20(ERC20_ADDRESS, ONE_HUNDRED_TOKENS);
await exitTx.wait(1);

// Success! Now watch for delivery on Ethereum
console.log("Success!");