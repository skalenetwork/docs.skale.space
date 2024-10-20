import { useEffect, useState } from "react";
import { formatEther, formatUnits, Contract, JsonRpcProvider } from "ethers";
import "./styles.css";
import type { Chain, ChainKey } from "../../config";
import { chains, Multicall } from "../../config";
import { toast } from "react-toastify";
import { mineGasForTransaction } from "./miner";
import { Wallet, isAddress } from "ethers";

const erc20Abi = [
	{
	  type: 'event',
	  name: 'Approval',
	  inputs: [
		{
		  indexed: true,
		  name: 'owner',
		  type: 'address',
		},
		{
		  indexed: true,
		  name: 'spender',
		  type: 'address',
		},
		{
		  indexed: false,
		  name: 'value',
		  type: 'uint256',
		},
	  ],
	},
	{
	  type: 'event',
	  name: 'Transfer',
	  inputs: [
		{
		  indexed: true,
		  name: 'from',
		  type: 'address',
		},
		{
		  indexed: true,
		  name: 'to',
		  type: 'address',
		},
		{
		  indexed: false,
		  name: 'value',
		  type: 'uint256',
		},
	  ],
	},
	{
	  type: 'function',
	  name: 'allowance',
	  stateMutability: 'view',
	  inputs: [
		{
		  name: 'owner',
		  type: 'address',
		},
		{
		  name: 'spender',
		  type: 'address',
		},
	  ],
	  outputs: [
		{
		  type: 'uint256',
		},
	  ],
	},
	{
	  type: 'function',
	  name: 'approve',
	  stateMutability: 'nonpayable',
	  inputs: [
		{
		  name: 'spender',
		  type: 'address',
		},
		{
		  name: 'amount',
		  type: 'uint256',
		},
	  ],
	  outputs: [
		{
		  type: 'bool',
		},
	  ],
	},
	{
	  type: 'function',
	  name: 'balanceOf',
	  stateMutability: 'view',
	  inputs: [
		{
		  name: 'account',
		  type: 'address',
		},
	  ],
	  outputs: [
		{
		  type: 'uint256',
		},
	  ],
	},
	{
	  type: 'function',
	  name: 'decimals',
	  stateMutability: 'view',
	  inputs: [],
	  outputs: [
		{
		  type: 'uint8',
		},
	  ],
	},
	{
	  type: 'function',
	  name: 'name',
	  stateMutability: 'view',
	  inputs: [],
	  outputs: [
		{
		  type: 'string',
		},
	  ],
	},
	{
	  type: 'function',
	  name: 'symbol',
	  stateMutability: 'view',
	  inputs: [],
	  outputs: [
		{
		  type: 'string',
		},
	  ],
	},
	{
	  type: 'function',
	  name: 'totalSupply',
	  stateMutability: 'view',
	  inputs: [],
	  outputs: [
		{
		  type: 'uint256',
		},
	  ],
	},
	{
	  type: 'function',
	  name: 'transfer',
	  stateMutability: 'nonpayable',
	  inputs: [
		{
		  name: 'recipient',
		  type: 'address',
		},
		{
		  name: 'amount',
		  type: 'uint256',
		},
	  ],
	  outputs: [
		{
		  type: 'bool',
		},
	  ],
	},
	{
	  type: 'function',
	  name: 'transferFrom',
	  stateMutability: 'nonpayable',
	  inputs: [
		{
		  name: 'sender',
		  type: 'address',
		},
		{
		  name: 'recipient',
		  type: 'address',
		},
		{
		  name: 'amount',
		  type: 'uint256',
		},
	  ],
	  outputs: [
		{
		  type: 'bool',
		},
	  ],
	},
] as const;


const DistributionManagerABI = [
	"function withdraw(address to) external"
];

const DistributionManagerAddress: {[key in ChainKey]: string} = {
	calypso: "0x91b26672E06C5d3f24Aeda15F41Cc7102f31C9C6",
	europa: "0x605d09E0b2a72317401eD4c90Fafc91BA39fe373",
	nebula: "0x9D3366b770475dcD549364F72a8fC3e3a6A1d4C3",
	titan: "0xa8d3d09Aa7c17599a6cd78f27164A02976c1490D"
}

type Provider = {
	key: string;
	provider: JsonRpcProvider;
}

