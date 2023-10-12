import React, {useEffect,useState} from "react";
import { skaleNebulaTestnet,skaleChaosTestnet,skaleEuropaTestnet,skaleCalypsoTestnet } from 'wagmi/chains';

const chains =[skaleChaosTestnet,skaleNebulaTestnet,skaleEuropaTestnet,skaleCalypsoTestnet];

export default function SchainDetails() {
    const [selectedChain, setselectedChain] = useState(0);

    return(
        <div>
            <b>Name:</b> <a>{chains[selectedChain].name}</a>
            <div></div>
            <b>Id:</b> <a>{chains[selectedChain].id}</a>
            <div></div>
            <b>Explorer:</b> <a target="_blank" href={chains[selectedChain].blockExplorers.default.url}>{chains[selectedChain].blockExplorers.default.url}</a>
            <div></div>
            <b>RPC:</b> <a target="_blank" href={chains[selectedChain].rpcUrls.public.http[0]}>{chains[selectedChain].rpcUrls.public.http[0]}</a>
            <div></div>
            <b>WebSocket:</b><a target="_blank" href={chains[selectedChain].rpcUrls.public.webSocket[0]}>{chains[selectedChain].rpcUrls.public.webSocket[0]}</a>
        </div>
        
    );
}