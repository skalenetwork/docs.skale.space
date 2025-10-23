import { Contract, JsonRpcProvider, Wallet, parseEther } from "ethers"; // npm add ethers

const PRIVATE_KEY = "[YOUR_PRIVATE_KEY]";
const ETHEREUM_RPC_URL = "[YOUR_ETHEREUM_RPC_URL]";
const ERC1155_ADDRESS = "[YOUR_TOKEN_ADDRESS]";
const ERC1155_ABI = [ "function setApprovalForAll(address operator, bool approved) external" ];
const DEPOSIT_BOX_ERC1155_ADDRESS = "[DEPOSIT_BOX_ERC1155_ADDRESS]";
const DEPOSIT_BOX_ERC1155_ABI = [ "function depositERC1155(string calldata schainName, address erc1155OnMainnet, uint256 id, uint256 amount) external" ];
const SKALE_CHAIN_NAME = "[SKALE_CHAIN_NAME]"; // e.g elated-tan-skat (europa mainnnet);
const ONE_TOKEN = parseEther("1"); // 100 tokens in wei format
const TOKEN_ID = BigInt(1);

// Setup the RPC Provider to connect to Ethereum
const provider = new JsonRpcProvider(ETHEREUM_RPC_URL);

// Setup the wallet with your private key and default to the Ethereum provider
const wallet = new Wallet(PRIVATE_KEY, provider);

// Setup the smart contracts which default to being signed by your wallet and connected on Ethereum
const depositBoxContract = new Contract(DEPOSIT_BOX_ERC1155_ADDRESS, DEPOSIT_BOX_ERC1155_ABI, wallet);
const erc1155TokenContract = new Contract(ERC1155_ADDRESS, ERC1155_ABI, wallet);

// 1. Approve the bridge to move ALL ERC-1155 tokens (this is required by the standard)
const approvalTx = await erc1155TokenContract.setApprovalForAll(DEPOSIT_BOX_ERC1155_ADDRESS, true);
await approvalTx.wait(1); // Wait 1 blocks for confirmation, ~15 seconds

// 2. Deposit ERC-20 into bridge, will receive on same address on SKALE
const depositTx = await depositBoxContract.depositERC1155(SKALE_CHAIN_NAME, ERC1155_ADDRESS, TOKEN_ID, ONE_TOKEN);
await depositTx.wait(1);

// Success! Now watch for delivery on SKALE Chain
console.log("Success!");