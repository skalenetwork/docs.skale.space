import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";
// import { chains  } from "../../config";

export default function Wallet({ alwaysShow }: { alwaysShow: boolean }) {

	const { address, isConnected } = useAccount();
	// const { chain } = useNetwork();
	// const { isLoading, pendingChainId, switchNetwork } = useSwitchNetwork();
	// const [ expectedChainId, setExpectedChainId ] = useState<number | null>(null);

	useEffect(() => {
		if (address) {
			localStorage.setItem("address", address);
		} else {
			localStorage.removeItem("address");
		}
	}, [isConnected, address]);
	
	/** Implement in v2 -> switch chains */
	// useEffect(() => {
	// 	if (chain) {
	// 		if (chain.id !== expectedChainId) {
	// 			if (chain.name.includes("calypso")) localStorage.setItem("selectedChainKey", "calypso");
	// 			if (chain.name.includes("chaos")) localStorage.setItem("selectedChainKey", "chaos");
	// 			if (chain.name.includes("europa")) localStorage.setItem("selectedChainKey", "europa");
	// 			if (chain.name.includes("nebula")) localStorage.setItem("selectedChainKey", "nebula");
	// 			if (chain.name.includes("titan")) localStorage.setItem("selectedChainKey", "titan");
	// 		}
	// 	}
	// }, [chain]);

	// useEffect(() => {

	// 	const interval = setInterval(() => {

	// 		const chainKey = localStorage.getItem("selectedChainKey");

	// 		if (!chainKey) return;
			
	// 		const _chainId = (chains as any)[chainKey]?.chainInfo?.testnet.chainId;

	// 		if (_chainId !== expectedChainId) setExpectedChainId(_chainId);

	// 	}, 500);

	// 	return () => clearInterval(interval);

	// }, []);

	// useEffect(() => {

	// 	if (isLoading && expectedChainId && pendingChainId !== expectedChainId) {
	// 		switchNetwork?.(expectedChainId);
	// 	}
	// }, [expectedChainId]);

	if (address !== undefined || alwaysShow) {
	return <ConnectButton
	      accountStatus="avatar"
	      chainStatus="none"
	      showBalance={{
	        smallScreen: false,
	        largeScreen: true,
	      }}
	    />
	}

	return <></>; 
	
}
