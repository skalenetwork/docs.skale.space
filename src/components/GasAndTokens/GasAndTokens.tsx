import { useEffect, useState } from "react";
import { formatEther, formatUnits, Contract, JsonRpcProvider } from "ethers";
import "./styles.css";
import type { Chain, ChainKey } from "../../config";
import { chains, Multicall } from "../../config";
import { erc20Abi, isAddress } from "viem";
import { toast } from "react-toastify";

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

	const requestTokens = async(chainKey: string) => {
		setTimeout(() => {
			toast.success("Tokens requested. Balances will update shortly.");
			setClaimed(true);
		}, 1000);
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
					className="request-token-button"
					onClick={async(e) => {
						await requestTokens(chainKey);
					}}>
					Request Tokens
				</button>
				<button
					className="request-token-button"
					onClick={(e) => {
						setRequestUpdateAddress(true);
					}}>
					Change Address
				</button>
			</div>
		</div>
	);
}
