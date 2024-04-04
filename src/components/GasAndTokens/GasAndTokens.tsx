import { useEffect, useState } from "react";
import { formatEther, formatUnits, Contract, JsonRpcProvider } from "ethers";
import "./styles.css";
import type { Chain, ChainKey } from "../../config";
import { chains, Multicall } from "../../config";
import { erc20Abi, isAddress } from "viem";
import { toast } from "react-toastify";
import { mineGasForTransaction } from "./miner";
import { Wallet } from "ethers";


const DistributionManagerABI = [
	"function withdraw(address to) external"
];

const DistributionManagerAddress: {[key in ChainKey]: string} = {
	calypso: "0xD5E0cBcbd5a2Fd24718aF4c06Ae763B0a79AeFD1",
	europa: "0xB8C3c6640ed68ED2c4E558E2e79C9fd152D91433",
	nebula: "0xe8126F785F6CC2C2f3CcA39eB1d97809d9Ba36C1",
	titan: "0xD5E0cBcbd5a2Fd24718aF4c06Ae763B0a79AeFD1"
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

	const updateAddress = (address: `0x${string}`) => {
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
				<br />
				<h3>Set Ethereum Address</h3>
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
			<h3>Available Tokens</h3>
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
