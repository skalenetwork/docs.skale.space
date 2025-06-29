import { Contract, JsonRpcProvider, Wallet, parseEther } from "ethers"; // npm add ethers

const PRIVATE_KEY = "[YOUR_PRIVATE_KEY]";
const ETHEREUM_RPC_URL = "[YOUR_ETHEREUM_RPC_URL]";
const COMMUNITY_POOL_ADDRESS = "[DEPOSIT_BOX_ERC20_ADDRESS]";
const COMMUNITY_POOL_ABI = [ "function rechargeUserWallet(string calldata schainName, address user) external" ];
const SKALE_CHAIN_NAME = "[SKALE_CHAIN_NAME]"; // e.g elated-tan-skat (europa mainnnet);

// Setup the RPC Provider to connect to Ethereum
const provider = new JsonRpcProvider(ETHEREUM_RPC_URL);

// Setup the wallet with your private key and default to the Ethereum provider
const wallet = new Wallet(PRIVATE_KEY, provider);

// Setup the smart contracts which default to being signed by your wallet and connected on Ethereum
const communityPoolContract = new Contract(COMMUNITY_POOL_ADDRESS, COMMUNITY_POOL__ABI, wallet);

const rechargeTx = await communityPoolContract.rechargeUserWallet(
	SKALE_CHAIN_NAME,
	wallet.address,
	{
		value: parseEther("0.02") // Recharge by 0.02 ETH
	}
);

await rechargeTx.wait(5); // wait 5 blocks for full finality

// Success! You can now bridge from SKALE to Ethereum!
console.log("Success!");