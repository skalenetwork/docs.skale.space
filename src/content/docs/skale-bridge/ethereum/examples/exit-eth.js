import { Contract, JsonRpcProvider, Wallet, parseEther } from "ethers"; // npm add ethers

const PRIVATE_KEY = "[YOUR_PRIVATE_KEY]";
const SKALE_RPC_URL = "[YOUR_SKALE_RPC_URL]";
const ETH_ERC20_ADDRESS = "0xD2Aaa00700000000000000000000000000000000"; // DO NOT CHANGE THIS
const ERC20_ABI = [ "function approve(address spender, uint256 amount) external" ];
const TOKEN_MANAGER_ETH_ADDRESS = "0xd2AaA00400000000000000000000000000000000"; // DO NOT CHANGE THIS
const TOKEN_MANAGER_ETH_ABI = [ "function exitToMain(uint256 amount) external" ];
const ONE_HUNDRED_TOKENS = parseEther("100"); // 100 tokens in wei format

// Setup the RPC Provider to connect to Ethereum
const provider = new JsonRpcProvider(SKALE_RPC_URL);

// Setup the wallet with your private key and default to the Ethereum provider
const wallet = new Wallet(PRIVATE_KEY, provider);

// Setup the smart contracts which default to being signed by your wallet and connected on Ethereum
const tokenManagerETH = new Contract(TOKEN_MANAGER_ETH_ADDRESS, TOKEN_MANAGER_ETH_ABI, wallet);
const ethERC20Contract = new Contract(ETH_ERC20_ADDRESS, ERC20_ABI, wallet);

// 1. Approve the bridge to move ERC-20 on your behalf
const approvalTx = await ethERC20Contract.approve(TOKEN_MANAGER_ETH_ADDRESS, ONE_HUNDRED_TOKENS);
await approvalTx.wait(1); // Wait 1 blocks for confirmation, ~1 seconds

// 2. Transfer ERC-20 into bridge, will recieve on the same address on Ethereum
const exitTx = await tokenManagerETH.exitToMain(ONE_HUNDRED_TOKENS);
await exitTx.wait(1);

// Success! Now watch for delivery on Ethereum
console.log("Success!");