import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";

export default function Wallet({ alwaysShow }: { alwaysShow: boolean }) {

	const { address } = useAccount();

	useEffect(() => {
		if (address) localStorage.setItem("address", address);
	}, [address]);

	if (address !== undefined || alwaysShow) {
	return <ConnectButton
	      accountStatus="avatar"
	      chainStatus="icon"
	      showBalance={{
	        smallScreen: false,
	        largeScreen: true,
	      }}
	    />
	}

	return <></>; 
	
}