import { Contract, JsonRpcProvider, Wallet } from "ethers"; // npm add ethers

const PRIVATE_KEY = "[YOUR_PRIVATE_KEY]";
const SCHAIN_RPC_URL = "[YOUR_RPC_URL]";
const TOKEN_MANAGER_LINKER_ADDRESS = "0xD2aAA00800000000000000000000000000000000"; // DO NOT CHANGE THIS
const TOKEN_MANAGER_LINKER_ABI = [ "function connectSchain(string calldata schainName) external" ];
const SCHAIN_NAME = "[TARGET_SKALE_CHAIN_NAME]"; // e.g green-giddy-denebola (nebula mainnnet);

// Setup the RPC Provider to connect to SKALE Chain
const provider = new JsonRpcProvider(SCHAIN_RPC_URL);

// Setup the wallet with your private key and default to the SKALE Chain provider
const wallet = new Wallet(PRIVATE_KEY, provider);

const tokenManagerLinkerContract = new Contract(TOKEN_MANAGER_LINKER_ADDRESS, TOKEN_MANAGER_LINKER_ABI, wallet);

const connectTx = await tokenManagerLinkerContract.connectSchain(SCHAIN_NAME);
await connectTx.wait(1); // Wait 1 blocks for confirmation, ~1 seconds

// Success! Now watch for delivery on Destination Chain
console.log("Success!");