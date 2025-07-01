# URL Redirect Analysis for docs.skale.network

## Overview
Analysis of archived URLs from the old docs.skale.network site to create redirect mappings for the new site structure.

## Archived URLs Found (200 Status Codes)

Based on Internet Archive data, here are the functional URLs that need redirect mapping:

## ✅ URLs WITH RECOMMENDED REDIRECTS

### 🔗 Introduction Section → Welcome/How SKALE Works
| Old URL | New URL | Status |
|---------|---------|--------|
| `/introduction/mainnet-beta` | `/how-skale-works/mainnet-beta` | ✅ MATCH |
| `/introduction` | `/welcome/intro-to-skale` | ✅ SIMILAR |
| `/introduction/overview` | `/welcome/get-started` | ✅ SIMILAR |
| `/introduction/skale-and-ethereum-security` | `/how-skale-works/consensus` | ✅ SIMILAR |
| `/introduction/skale-chain-fuel` | `/building-applications/gas-fees` | ✅ SIMILAR |
| `/introduction/skale-chain-types` | `/building-applications/pick-a-chain` | ✅ SIMILAR |
| `/introduction/skale-hybrid-layer` | `/how-skale-works/consensus` | ✅ SIMILAR |
| `/introduction/zero-gas-fees` | `/building-applications/gas-fees` | ✅ MATCH |
| `/introduction/faq` | `/welcome/intro-to-skale` | ✅ SIMILAR |

### 🔗 Develop Section → Building Applications
| Old URL | New URL | Status |
|---------|---------|--------|
| `/develop` | `/building-applications/build-a-dapp` | ✅ SIMILAR |
| `/develop/deployment` | `/building-applications/deploy-on-skale` | ✅ SIMILAR |
| `/develop/faq` | `/building-applications/troubleshooting` | ✅ MATCH |
| `/develop/high-performance-dapps` | `/building-applications/build-a-dapp` | ✅ MATCH |
| `/develop/sfuel` | `/faucet` | ✅ SIMILAR |
| `/develop/sfuel/distribution/api-distribution` | `/building-applications/gas-fees` | ✅ SIMILAR |
| `/develop/sfuel/distribution/proof-of-work-distribution` | `/building-applications/gas-fees` | ✅ SIMILAR |
| `/develop/sfuel/etherbase` | `/building-applications/gas-fees` | ✅ SIMILAR |
| `/develop/sfuel/gas-vs-sfuel` | `/building-applications/gas-fees` | ✅ MATCH |
| `/develop/sfuel/pow-vs-sfuel` | `/building-applications/gas-fees` | ✅ MATCH |
| `/develop/sfuel/proof-of-work` | `/building-applications/gas-fees` | ✅ SIMILAR |
| `/develop/sfuel/sfuel-distribution` | `/building-applications/gas-fees` | ✅ SIMILAR |
| `/develop/sfuel/sfuel-station` | `/faucet` | ✅ MATCH |

### 🔗 Delegators/Validators Section → Run a SKALE Node
| Old URL | New URL | Status |
|---------|---------|--------|
| `/delegators` | `/run-a-skale-node/overview` | ✅ SIMILAR |
| `/delegators/delegation-faq` | `/run-a-skale-node/faq` | ✅ SIMILAR |
| `/validators` | `/run-a-skale-node/overview` | ✅ MATCH |
| `/validators/validator-faq` | `/run-a-skale-node/faq` | ✅ MATCH |

### 🔗 Governance Section → How SKALE Works
| Old URL | New URL | Status |
|---------|---------|--------|
| `/governance` | `/how-skale-works/skl-token` | ✅ SIMILAR |
| `/governance/how-to-vote` | `/how-skale-works/skl-token` | ✅ SIMILAR |
| `/governance/intro-skale-dao` | `/how-skale-works/skl-token` | ✅ SIMILAR |
| `/governance/skale-dao` | `/how-skale-works/skl-token` | ✅ MATCH |
| `/governance/skl-token` | `/how-skale-works/skl-token` | ✅ MATCH |

### 🔗 IMA Section → SKALE Bridge
| Old URL | New URL | Status |
|---------|---------|--------|
| `/ima/1.0.x` | `/skale-bridge/overview` | ✅ MATCH |
| `/ima/1.0.x/access-control` | `/skale-bridge/messaging-layer/connect-custom-contracts` | ✅ SIMILAR |
| `/ima/1.0.x/api/*` | `/skale-bridge/overview` | ✅ SIMILAR |
| `/ima/1.0.x/flows` | `/skale-bridge/overview` | ✅ SIMILAR |
| `/ima/1.0.x/funding-exits` | `/skale-bridge/ethereum/bridge-eth` | ✅ SIMILAR |
| `/ima/1.0.x/getting-started` | `/skale-bridge/overview` | ✅ MATCH |
| `/ima/1.0.x/managing-erc1155` | `/skale-bridge/ethereum/bridge-erc1155` | ✅ SIMILAR |
| `/ima/1.0.x/managing-erc20` | `/skale-bridge/ethereum/bridge-erc20` | ✅ SIMILAR |
| `/ima/1.0.x/managing-erc721` | `/skale-bridge/ethereum/bridge-erc721` | ✅ SIMILAR |
| `/ima/1.0.x/message-proxy` | `/skale-bridge/messaging-layer/message-proxy` | ✅ MATCH |
| `/ima/1.0.x/transferring-eth` | `/skale-bridge/ethereum/bridge-eth` | ✅ MATCH |

## ❌ URLs WITHOUT DIRECT REDIRECTS

These URLs likely represent functionality or documentation that may not have direct equivalents in the new site:

### 🛠️ Miscellaneous
| Old URL | Suggested Action |
|---------|------------------|
| `/recipes` | → `/welcome/get-started` (general redirect) |
| `/tools` | → `/welcome/get-started` (general redirect) |
| `/technology` | → `/welcome/get-started` (general redirect) |

## 📝 IMPLEMENTATION RECOMMENDATIONS

### 1. Exact Matches (High Priority)
These should be implemented as 301 redirects since they have direct content equivalents.

### 2. Similar Content (Medium Priority)
These redirect to the closest equivalent page with similar content.

### 3. General Redirects (Low Priority)
For tool pages and other content without direct equivalents, redirect to the most relevant general page.

### 4. Consider Adding Missing Content
Some specific technical pages might be worth recreating in the new docs structure.

## 🚀 Next Steps

1. **Implement exact match redirects first** - highest SEO value
2. **Add similar content redirects** - good user experience 
3. **Evaluate if any missing sections should be recreated**
4. **Implement general redirects for remaining URLs**
