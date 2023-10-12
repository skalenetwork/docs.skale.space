import React, {useEffect,useState} from "react";

import { ConnectButton, getDefaultWallets, RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit';

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { skaleNebulaTestnet,skaleChaosTestnet,skaleEuropaTestnet,skaleCalypsoTestnet } from 'wagmi/chains';
import {coinbaseWallet, injectedWallet, metaMaskWallet, walletConnectWallet, argentWallet,trustWallet,
ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import '@rainbow-me/rainbowkit/styles.css';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
//import {GasStation} from '../sFuel/GasStation';

const { chains, publicClient } = configureChains(
  [skaleChaosTestnet,skaleNebulaTestnet,skaleEuropaTestnet,skaleCalypsoTestnet],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        return chain?.rpcUrls
          ? {
              http: chain.rpcUrls.default.http[0],
              webSocket: chain.rpcUrls.default.webSocket?.[0],
            }
          : null;
      },
    }),
  ]
);

const projectId = '566e32a5b32f97abb6257ad56516467a';
//const projectId = 'YOUR_PROJECT_ID';

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit demo',
  projectId,
  chains,
});

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      injectedWallet({ chains,projectId }),
      walletConnectWallet({ chains,projectId }),
      trustWallet({ chains,projectId }),
      ledgerWallet({ chains,projectId }),
      metaMaskWallet({ chains, projectId }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function Wallet() {
  const [selectedChain, setselectedChain] = useState(0);

  /*useEffect(() => {
    var type_chain = localStorage.getItem("type",0);
    setselectedChain(type_chain);

  }, []);*/


  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider modalSize="compact" chains={chains} initialChain={chains[selectedChain]}>
          <ConnectButton chainStatus="name"/>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}