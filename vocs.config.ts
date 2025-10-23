import { defineConfig } from 'vocs'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export default defineConfig({
  title: 'SKALE Docs',
  logoUrl: "/logo.svg",
  iconUrl: "/logo.png",
  description: "Documentation for the SKALE Network",
  theme: {
    colorScheme: "light"
  },
  markdown: {
    remarkPlugins: [
      [remarkMath, { singleDollarTextMath: true, inlineMathDouble: true }]
    ],
    rehypePlugins: [
      [rehypeKatex, { throwOnError: false, errorColor: '#cc0000' }]
    ]
  },
  vite: {
    plugins: [
      {
        name: "redirect-root",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/' || req.url === '/index.html') {
              res.writeHead(302, { Location: '/get-started/skale' });
              res.end();
            } else {
              next();
            }
          });
        },
      }
    ]
  },
  topNav: [
    { text: "Get Started", link: "/get-started/introduction/start-here" },
    { text: "SKALE Chain", link: "/skale-chain/consensus" },
    { text: "Run a Node", link: "/run-a-node/overview" },
    { text: "Build", link: "/build/skale-bridge/overview" },
  ],
  sidebar: {
    "/get-started": [
      {
        text: "Getting Started",
        items: [
          {
            text: "Start Here",
            link: "/get-started/introduction/start-here"
          },
          {
            text: "Mainnet Beta",
            link: "/get-started/mainnet-beta"
          }
        ]
      }
    ],
    "/skale-chain/": [
      {
        text: "SKALE Chain",
        items: [
          {
            text: "Consensus",
            link: "/skale-chain/consensus"
          },
          {
            text: "Block Rotation",
            link: "/skale-chain/block-rotation"
          },
          {
            text: "DDoS Protection",
            link: "/skale-chain/ddos-protection"
          },
          {
            text: "DKG with BLS",
            link: "/skale-chain/dkg-with-bls"
          },
          {
            text: "Elliptic Curve Cryptography",
            link: "/skale-chain/elliptic-curve-cryptography"
          },
          {
            text: "Precompiled Contracts",
            link: "/skale-chain/precompiled-contracts"
          },
          {
            text: "SKL Token",
            link: "/skale-chain/skl-token"
          },
          {
            text: "Snapshots",
            link: "/skale-chain/snapshots"
          },
          {
            text: "Threshold Schemes",
            link: "/skale-chain/threshold-schemes"
          },
          {
            text: "Run a SKALE Chain",
            items: [
              {
                text: "sChain Ownership",
                link: "/skale-chain/run-a-skale-chain/schain-ownership"
              },
              {
                text: "Using SAFE",
                link: "/skale-chain/run-a-skale-chain/using-safe"
              },
              {
                text: "Using Multisig Wallet CLI",
                link: "/skale-chain/run-a-skale-chain/using-multisig-wallet-cli"
              }
            ]
          }
        ]
      }
    ],
    "/run-a-node/": [
      {
        text: "Run a Node",
        items: [
          {
            text: "Overview",
            link: "/run-a-node/overview"
          },
          {
            text: "Run Supernode",
            link: "/run-a-node/run-supernode"
          },
          {
            text: "Run Archive Node",
            link: "/run-a-node/run-archive-node"
          },
          {
            text: "Run Sync Node",
            link: "/run-a-node/run-sync-node"
          },
          {
            text: "Migrate Node with SGXWallet",
            link: "/run-a-node/migrate-node-with-sgxwallet"
          },
          {
            text: "Compliance Requirements",
            link: "/run-a-node/compliance-requirements"
          },
          {
            text: "Hardware Requirements",
            link: "/run-a-node/hardware"
          },
          {
            text: "Swap Limit Fix",
            link: "/run-a-node/swap-limit-fix"
          },
          {
            text: "FAQ",
            link: "/run-a-node/faq"
          },
          {
            text: "Troubleshooting",
            link: "/run-a-node/troubleshooting"
          },
          {
            text: "Node CLI",
            items: [
              {
                text: "Overview",
                link: "/run-a-node/node-cli/overview"
              },
              {
                text: "Changing Node IP",
                link: "/run-a-node/node-cli/changing-node-ip"
              },
              {
                text: "Node SSL Setup",
                link: "/run-a-node/node-cli/node-ssl-setup"
              },
              {
                text: "Releases",
                items: [
                  {
                    text: "v2.0",
                    link: "/run-a-node/node-cli/releases/v2-0"
                  }
                ]
              }
            ]
          },
          {
            text: "Validator CLI",
            items: [
              {
                text: "Overview",
                link: "/run-a-node/validator-cli/overview"
              },
              {
                text: "Self Recharging Wallets",
                link: "/run-a-node/validator-cli/self-recharging-wallets"
              },
              {
                text: "Releases",
                items: [
                  {
                    text: "v1.2.0",
                    link: "/run-a-node/validator-cli/releases/v1-2-0"
                  }
                ]
              }
            ]
          },
          {
            text: "Watchdog",
            items: [
              {
                text: "Overview",
                link: "/run-a-node/watchdog/overview"
              },
              {
                text: "APIs",
                link: "/run-a-node/watchdog/apis"
              }
            ]
          },
          {
            text: "Releases",
            items: [
              {
                text: "3.0.3 Upgrade",
                link: "/run-a-node/releases/3-0-3-upgrade"
              },
              {
                text: "3.1.0 Upgrade",
                link: "/run-a-node/releases/3-1-0-upgrade"
              },
              {
                text: "3.1.1 Upgrade (Local SGX)",
                link: "/run-a-node/releases/3-1-1-upgrade-local-sgx"
              },
              {
                text: "3.1.1 Upgrade",
                link: "/run-a-node/releases/3-1-1-upgrade"
              },
              {
                text: "3.1.2 Upgrade",
                link: "/run-a-node/releases/3-1-2-upgrade"
              },
              {
                text: "4.0.0 Upgrade",
                link: "/run-a-node/releases/4-0-0-upgrade"
              },
              {
                text: "4.0.1 Upgrade",
                link: "/run-a-node/releases/4-0-1-upgrade"
              }
            ]
          }
        ]
      }
    ],
    "/build/": [
      {
        text: "Build",
        items: [
          {
            text: "SKALE Bridge",
            items: [
              {
                text: "Overview",
                link: "/build/skale-bridge/overview"
              },
              {
                text: "Ethereum Bridge",
                items: [
                  {
                    text: "Bridge ETH",
                    link: "/build/skale-bridge/ethereum/bridge-eth"
                  },
                  {
                    text: "Bridge ERC-20 Tokens",
                    link: "/build/skale-bridge/ethereum/bridge-erc20"
                  },
                  {
                    text: "Bridge ERC-721 Tokens",
                    link: "/build/skale-bridge/ethereum/bridge-erc721"
                  },
                  {
                    text: "Bridge ERC-1155 Tokens",
                    link: "/build/skale-bridge/ethereum/bridge-erc1155"
                  }
                ]
              },
              {
                text: "SKALE to SKALE Bridge",
                items: [
                  {
                    text: "Connect SKALE Chains",
                    link: "/build/skale-bridge/skale/connect-schains"
                  },
                  {
                    text: "Bridge ERC-20 Tokens",
                    link: "/build/skale-bridge/skale/bridge-erc20"
                  },
                  {
                    text: "Bridge ERC-721 Tokens",
                    link: "/build/skale-bridge/skale/bridge-erc721"
                  },
                  {
                    text: "Bridge ERC-1155 Tokens",
                    link: "/build/skale-bridge/skale/bridge-erc1155"
                  }
                ]
              },
              {
                text: "Messaging Layer",
                items: [
                  {
                    text: "Message Proxy",
                    link: "/build/skale-bridge/messaging-layer/message-proxy"
                  },
                  {
                    text: "Create Custom Contracts",
                    link: "/build/skale-bridge/messaging-layer/create-custom-contracts"
                  },
                  {
                    text: "Connect Custom Contracts",
                    link: "/build/skale-bridge/messaging-layer/connect-custom-contracts"
                  },
                  {
                    text: "Using Custom Contracts",
                    link: "/build/skale-bridge/messaging-layer/using-custom-contracts"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
})
