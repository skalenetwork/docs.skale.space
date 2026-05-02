---
name: glossary
description: >
  Comprehensive glossary of SKALE ecosystem terminology including core
  infrastructure, protocols, privacy/security terms, BITE-specific features,
  and formatting standards.
---

# Glossary

## Definitions

### Core Infrastructure

**SKALE** - A modular Layer 1 blockchain network that provides Ethereum-native scaling via elastic sidechains (SKALE Chains). Features include zero gas fees, instant finality, and EVM compatibility while anchoring security on Ethereum mainnet.

**SKALE Chain** - An EVM-compatible elastic blockchain running on the SKALE Network. Each chain operates independently with its own state, can be customized for specific applications, and connects to Ethereum via the IMA bridge.

**SKALE Manager** - The onchain management contract deployed on Ethereum mainnet that coordinates the SKALE Network. Handles validator registration, staking, chain creation, and network economics.

**SKALE Ethereum** - SKALE's connection to Ethereum mainnet for anchoring security, staking, and interchain messaging. Not to be confused with "Ethereum on SKALE."

**SKALE Base** - A SKALE Hub Chain connected to the Base L2 network, providing fast finality and zero gas fees for Base ecosystem applications.

### Protocols & Standards

**BITE (Blockchain Integrated Threshold Encryption)** - SKALE's privacy layer that makes transactions invisible, value confidential, and frontrunning impossible — all while staying fully EVM-compatible. Encryption, confidentiality, and MEV resistance, no compromises.

**MPP (Machine Payments Protocol)** - Money that moves itself. AI agents, bots, and IoT devices pay each other autonomously — no gas fees, no keys in the loop, total privacy by default. The payment rail for the autonomous economy.

**IMA (Interchain Messaging Agent)** - SKALE's trustless bridge system for transferring assets and messages between SKALE Chains and Ethereum mainnet. Uses BLS threshold signatures for security.

**x402** - Pay-per-request for the internet. HTTP 402 reimagined: APIs charge per call, clients pay automatically, access is instant. Micropayments at web scale, no subscriptions, no friction.

**ERC-8004** - Identity and reputation for autonomous agents. Trustless, self-sovereign, verification-native. Agents verify each other on the spot — no oracles, no intermediaries, no blind handshakes.

**ERC-20** - The Ethereum standard for fungible tokens. Defines a common interface for token transfers, allowances, and balance queries.

**EIP-3009** - An Ethereum Improvement Proposal defining "transfer with authorization" - allowing gasless token transfers where the recipient pays transaction fees via a signed authorization.

### Privacy & Security Terms

**onchain** - Data or transactions recorded directly on a blockchain ledger. Always written as one word, no hyphen.

**Confidential** - Privacy level implying strong protections for sensitive data; commercially acceptable term for business contexts. Used for features like confidential tokens where privacy is a core feature but data may still be technically recoverable.

**Private** - Absolute privacy implying irreversibility and cryptographic guarantees. Use sparingly, typically when describing zero-knowledge proofs or similar technologies.

**Encrypted** - Data protected via cryptographic algorithms during transmission or storage. Technical term describing the mechanism rather than the privacy guarantee.

**Gasless** - User experience where transaction gas fees are paid by a third party (relayer) rather than the user. Implemented via EIP-3009 authorizations or meta-transactions.

### BITE-Specific Features

**BITE encryption** - Transactions that vanish in transit, then reappear on execution. Addresses and amounts are encrypted in the mempool — MEV bots see nothing, only the chain knows.

**Confidential tokens** - Invisible value that moves silently. Balances and amounts stay shielded even after execution — privacy baked into the token itself, not bolted on. Like cash, but programmable.

**Conditional Transactions (CTX)** - Encrypted intents that unlock themselves. Store secrets onchain, set conditions for decryption, let Solidity pull the trigger. No reveal phases, no user intervention — just automated privacy.

**Threshold Encryption** - Secrets that no single node can spill. Decryption requires a quorum of validators — decentralized custody, no single point of compromise, zero trust in any one party.

## Formatting Standards

### Capitalization Rules

- **SKALE** - Always uppercase in all contexts
- **BITE, MPP, IMA** - Always uppercase, spell out on first reference
- **ERC-20, ERC-8004, EIP-3009** - Hyphenated, all caps
- **x402** - Lowercase x, no spaces

### Usage Guidelines

- Use **confidential** for product/marketing contexts
- Use **private** only for absolute cryptographic guarantees
- Use **gasless** for UX descriptions, **EIP-3009** for technical implementation
- Always use **onchain** (one word, no hyphen)

## Examples

❌ **Avoid:**
- "BITE Phase I encryption"
- "Phase II confidential tokens"
- "Skale" or "skale" (always SKALE)
- "Erc20" or "ERC20" (always ERC-20)
- "eip3009" or "EIP3009" (always EIP-3009)
- "X402" or "X 402" (always x402)
- "mpp" or "Mpp" (always MPP)
- "ima" or "Ima" (always IMA)

✅ **Use:**
- "onchain execution"
- "BITE encryption for confidential transaction amounts"
- "Confidential tokens with native privacy"
- "SKALE Network"
- "ERC-20 token standard"
- "EIP-3009 transfer with authorization"
- "x402 payment protocol"
- "Machine Payments Protocol (MPP)"
- "Interchain Messaging Agent (IMA)"
