import "./styles.css";
import { useEffect, useState } from "react";
import { chains } from "../../config";
import { ChainCard } from "../ChainCard";
import { ChainDetails } from "../ChainDetails";
import type { ChainKey } from "../../config";

export default function SelectChain({
	showDetails,
	blockClick,
	text
}: {
	showDetails?: boolean,
	blockClick?: boolean,
	text?: string
}) {

	const [isLoaded, setIsLoaded] = useState<boolean>();
	const [selectedChainKey, setSelectedChainKey] = useState<string | null>(null);

	useEffect(() => {
		if (typeof localStorage !== undefined) {
			setSelectedChainKey(localStorage.getItem("selectedChainKey"));
		}
		setIsLoaded(true);
	}, []);

	const selectChain = (key: ChainKey | null) => {
		if (key === null) {
			localStorage.removeItem("selectedChainKey");
			setSelectedChainKey(null);
		} else {
			localStorage.setItem("selectedChainKey", key);
			setSelectedChainKey(key);
		}
	}

	if (!isLoaded) {
		return (
			<p>Checking for Chain</p>
		);
	}

	if (selectedChainKey) {
		return (
			<div>
				<h3>{text ?? "You have selected:"}</h3>
				<br />
				<ChainCard
					chainKey={selectedChainKey}
					chain={(chains as any)[selectedChainKey]}
					onClick={() => {
						if (!blockClick && confirm("Do you want to select a different chain?")) {
							selectChain(null);
						}
					}}
				/>
				{selectedChainKey !== "appChain" && (
					<>
						<ChainDetails chain={(chains as any)[selectedChainKey]} />
						<br />
					</>
				)}
			</div>
		);
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
							selectChain(key as ChainKey);
						}}
					/>
				);
			})}
		</div>
	);
}