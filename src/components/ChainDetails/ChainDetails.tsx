import { toast } from "react-toastify";
import "./styles.css";

type Props = {
	chain: {
		name: string;
		chainInfo: {
			mainnet: {
				rpcUrl: string;
				chainId: string;
				explorerUrl: string;
			}
			testnet: {
				rpcUrl: string;
				chainId: string;
				explorerUrl: string;
			}
		}
	};
	network?: "testnet" | "mainnet";
}

export default function ChainDetails({
	chain,
	network = "testnet"
}: Props) {
	
	if (!chain.chainInfo) return;
	if (!chain.chainInfo[network]) return;

	return (
		<div 
			className="chain-details"
		>
			<h4>Chain Details</h4>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Info</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Chain Name</td>
						<td>
							{chain?.name}
						</td>
					</tr>
					<tr>
						<td>RPC Url</td>
						<td className="hover" onClick={(e) => {
							e.preventDefault();
							window.navigator.clipboard.writeText(chain?.chainInfo[network].rpcUrl);
							toast.success("RPC Copied to Clipboard");
						}}>
							{chain?.chainInfo[network].rpcUrl}
						</td>
					</tr>
					<tr>
						<td>Explorer Url</td>
						<td className="hover" onClick={(e) => {
							e.preventDefault();
							window.navigator.clipboard.writeText(chain?.chainInfo[network].explorerUrl);
							toast.success("Explore Copied to Clipboard");
						}}>
							{chain?.chainInfo[network].explorerUrl}
						</td>
					</tr>
					<tr>
						<td>Chain Id</td>
						<td className="hover" onClick={(e) => {
							e.preventDefault();
							window.navigator.clipboard.writeText(chain?.chainInfo[network].chainId);
							toast.success("Chain Id Copied to Clipboard");
						}}>
							{chain?.chainInfo[network].chainId}
						</td>
					</tr>
					<tr>
						<td>Chain Id (Hex)</td>
						<td className="hover" onClick={(e) => {
							e.preventDefault();
							window.navigator.clipboard.writeText(chain?.chainInfo[network].chainId);
							toast.success("Chain Id Copied to Clipboard");
						}}>
							0x{parseInt(chain?.chainInfo[network].chainId).toString(16)}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}