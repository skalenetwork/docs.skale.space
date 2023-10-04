import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'My SKALE Guide',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Guide',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Network',
        link: '/guide/network/'
      },
      {
        label: 'Quick setup',
        link: '/guide/setup/'
      },
      {
        label: 'Wallets',
        link: '/guide/wallets/'
      },
      {
        label: 'Bridges',
        link: '/guide/bridges/'
      },
      {
        label: 'SDKs/Libraries',
        link: '/guide/libraries/'
      },
      {
        label: 'Data Solutions',
        link: '/guide/data/'
      },
      {
        label: 'Development Flow',
        link: '/guide/deployment_flow/'
      }
    ]
    },
      {
      label: 'Specifics',
      items :[
        {
          label: 'sFUEL',
          link: '/specifics/sfuel/'
        },
        {
          label: 'SKALE Oracle',
          link: '/specifics/oracle/'
        },
        {
          label: 'SKALE IMA Bridge',
          link: '/specifics/bridge/'
        },
        {
          label: 'JSON RPC',
          link: '/specifics/json_rpc/'
        },
        {
          label: 'Solidity',
          link: '/specifics/solidity/'
        },
        {
          label: 'Adcional Infrastructure',
          link: '/specifics/peripheral_infra/'
        }
        

      ]
    }
    ]
  }), react()]
});