export default function GasAndTokens() {

	const [erc20] = useState(() => new Contract("0x0000000000000000000000000000000000000000", erc20Abi));
	const [address, setAddress] = useState<string | null>(null);
	const [requestUpdateAddress, setRequestUpdateAddress] = useState<boolean>(false);
	const [chain, setChain] = useState<Chain | null>(null);
	const [chainKey, setChainKey] = useState<string | null>(null);
	const [balances, setBalances] = useState<bigint[]>([]);
	const [provider, setProvider] = useState<Provider | null>(null);
	const [claimed, setClaimed] = useState<boolean>(false);

	const requestTokens = async(chainKey: ChainKey) => {
		toast("Token Request Initiated");
		const provider = new JsonRpcProvider(chains[chainKey].chainInfo.testnet.rpcUrl);
		const contract = new Contract(DistributionManagerAddress[chainKey], DistributionManagerABI, provider);
		const wallet = Wallet.createRandom(provider);
		const nonce = await provider.getTransactionCount(wallet.address);
		const gasEstimate = BigInt(200_000);
		const gasPrice = await mineGasForTransaction(nonce, 200_000, wallet.address);
		
		try {
			const res = await wallet.sendTransaction({
	            to: DistributionManagerAddress[chainKey],
	            data: contract.interface.encodeFunctionData(
	            	"withdraw",
	            	[address]
	            ),
	            gasPrice: gasPrice.gasPrice,
	            gasLimit: gasEstimate
	        });

			const toastLoadingId = toast.loading("Tx Processing");
	        
	        await res.wait(1);
			toast.dismiss(toastLoadingId);
			await loadBalances();
			toast.success("Tokens Received Successfully");
		} catch (err) {
			toast.error("Error. Please Try Again");
		}
	}

	const checkStorage = () => {
		if (typeof localStorage !== undefined) {
			const possibleChainKey = localStorage.getItem("selectedChainKey");

			if (possibleChainKey) {
				const possibleChain = (chains as any)[possibleChainKey as ChainKey];
				if (chain?.name !== possibleChain) {
					setChain(possibleChain);
				}

				setChainKey(possibleChainKey);
			} else {
				setChainKey(null);
				setChain(null);
			}
		}
	}

	const updateAddress = (address: string) => {
		if (typeof localStorage !== undefined) {
			localStorage.setItem("address", address);
			setAddress(address);
			setRequestUpdateAddress(false);
		}
	}

	const loadBalances = async () => {
		if (!chain?.chainInfo || !chain.chainInfo.testnet.contracts) return;
		if (address === null) return;
		if (chainKey === null) return;

		let _provider;
		if (provider === null) {
			_provider = new JsonRpcProvider(chain.chainInfo.testnet.rpcUrl);
			setProvider({
				key: chainKey,
				provider: _provider
			});
		} else if (provider?.key !== chainKey) {
			_provider = new JsonRpcProvider(chain.chainInfo.testnet.rpcUrl);
			setProvider({
				key: chainKey,
				provider: _provider
			});
		} else {
			_provider = provider.provider;
		}
		
		const multicall = new Contract(Multicall.address, Multicall.abi, _provider);

		const getBalancesEncoded = Array.from({ length: chain.chainInfo.testnet.contracts.length }, (_, i) => {
			return [
				chain.chainInfo?.testnet.contracts[i].address,
				false,
				erc20.interface.encodeFunctionData(
					"balanceOf",
					[address]
				)
			]
		});
		
		const balancesFromMulticall = await multicall.aggregate3.staticCall(getBalancesEncoded);

		const newBalances = [
			await _provider?.getBalance(address),
			...balancesFromMulticall.map(({ returnData }: any) => {
				return erc20.interface.decodeFunctionResult('balanceOf', returnData)[0];
			})
		];
		console.log("New Balances: ", newBalances);
		setBalances(newBalances);
	}

	useEffect(() => {
		checkStorage();
		loadBalances();
	}, [address, chain]);
	
	/** Check Store Interval Every 10 Seconds */
	useEffect(() => {
		const interval = setInterval(() => {
			checkStorage();
			loadBalances();
		}, 2500);

		return () => clearInterval(interval);
	}, []);

	if (!chain || chainKey == null) {
		return (
			<div>
				<p>Please select a chain first from the above.</p>
			</div>
		);
	}

	if (!address || requestUpdateAddress) {
		return (
			<div className="wallet-input">
				<h4>Need Gas or Testnet Tokens?</h4>
				<p>Add your Ethereum Address into the field</p>
				<div style={{
					display: "flex",
					flexDirection: "column"
				}}>
					<label htmlFor="walletAddress">Your Ethereum Address</label>
					<input
						type="text"
						name="walletAddress"
						onChange={(e) => {
							e.preventDefault();
							if (isAddress(e.target.value)) {
								updateAddress(e.target.value);
							}
						}}
					/>
				</div>
			</div>
		);
	}

	return (
		<div>
			<h4>Available Tokens</h4>
			<p>Showing balances for: {address}</p>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Decimals</th>
						<th>Balance</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>sFUEL</td>
						<td>Native (Gas)</td>
						<td>18</td>
						<td>{formatEther(balances[0]?.toString() ?? "0")} sFUEL</td>
					</tr>
					{chain.chainInfo && chain.chainInfo.testnet.contracts.map((contractInfo, index: number) => {
						return (
							<tr key={index}>
								<td>{contractInfo.contractName}</td>
								<td>{contractInfo.contractType.toUpperCase()}</td>
								<td>{contractInfo.decimals?.toString()}</td>
								<td>{formatUnits(balances[index + 1]?.toString() ?? "0", contractInfo?.decimals ?? 18).toString()} {contractInfo.contractName}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div>
				<button 
					style={{
						marginRight: "8px"
					}}
					disabled={claimed}
					className="request-token-button_2"
					onClick={async(e) => {
						await requestTokens(chainKey as ChainKey);
					}}>
					Request Tokens
				</button>
				<button
					className="request-token-button_2"
					onClick={(e) => {
						setRequestUpdateAddress(true);
					}}>
					Change Address
				</button>
			</div>
		</div>
	);
}
