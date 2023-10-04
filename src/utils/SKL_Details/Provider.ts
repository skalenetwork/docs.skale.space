//import { configureChains } from 'wagmi';
//import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import skaleConfig from './skale.config';

const { chains_ } = skaleConfig;

/*const { provider } = configureChains(chains_, [
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
]);*/

export { chains_ };