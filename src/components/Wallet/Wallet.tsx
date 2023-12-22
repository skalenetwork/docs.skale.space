import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import { useEffect } from "react";

export default function Wallet({ alwaysShow }: { alwaysShow: boolean }) {

	const { address, isConnected } = useAccount();

	useEffect(() => {
		if (address) {
			localStorage.setItem("address", address);
		} else {
			localStorage.removeItem("address");
		}
	}, [isConnected, address]);

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