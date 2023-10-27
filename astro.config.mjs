import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'My SKALE Guide',
    navbar: {
      network: {
        link: '/network/intro',
        label: 'Network',
        items: [
          {
            label: 'Network',
            items:[
              {
                label:'Introduction',
                link: 'network/intro'
              },
              {
                label:'Native Token',
                link: 'network/sfuel'
              },
            ]
          }
        ]
      },
      setup: {
        link: '/setup/schain_intro/',
        label: 'Setup',
        items: [
          {
            label: 'Setup',
            items:[
              {
                label:'SKALE Chain Intro',
                link: 'setup/schain_intro'
              },
              {
                label:'Wallet Setup',
                link: 'setup/wallet_setup'
              },
              {
                label:'Smart Contract Example',
                link: 'setup/smartcontract_example'
              },
            ]
          }
        ]       
      },
      wallets: {
        link: '/old_organization/specifics/sfuel/',
        label: 'Wallets', 
        items: [
          {
            label: 'Wallets',
            items:[
            ]
          }
        ]      
      },
      bridges: {
        link: '/old_organization/specifics/sfuel/',
        label: 'Bridges',
        items: [
          {
            label: 'Bridges',
            items:[
            ]
          }
        ]         
      },
      libraries: {
        link: '/old_organization/specifics/sfuel/',
        label: 'SDK/Libraries',
        items: [
          {
            label: 'SDK/Libraries',
            items:[
            ]
          }
        ]        
      },
      data: {
        link: '/old_organization/specifics/sfuel/',
        label: 'Data',
        items: [
          {
            label: 'Data',
            items:[
            ]
          }
        ]        
      },
    },
  }), react()]
});