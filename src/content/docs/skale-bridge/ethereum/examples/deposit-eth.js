import { Contract, JsonRpcProvider, Wallet, parseEther } from "ethers"; // npm add ethers
import dotenv from "dotenv"; // npm add dotenv

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const ETHEREUM_RPC_URL = "[ETHEREUM-RPC-URL]"; // or your preferrred ETH Mainnet or Testnet RPC

const DEPOSIT_BOX_ETH_ADDRESS = "0x..."; // Set to Mainnet or Testnet DepositBoxEth
const DEPOSIT_BOX_ETH_ABI = [
	"function deposit(string memory schainName) external",
	"function depositDirect(string memory schainName, address receiver) external"
];

const SKALE_CHAIN_NAME = "your-skale-chain-name"; // e.g elated-tan-skat (europa mainnnet);

// Example of Deposit on a SKALE Chain
async function main() {
	const provider = new JsonRpcProvider(ETHEREUM_RPC_URL);
	const wallet = new Wallet(PRIVATE_KEY, provider);
	const contract = new Contract(DEPOSIT_BOX_ETH_ADDRESS, DEPOSIT_BOX_ETH_ABI, wallet);

	/* 1. Deposit to same wallet on SKALE Chain
	 * or
	 * 2. Deposit to different wallet on SKALE Chain
	 */

	/* 1 -> Deposit to Same Wallet on SKALE Chain
	 * Example
	 * const res = await contract.deposit("elated-tan-skat", {
	 *		value: parseEther("1") // set in wei -> 1000000000000000000
	 * }
	 */
	const depositTransaction = await contract.deposit(SKALE_CHAIN_NAME, {
		value: parseEther("1") // set in wei -> 1000000000000000000
	});

	await depositTransaction.wait(2); // Wait 2 blocks for confirmation, you may choose anything >= 1

	/* 2 -> Deposit to Different Wallet on SKALE Chain
	 * Example
	 * const res = await contract.deposit("elated-tan-skat", "0x0000000000000000000000000000000000000012", {
	 *		value: parseEther("1") // set in wei -> 1000000000000000000
	 * }
	 */
	const depositTransactionToDiffWallet = await contract.deposit(SKALE_CHAIN_NAME, "0x...", {
		value: parseEther("1") // set in wei -> 1000000000000000000
	});

	await depositTransactionToDiffWallet.wait(2); // Wait 2 blocks for confirmation, you may choose anything >= 1
}

main()
	.catch((err) => {
		console.error(err);
		process.exitCode = 1;	
	})