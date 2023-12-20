import useTokens from "../../hooks/useTokens";
import { formatEther, formatUnits, parseUnits } from "ethers";
import "./styles.css";

export default function GasAndTokens() {

	const {
		address,
		balances,
		chain,
		chainKey
	} = useTokens();

	if (!chain) {
		return (
			<div>
				<p>Sorry, you must select a chain first. Please select a chain from above.</p>
			</div>
		);
	}

	if (!address) {
		return (
			<div>
				<p>Sorry, you must connect a wallet first (see navigation).</p>
			</div>
		);
	}

	if (chainKey === "appChain") {
		return (
			<div>
				<p>Sorry, the documentation does not support specific AppChains on testnet. Please visit the <a href="https://discord.com/invite/gM5XBy6">Discord</a> for support</p>
			</div>
		);
	}

	return (
		<div>
			<h2>Available Tokens</h2>
			<p>Showing balances for: {address}</p>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Decimals</th>
						<th>Balance</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>sFUEL</td>
						<td>Native (Gas)</td>
						<td>18</td>
						<td>{formatEther(balances[0]?.toString() ?? "0")} sFUEL</td>
						<td>
							<button>
								Request Tokens
							</button>
						</td>
					</tr>
					{chain.chainInfo && chain.chainInfo.testnet.contracts.map((contractInfo, index: number) => {
						return (
							<tr key={index}>
								<td>{contractInfo.contractName}</td>
								<td>{contractInfo.contractType.toUpperCase()}</td>
								<td>{contractInfo.decimals?.toString()}</td>
								<td>{formatUnits(balances[index + 1]?.toString() ?? "0", contractInfo?.decimals ?? 18).toString()} {contractInfo.contractName}</td>
								<td>
									<button>
										Request Tokens
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
