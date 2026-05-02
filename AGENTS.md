# Agent Guidelines

## Codebase Layout

```
/workspace/
├── AGENTS.md                 ← You are here
├── README.md                 ← Project README
├── docs.json                 ← Mintlify navigation config (all page structure)
├── custom.css                ← Mintlify custom styles
├── _snippets/                ← Reusable MDX includes (chain addresses, AI integrations)
│
├── get-started/              ← Top-level introduction & onboarding
│   ├── skale.mdx             ← Homepage — agentic commerce + programmable privacy
│   ├── skale-expand.mdx      ← Multi-ecosystem private compute
│   ├── agentic-commerce/     ← Agentic commerce chain deep-dive
│   │   └── skale-agentic-commerce.mdx
│   ├── programmable-privacy/ ← Programmable privacy intro
│   │   └── skale-programmable-privacy.mdx
│   ├── quick-start/          ← Skale-on-Base, Skale-on-Ethereum, go-live, testnet tokens
│   ├── skl-token/            ← SKL token economics & staking
│   ├── agentic-builders/     ← x402 startup guide, facilitators, ERC-8004
│   ├── build-with-ai/        ← MCP server, llms.txt, best prompts, SKALE skills
│   └── resources/            ← Official links, governance
│
├── cookbook/                 ← Step-by-step tutorials
│   ├── deployment/           ← Foundry & Hardhat setup
│   ├── smart-contracts/      ← Deploy ERC-20, ERC-721, ERC-1155, verify contracts
│   ├── privacy/              ← Encrypted & conditional transactions
│   ├── x402/                 ← Facilitator setup, accepting/buying x402 payments
│   ├── mpp/                  ← MPP: accepting, gasless, confidential payments
│   ├── facilitators/         ← 3rd-party facilitator integrations (autoincentive, corbits, kobaru, payai, primer, relai, x402x, ultravioleta)
│   ├── agents/               ← Build an agent, open wallet with SKALE CLI
│   └── native-features/      ← RNG, gasless transactions
│
├── developers/               ← Technical developer documentation
│   ├── integrate-skale/      ← Connect, buy credits, deploy first contract
│   ├── resources/            ← Chain list, JSON-RPC API, EVM differences, gas fees
│   ├── programmable-privacy/ ← Deep dives: encrypted TX, conditional TX, re-encryption, confidential tokens
│   ├── sdks/                 ← BITE Solidity, BITE JS, MPP SDK, SKALE CLI
│   ├── skale-bridge/         ← IMA bridge: Ethereum↔SKALE, SKALE↔SKALE, messaging layer
│   └── elliptic-curve-cryptography, threshold-schemes, dkg-with-bls
│
├── skale-chain/              ← Chain internals
│   ├── introduction, block-rotation, consensus, ddos-protection
│   └── precompiled-contracts, snapshots
│
├── chain-types/              ← AppChain, Credit Chain, Zero-Gas Chain
│
├── validators/               ← Node operations
│   ├── supernode-overview, run-supernode, compliance, faq, troubleshooting
│   ├── releases/             ← Upgrade guides v3.x → v4.x
│   ├── node-cli/             ← Node CLI overview, IP change, SSL, releases
│   ├── validator-cli/        ← Validator CLI, self-recharging wallets
│   └── watchdog/             ← Monitoring: overview, APIs
│
└── node-operations/          ← Additional node docs (tombstoned/redirects via docs.json)
```

> **Note**: This is a Mintlify site. All pages use `.mdx` format with JSX components (`Card`, `CardGroup`, `Note`, `Accordion`, `AccordionGroup`, `CodeGroup`, `Steps`, etc.). Navigation and redirects are defined in `docs.json`. Never reference raw `.mdx` filenames — use the path slug as listed in the navigation.

---

## Product Pillars (What's Important)

### 🧩 Programmable Privacy

SKALE's **primary differentiator** — the only EVM blockchain with compliance-capable privacy built into consensus, not appended as a layer. Four features:

| Feature | What It Does |
|---------|-------------|
| **Encrypted Transactions** | Hide transaction payloads during mempool and consensus. MEV resistance by design. |
| **Conditional Transactions (CTX)** | Smart contracts request decryption on-demand — sealed-bid auctions, private voting, etc. |
| **Confidential Tokens** | ERC-20 tokens with fully encrypted balances. Privacy-preserving DeFi, native. |
| **Re-encryption** | Encrypt for specific viewers. Selective disclosure via threshold + ECIES encryption. |

Powered by **BITE** (Blockchain Integrated Threshold Encryption) — threshold encryption in the consensus layer via DKG/BLS. No ZK circuits, no TEEs, no trusted third parties.

Docs paths:
- `/get-started/programmable-privacy/skale-programmable-privacy` — Introduction
- `/developers/programmable-privacy/encrypted-transactions` — Architecture + API
- `/developers/programmable-privacy/confidential-tokens` — Encrypted balance tokens
- `/cookbook/privacy/encrypted-transactions` — Walkthrough

### 🤖 Agentic Commerce

SKALE positions as **the economic layer for autonomous agents**. Key protocols:

| Protocol | Purpose |
|----------|---------|
| **x402** | HTTP `402 Payment Required` — agents pay for APIs/services autonomously |
| **MPP** | Machine Payments Protocol — gasless agent-to-agent payments |
| **ERC-8004** | Onchain agent identity, reputation, and capability verification |

