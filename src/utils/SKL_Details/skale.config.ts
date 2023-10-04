import { chains as skaleChains } from './Chains';
//import { mainnet as ethereumMainnet } from 'wagmi';

export default {
  chains_: [
    ...Object.values(skaleChains.hubs_staging),
    //ethereumMainnet,
    //...Object.values(skaleChains.staging),
    //...Object.values(skaleChains.mainnet),
  ],
};