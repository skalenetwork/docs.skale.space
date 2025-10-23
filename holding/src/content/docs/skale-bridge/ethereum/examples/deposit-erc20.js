import { Contract, JsonRpcProvider, Wallet, parseEther } from "ethers"; // npm add ethers

const PRIVATE_KEY = "[YOUR_PRIVATE_KEY]";
const ETHEREUM_RPC_URL = "[YOUR_ETHEREUM_RPC_URL]";
const ERC20_ADDRESS = "[YOUR_TOKEN_ADDRESS]";
const ERC20_ABI = [ "function approve(address spender, uint256 amount) external" ];
const DEPOSIT_BOX_ERC20_ADDRESS = "[DEPOSIT_BOX_ERC20_ADDRESS]";
const DEPOSIT_BOX_ERC20_ABI = [ "function depositERC20(string calldata schainName, address erc20OnMainnet, uint256 amount) external" ];
const SKALE_CHAIN_NAME = "[SKALE_CHAIN_NAME]"; // e.g elated-tan-skat (europa mainnnet);
const ONE_HUNDRED_TOKENS = parseEther("100"); // 100 tokens in wei format

// Setup the RPC Provider to connect to Ethereum
const provider = new JsonRpcProvider(ETHEREUM_RPC_URL);

// Setup the wallet with your private key and default to the Ethereum provider
const wallet = new Wallet(PRIVATE_KEY, provider);

// Setup the smart contracts which default to being signed by your wallet and connected on Ethereum
const depositBoxContract = new Contract(DEPOSIT_BOX_ERC20_ADDRESS, DEPOSIT_BOX_ERC20_ABI, wallet);
const erc20TokenContract = new Contract(ERC20_ADDRESS, ERC20_ABI, wallet);

// 1. Approve the bridged to move ERC-20
const approvalTx = await erc20TokenContract.approve(DEPOSIT_BOX_ERC20_ADDRESS, ONE_HUNDRED_TOKENS);
await approvalTx.wait(1); // Wait 1 blocks for confirmation, ~15 seconds

// 2. Deposit ERC-20 into bridge, will receive on same address on SKALE
const depositTx = await depositBoxContract.depositERC20(SKALE_CHAIN_NAME, ERC20_ADDRESS, ONE_HUNDRED_TOKENS);
await depositTx.wait(1);

// Success! Now watch for delivery on SKALE Chain
console.log("Success!");