Agentic commerce requires three things only SKALE provides together: **privacy** (agents keep intent hidden), **zero gas fees** (agents don't manage gas), and **horizontal compute** (spin up dedicated sChains as agent swarms scale).

Docs paths:
- `/get-started/agentic-commerce/skale-agentic-commerce` — Deep-dive
- `/cookbook/agents/build-an-agent` — Full agent development guide
- `/cookbook/x402/facilitator` — Run the settlement layer
- `/get-started/agentic-builders/start-with-erc-8004` — Agent identity

### 💸 Cost-Effective Compute & UX (Zero Gas Fees)

Zero gas fees are a **product feature**, not just a cost optimization. End users never hold gas tokens, never top up, never think about gas. Powered by:
- **EIP-3009** `TransferWithAuthorization` — gasless meta-transactions
- **SFuel** — chain-native gas distribution model
- **Credit Chains** — gas consumed against prepaid credit, not per-tx balances

This unlocks: onboarding non-crypto users, autonomous agent operations, high-frequency microtransactions, and enterprise workflows where gas management is a blocker.

Docs paths:
- `/concepts/gas-fees` — Zero gas fee model
- `/chain-types/credit-chain` — Credit chain payments
- `/chain-types/zero-gas-fee-gasless-chain` — Fully gasless configuration
- `/cookbook/mpp/gasless-payments` — Gasless MPP payments guide

### 📈 Horizontal Scalability

SKALE scales by adding more chains, not by making a single chain bigger. Each **SKALE Chain** is an independent Layer 1 with dedicated validators. Validators run **every** chain simultaneously via containerization — no chain selection games.

- Deploy dedicated sChains as demand grows (agent swarms, high-traffic games, L2 settlement)
- Each chain: ~1,500 TPS, 1-2s finality, full EVM compatibility
- No contention, no shared mempool, no cross-chain congestion
- IMA bridge connects chains trustlessly for asset/message passing

Docs paths:
- `/skale-chain/introduction` — Chain architecture
- `/developers/run-a-skale-chain/intro-to-schains` — Deploying a chain
- `/chain-types/appchain` — Dedicated app chain
- `/developers/skale-bridge/messaging-layer/message-proxy` — Cross-chain messaging
- `/developers/run-a-skale-chain/customize-schain` — Customization

### 🔧 Enhanced EVM

SKALE extends the EVM with native features no other chain provides, deployable via precompiled contracts — no oracles, no middleware:

| Feature | What It Does |
|---------|-------------|
| **Native RNG** | VRF-based verifiable random numbers via precompile. No oracle dependency. |
| **Filestorage** | Onchain file storage precompile — store and retrieve data directly in smart contracts. |
| **IMA Bridge** | Trustless BLS-threshold cross-chain bridge for assets, messages, and custom contract calls between SKALE ↔ Ethereum ↔ SKALE. |
| **Gasless Precompile** | Execute transactions without gas via `Gasless` precompile — agents and users transact freely. |
| **BITE Encryption** | Threshold-encrypted transactions via precompiled contracts — privacy without custom compilers. |

Docs paths:
- `/cookbook/native-features/rng-get-random-number` — RNG guide
- `/cookbook/native-features/send-gasless-transaction` — Gasless tx
- `/developers/skale-bridge/overview` — IMA bridge
- `/skale-chain/precompiled-contracts` — Precompile reference
- `/developers/programmable-privacy/intro` — BITE encryption

---

## Terminology Standards

### Naming

| Correct | Incorrect | Reason |
|---------|-----------|--------|
| SKALE | Skale, skale | Always uppercase |
| BITE | BITE Phase I, BITE Phase II | Use descriptive names |
| MPP | mpp, Mpp | Always uppercase |
| IMA | ima, Ima | Always uppercase |
| ERC-20 | ERC20, Erc20 | Hyphenated |
| EIP-3009 | EIP3009, eip3009 | Hyphenated |
| x402 | X402, x 402 | Lowercase x, no space |
| onchain | on-chain, on chain | One word, no hyphen |

### Descriptive Names Over Phases

When referencing BITE features, use **descriptive names**, never phase numbers:

- ✅ **BITE encryption** for confidential transaction amounts
- ✅ **Confidential tokens** with native privacy
- ❌ BITE Phase I encryption
- ❌ Phase II confidential tokens

### Tone

- **Confidential** — default term for product/marketing contexts (e.g., "confidential tokens")
- **Private** — only for absolute cryptographic guarantees
- **Encrypted** — technical term describing the mechanism

---

## Resource Links Policy

When adding resource/reference links to any page footer:

- ✅ **Link to external 3rd-party docs** that enhance core content (Ethereum docs, OpenZeppelin, Viem/ethers)
- ✅ **Internal SKALE cross-links** — navigates within `/docs.skale.space`
- ❌ **Never link to Mintlify documentation** — we use it, we don't sell it
- ❌ **Never link to tools we built on top of** — no Mintlify MCP docs, etc.

---

## Prompts & Skills

The repo at `.agents/skills/` contains reusable SKALE-specific skills (e.g., `glossary` with full terminology and formatting standards). The root also exposes documentation for AI consumption:

- **llms.txt** → `https://docs.skale.space/llms.txt` — Full docs in AI-consumable format
- **MCP Server** → `https://mcp-docs.skale.space` — SKALE MCP server
- **SKALE Skills** → `/get-started/build-with-ai/using-skale-skills` — Copilot prompts

---

## Key Architecture Details

- SKALE is a **Layer 1** network of SKALE Chains anchored to a beacon chain (currently Ethereum mainnet and Base)
- Validators run all chains simultaneously via **containerized SKALE Chains** (no chain selection)
- Consensus is **Asynchronous Binary Byzantine Agreement** with BLS threshold signatures
- Blocks rotate deterministically among validator nodes for **DDoS protection**
- Native precompiled contracts for RNG (VRF-based), gasless transactions, and encryption
- Chain types: **AppChain** (dedicated), **Credit Chain** (gas-as-credit), **Zero-Gas** (fully gasless)
