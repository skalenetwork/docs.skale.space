import {
  connectorsForWallets,
  getDefaultConfig,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { useState } from "react";
import '@rainbow-me/rainbowkit/styles.css';
import { createConfig, WagmiConfig } from 'wagmi';
import {
  skaleCalypsoTestnet,
  skaleEuropaTestnet,
  skaleTitanTestnet,
  skaleNebulaTestnet,
  type Chain
} from 'wagmi/chains';
import { Wallet } from '../Wallet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { metaMaskWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [metaMaskWallet, walletConnectWallet],
    },
  ],
  {
    appName: "SKALE Docs",
    projectId: "36f43bfe942ce36937aa5abea9323839",
  }
);

const queryClient = new QueryClient();

export default function WalletLayout() {

  const [{ config, chains }] = useState(() => {

    const chains: readonly [Chain, ...Chain[]] = [
      
      skaleCalypsoTestnet,
      skaleEuropaTestnet,
      skaleNebulaTestnet,
      skaleTitanTestnet
    ]

    const config = getDefaultConfig({
      appName: 'SKALE Docs',
      projectId: "36f43bfe942ce36937aa5abea9323839",
      chains,
      ssr: true
    });

    return {
      config,
      chains
    }
  });
    
  if (!config || !chains) return null;

  return (
    <WagmiConfig
        config={config}
      >
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            appInfo={{
              appName: "sFUEL Station",
            }}
          >
            <Wallet alwaysShow={true} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiConfig>
  );
}