import { Contract, JsonRpcProvider, Wallet, parseEther } from "ethers"; // npm add ethers

const PRIVATE_KEY = "[YOUR_PRIVATE_KEY]";
const ETHEREUM_RPC_URL = "[YOUR_ETHEREUM_RPC_URL]";
const DEPOSIT_BOX_ETH_ADDRESS = "[DEPOSIT_BOX_ETH_ADDRESS]";
const DEPOSIT_BOX_ETH_ABI = [ "function deposit(string memory schainName) external" ];
const SKALE_CHAIN_NAME = "[SKALE_CHAIN_NAME]"; // e.g elated-tan-skat (europa mainnnet);

const provider = new JsonRpcProvider(ETHEREUM_RPC_URL);
const wallet = new Wallet(PRIVATE_KEY, provider);
const contract = new Contract(DEPOSIT_BOX_ETH_ADDRESS, DEPOSIT_BOX_ETH_ABI, wallet);

const depositTransaction = await contract.deposit(SKALE_CHAIN_NAME, {
	value: parseEther("1") // set in wei -> 1000000000000000000
});

await depositTransaction.wait(2); // Wait 2 blocks for confirmation, you may choose anything >= 1