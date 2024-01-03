import "./styles.css";

type Props = {
	chainKey: string;
	chain: Chain;
	onClick?: () => void;
}

export default function ChainCard({
	chainKey,
	chain,
	onClick
}: Props) {
	return (
		<div 
			className="chain"
			style={{
				color: chain.color,
				background: chain.gradientBackground,
				border: chainKey === "none" ? `1px solid ${chain.background}` : undefined
			}}
			onClick={(e) => {
				e.preventDefault();
				onClick();
			}}
		>
			<div className="chain-left">
				<div className="chain-left__icon">
					<img src={chain.logoUrl} alt={chainKey} />
				</div>
			</div>
			<div className="chain-right">
				<h3
					style={{
						color: chain.color
					}}
				>{chain.name}</h3>
				<p>{chain.description}</p>
			</div>
		</div>
	);
}