import { useEffect, useState } from "react";
import { formatEther, formatUnits, Contract, JsonRpcProvider } from "ethers";
import "./styles.css";
import type { Chain, ChainKey } from "../../config";
import { chains, Multicall } from "../../config";
import { erc20ABI } from "wagmi";
import { toast } from "react-toastify";

type Provider = {
	key: string;
	provider: JsonRpcProvider;
}

export default function GasAndTokens() {

	const [erc20] = useState(() => new Contract("0x0000000000000000000000000000000000000000", erc20ABI));
	const [address, setAddress] = useState<string | null>(null);
	const [chain, setChain] = useState<Chain | null>(null);
	const [chainKey, setChainKey] = useState<string | null>(null);
	const [balances, setBalances] = useState<bigint[]>([]);
	const [provider, setProvider] = useState<Provider | null>(null);

	const requestTokens = async(chainName: string, tokenAddress: string, toAddress: string, tokenSymbol: string) => {
		toast("Token Faucet Coming Soon!");
		// try {
		// 	const res = await fetch("https://edge-distribution.vercel.app/api/request-tokens", {
		// 		body: JSON.stringify({
		// 			chain: chainName,
		// 			address: toAddress,
		// 			token: tokenAddress
		// 		}),
		// 		method: "POST"
		// 	});

		// 	toast.success(`${tokenSymbol} sent on ${chainName}`);
		// } catch (err) {
		// 	console.log("err: ", err);
		// 	toast.error(`Error requesting ${tokenSymbol} on ${chainName}`);
		// }


	}

	const requestSKALEFuel = async(chainName: string, toAddress: string) => {
		toast("sFUEL Facuet Coming Soon!");
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

			const possibleAddress = localStorage.getItem("address");
			if (possibleAddress) {
				setAddress(possibleAddress);
			} else {
				setAddress(null);
				setBalances([]);
			}
		}
	}

	const loadBalances = async () => {
		if (!chain?.chainInfo || !chain.chainInfo.testnet.contracts) return;
		if (address === null) return;

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

		setBalances([
			await _provider?.getBalance(address),
			...balancesFromMulticall.map(({ returnData }: any) => {
				return erc20.interface.decodeFunctionResult('balanceOf', returnData)[0];
			})
		]);
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

	if (!chain) {
		return (
			<div>
				<p>Sorry, you must select a chain first. Please select a chain from above.</p>
			</div>
		);
	}

	if (!address) {
		return (
			<div>
				<p>Sorry, you must connect a wallet first (see navigation).</p>
			</div>
		);
	}

	if (chainKey === "appChain") {
		return (
			<div>
				<p>Sorry, the documentation does not support specific AppChains on testnet. Please visit the <a href="https://discord.com/invite/gM5XBy6">Discord</a> for support</p>
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
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>sFUEL</td>
						<td>Native (Gas)</td>
						<td>18</td>
						<td>{formatEther(balances[0]?.toString() ?? "0")} sFUEL</td>
						<td>
							<button
								className="sfuel-button"
								onClick={async(e) => {
									e.preventDefault();
									await requestSKALEFuel(chainKey, address);
								}}
							>
								Request Tokens
							</button>
						</td>
					</tr>
					{chain.chainInfo && chain.chainInfo.testnet.contracts.map((contractInfo, index: number) => {
						return (
							<tr key={index}>
								<td>{contractInfo.contractName}</td>
								<td>{contractInfo.contractType.toUpperCase()}</td>
								<td>{contractInfo.decimals?.toString()}</td>
								<td>{formatUnits(balances[index + 1]?.toString() ?? "0", contractInfo?.decimals ?? 18).toString()} {contractInfo.contractName}</td>
								<td>
									<button
										className="request-token-button"
										onClick={async(e) => {
											await requestTokens(chainKey, contractInfo.address, address, contractInfo.contractName);
										}}>
										Request Tokens
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
