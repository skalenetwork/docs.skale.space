import { useState, useEffect } from "react";
import type { Chain, ChainKey } from "../config";
import { chains, Multicall } from "../config";
import { Contract, JsonRpcProvider, formatEther } from "ethers";
import { erc20ABI } from "wagmi";

export default function useTokens() {

	const erc20 = new Contract("0x0000000000000000000000000000000000000000", erc20ABI);

	const [chain, setChain] = useState<Chain | null>(null);
	const [chainKey, setChainKey] = useState<string | null>(null);
	const [address, setAddress ] = useState<string | null>(null);
	const [balances, setBalances] = useState<any[]>([]);

	const checkStorage = () => {
		if (typeof localStorage !== undefined) {
			const possibleChainKey = localStorage.getItem("selectedChainKey");
			if (possibleChainKey) {
				setChain((chains as any)[possibleChainKey as ChainKey]);
				setChainKey(possibleChainKey);
			}

			const possibleAddress = localStorage.getItem("address");
			if (possibleAddress) setAddress(possibleAddress);
		}
	}
	
	/** Check Storage Initial */
	useEffect(() => {
		checkStorage();
	}, []);

	
	/** Check Store Interval Every 10 Seconds */
	useEffect(() => {

		const interval = setInterval(() => {
			checkStorage();
		}, 10000);

		return () => clearInterval(interval);
	}, []);
	

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
		
		console.log("Multicall: ", multicall);		
		const balancesFromMulticall = await multicall.aggregate3.staticCall(getBalancesEncoded);
		console.log("Balances from Multicall: ", balancesFromMulticall);

		setBalances([
			await provider?.getBalance(address),
			...balancesFromMulticall.map(({ returnData }: any, i) => {
				return erc20.interface.decodeFunctionResult('balanceOf', returnData)[0];
			})
		]);
	}

	/** Check Balances on Load */
	useEffect(() => {
		loadBalances();
	}, []);

	/** Check Balances Inverval Every 10 Seconds */
	useEffect(() => {
		const interval = setInterval(async() => {
			await loadBalances();
			console.log("Balances: ", balances);
		}, 1000);

		return () => clearInterval(interval);
	}, [chain]);

	return {
		chain,
		chainKey,
		address,
		balances
	};
}
