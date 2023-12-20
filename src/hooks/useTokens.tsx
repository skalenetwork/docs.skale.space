import { useState, useEffect } from "react";
import type { Chain, ChainKey } from "../config";
import { chains, Multicall } from "../config";
import { Contract, JsonRpcProvider, formatEther } from "ethers";
import { erc20ABI } from "wagmi";

export default function useTokens() {

	const [erc20] = useState(() => new Contract("0x0000000000000000000000000000000000000000", erc20ABI));

	const [chain, setChain] = useState<Chain | null>(null);
	const [chainKey, setChainKey] = useState<string | null>(null);
	const [address, setAddress ] = useState<string | null>(null);
	const [balances, setBalances] = useState<bigint[]>([]);

	const checkStorage = () => {
		if (typeof localStorage !== undefined) {
			const possibleChainKey = localStorage.getItem("selectedChainKey");

			if (possibleChainKey) {
				const possibleChain = (chains as any)[possibleChainKey as ChainKey];
				if (chain?.name !== possibleChain) {
					setChain(possibleChain);
				}

				setChainKey(possibleChainKey);
			}

			const possibleAddress = localStorage.getItem("address");
			
			if (possibleAddress) {
				setAddress(possibleAddress);
			}
		}
	}

	const loadBalances = async () => {
		if (!chain?.chainInfo || !chain.chainInfo.testnet.contracts) return;
		if (address === null) return;

		const provider = new JsonRpcProvider(chain.chainInfo.testnet.rpcUrl);
		const multicall = new Contract(Multicall.address, Multicall.abi, provider);

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
			await provider?.getBalance(address),
			...balancesFromMulticall.map(({ returnData }: any) => {
				return erc20.interface.decodeFunctionResult('balanceOf', returnData)[0];
			})
		]);
	}

	useEffect(() => {
		checkStorage();
		loadBalances();
	}, [chain]);
	
	/** Check Store Interval Every 10 Seconds */
	useEffect(() => {
		const interval = setInterval(() => {
			checkStorage();
			loadBalances();
		}, 2500);

		return () => clearInterval(interval);
	}, []);

	return {
		chain,
		chainKey,
		address,
		balances
	};
}
