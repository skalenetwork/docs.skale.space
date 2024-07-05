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
				{/* <h5>{text ?? `You have selected the ${(chains as any)[selectedChainKey].name}`}</h5> */}
				{/* <br /> */}
				{selectedChainKey !== "appChain" && (
					<>
						<ChainDetails chain={(chains as any)[selectedChainKey]} />
						<br />
					</>
				)}
				<button
					onClick={() => {
						if (!blockClick && confirm("Do you want to select a different chain?")) {
							selectChain(null);
						}
					}}
					style={{
						color: "var(--sl-color-white",
						background: "none",
						borderRadius: "8px"
					}}>
						Click here to select a diferent chain
				</button>
				<br />
				<br />
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