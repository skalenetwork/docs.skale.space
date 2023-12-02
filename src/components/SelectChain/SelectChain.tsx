import "./styles.css";
// import { useEffect, useState } from "react";
import { chains, chainList } from "../../config";
// import type { Chain, ChainKey } from "../../config";
import { ChainCard } from "../ChainCard";

export default function SelectChain() {

	const selectChain = (key: ChainKey) => {
		localStorage.setItem("selectedChainKey", key);
		window.location = "/quick-start/acquire-sfuel";
	}

	return (
		<div className="select-chain">
			{Object.entries(chains).map(([key, chain], index) => {
				return (
					<ChainCard
						key={index}
						chainKey={key}
						chain={chain}
						onClick={() => {
							selectChain(key);
						}}
					/>
				);
			})}
		</div>
	);
}