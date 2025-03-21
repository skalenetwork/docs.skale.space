'use client';

import "./styles.css";
import { useEffect, useMemo, useState } from "react";
import { isAddress } from "viem";

export default function Faucet() {

    const [address, setAddress] = useState<string>("");
    
    const { isValidAddress } = useMemo(() => {
        return {
            isValidAddress: isAddress(address)
        }
    }, [address]);

    useEffect(() => {
        console.log(address);
    }, [address])

    return (
        <section className="faucet">
            <p>Enter wallet address to receive testnet sFUEL and ERC-20 tokens.</p>
            <form>
                <input type="text" value={address} onChange={(e) => {
                    setAddress(e.target.value)
                }} />
                <button
                    disabled={!isValidAddress}
                    onClick={async(e) => {
                        e.preventDefault();
                    }}
                >Get test tokens
                </button>
                {(!isValidAddress && address.length > 0) && <p className="invalid">Invalid address</p>}
            </form>
        </section>
    );
}