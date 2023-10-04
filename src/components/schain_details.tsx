import React, {useEffect,useState} from "react";
import {chains_ } from '../utils/SKL_Details/Provider';


export default function SchainDetails() {
    const [selectedChain, setselectedChain] = useState(0);

    return(
        <div>
            <b>Name:</b> <a>{chains_[selectedChain].name}</a>
            <div></div>
            <b>Id:</b> <a>{chains_[selectedChain].id}</a>
            <div></div>
            <b>Explorer:</b> <a target="_blank" href={chains_[selectedChain].blockExplorers.default.url}>{chains_[selectedChain].blockExplorers.default.url}</a>
            <div></div>
            <b>RPC:</b> <a target="_blank" href={chains_[selectedChain].rpcUrls.public.http[0]}>{chains_[selectedChain].rpcUrls.public.http[0]}</a>
            <div></div>
            <b>WebSocket:</b><a target="_blank" href={chains_[selectedChain].rpcUrls.public.webSocket[0]}>{chains_[selectedChain].rpcUrls.public.webSocket[0]}</a>
            <div></div>
            <b>Filestorage:</b><a target="_blank" href={chains_[selectedChain].rpcUrls.filestorage.http[0]}>{chains_[selectedChain].rpcUrls.filestorage.http[0]}</a>
        </div>
        
    );
}