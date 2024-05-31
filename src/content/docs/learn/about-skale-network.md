---
title: About SKALE Network
description: Overview of the SKALE Network as a whole
prev: false
---

## What is SKALE Network?

The SKALE Network is an open-source, Ethereum-native multichain network built to scale Ethereum dApps with a focus on high-throughput, fast finality, and zero gas fee transactions via the native gas token sFUEL.

[Checkout the network statistics and growth](https://skale.space/stats)

## What problems does SKALE solve?

### Poor User Experience

Blockchains generally require end-users to pay fees, have slow speed or high latency, in addition to having limited connectivity to other chains.

### Scalability Trilemma

The scalability trilemma occurs from the difficulty in being fast, secure, and decentralized. You can learn more about the scalability trilemma on the [Ethereum Mainnet website](https://ethereum.org/en/roadmap/vision/).

### Flexible Customization and Scalability

Networks are generally strict, lack customization and scalability due to their monolithic nature, and can impose limitations directly on what can be built with a low block gas limit.

## What does SKALE offer?

-   **Zero gas fees** - by design, developers and end-users never pay for transactions.
-   **Instant finality** - the fastest chain to finality. Time to finality = blocktime.
-   **High performance**
    -   **Throughput** - Baseline of 400 transactions per second (tps) and up to 700 tps at peak.
    -   **High block gas limit** - 280 million block gas limit allowing optimal throughput and complex transactions/smart contracts to be executed.

*   **Purpose-built chains**- app-chains and hub-chains for customization and and horizontal scaling.
*   **Native bridge** - Fast flexible, offering 18 second finality between chains. Direct support for popular token standards such as ERC-20, ERC-721, and ERC-1155 with additional flexibility for passing any arbitrary data through the low-level messaging protocol.
*   **Native oracle** - decentralized and transaction free oracle enabling developers to read off-chain data.
*   **Decentralization and fault tolerance** - chains supported by 16 randomly chosen and rotated SKALE Validator nodes, with a BFT tolerance of 1/3.
*   **Layered Blockchain Security** - unique hybrid Layer 1/Layer 2 architecture that partially derives security from Ethereum and with the performance and decentralization of a Layer 1.

## How does SKALE does this?

The SKALE Network enables dApp developers to access validator-operated nodes' compute power and storage to run fast, containerized, EVM-compatible chains called SKALE Chains.

SKALE chains can exchange transactions or messages with other SKALE Chains and the Ethereum Mainnet through the native validator secured bridge (IMA), allowing dApp developers to use SKALE for powering their dApps while enabling token and message transfers to and from Ethereum or other chains.

With SKALE, dApps run zero-cost transactions on dedicated Proof-of-Stake chains distributed across a randomly chosen set of 16 nodes.

Decentralized validator organizations run and maintain SKALE Nodes, providing distributed computing power and storage to the SKALE Network.

Built on the foundation it services, SKALE Network is managed and operated by over 35 smart contracts deployed on Ethereum mainnet that make up SKALE Manager.

These smart contracts control network functions such as chain creation, validator registration, node selection, node rotation, staking, bounty payment, slashing, and more.

Network users such as validators, delegators, and dApp Developers exchange SKL tokens to provide stake and access network services.

The [SKALE validator community represents over 45 independent operators](https://skale.space/blog/validator-list-for-skale) running over 150 nodes, and the SKALE Mainnet has been live for over 300 days without interruption.

SKALE Network uses a [unique combination of technologies and cryptographic-based approaches](https://skale.space/blog/technical-highlights) to achieve scalability, security, interoperability, and progressive decentralization:

| Technology                                               | Impact                                                                                                                                                                                 |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pooled Validation Proof-of-Stake                         | [Scalable security model across validators and delegators](https://skale.space/blog/the-skale-network-why-randomness-rotation-and-incentives-are-critical-for-secure-scaling)          |
| Hybrid container architecture                            | [Agile allocation of on-demand composable compute resources across the network](https://skale.space/blog/containerization-the-future-of-decentralized-infrastructure)                  |
| Threshold Cryptography                                   | Supermajority signature signing with ABBA consensus supports Byzantine Fault Tolerance and resolves [data availability](https://skale.space/blog/the-data-availability-problem) issues |
| Trusted-Execution Environment                            | [Fast block signing and multiple chain support using threshold cryptography](https://github.com/skalenetwork/SGXWallet)                                                                |
| Asynchronous Binary Byzantine Agreement (ABBA) Consensus | [Mathematically provable, fast-finality, leaderless, and Byzantine fault tolerant](https://skale.space/blog/skale-consensus)                                                           |
| Ethereum Network                                         | Public, open-source, and decentralized operation of the SKALE Network via SKALE Manager contracts                                                                                      |

## SKALE Chain Types

Every SKALE Chain is identical in capability. This includes areas like throughput, storage, and size. However, SKALE Chains are generally put into one of two buckets: AppChains or HubChains. Additionally, all chains regardless of their bucket maintain the same developer setup such as: sFUEL for the gas token, permissioned contract deployment, a connection to the Ethereum Mainnet to name a few.

### AppChain

Dedicated SKALE Chains or AppChains are SKALE Chains in use by one application only. AppChains are great for high performance projects doing hundreds of transactions per second or for enterprises looking for their own dedicated location for blockchain compute.

[Learn more here](/learn/beginner/app-chain)

### HubChain

SKALE Hubs or HubChains are community-operated SKALE Chains that function as shared compute environments and Web3 service-layers divided by their specific use-case. A HubChain is a great place for new projects to access a smaller amount of EVM compute or work with existing projects and partners to quickly get up and running.

[Learn more here](/learn/beginner/hub-chain)

## Access a SKALE Chain

### Using SKALE dApps

Are you looking to use a dApp or platform on SKALE? Checkout the new [SKALE Portal](https://portal.skale.space) where you can explore the various dApps and hubs available on SKALE.

### Build a SKALE dApp

If you are looking to build a dApp on SKALE, head over to the [Quick Start](/quick-start) to learn about more about building on SKALE.

## Engage with the SKALE Network Community

-   _Blog_ - Follow and subscribe to the SKALE Network blog and newsletter [here](https://skale.space/blog)
-   _Discord_ - For development and validator-focused discussions, join the #dev-talk channel in [SKALE's Discord server](https://discord.com/invite/gM5XBy6)
-   _Forum_ - [For general questions or participation in governance discussions](https://forum.skale.network)
-   _Telegram_ - For general and non-technical discussions, [join the Telegram group](https://t.me/skaleofficial)
-   _X (formerly Twitter)_ - Follow [@SkaleNetwork](https://twitter.com/SkaleNetwork) on X (formerly Twitter).
-   _YouTube_ - For video tutorials and related content, subscribe to the SKALE [YouTube channel](https://www.youtube.com/skale).
