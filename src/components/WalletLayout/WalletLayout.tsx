import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  skaleCalypsoTestnet,
  skaleEuropaTestnet,
  skaleTitanTestnet,
  skaleNebulaTestnet,
  skaleChaosTestnet
} from 'wagmi/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { Wallet } from '../Wallet';

const { chains, publicClient } = configureChains(
  [
    skaleCalypsoTestnet,
    skaleEuropaTestnet,
    skaleTitanTestnet,
    skaleNebulaTestnet,
    skaleChaosTestnet
  ],
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
    })
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'SKALE Network Documentation',
  projectId: '36f43bfe942ce36937aa5abea9323839',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export default function WalletLayout() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Wallet alwaysShow={true} /> 
      </RainbowKitProvider>
    </WagmiConfig>
  );
}