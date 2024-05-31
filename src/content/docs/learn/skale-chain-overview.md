---
title: SKALE Chain Overview
description: Overview of a SKALE Chain
---

Every chain in the SKALE Network -- SKALE Chain -- is like a mini-Ethereum.
A SKALE Chain, or sChain for short, is designed to make accessing Web3 compute simpler and more cost-effective.
You can access EVM compute power, decentralized database storage, and other
functionality to help not only power your dApps but allow them to scale in a effectively with zero transaction fees.

## What makes a SKALE Chain

SKALE Chains are powered by dockerized containers provisioned across 16 randomly selected nodes from a network of >120 nodes. Nodes are operated by over 45 independent validator organizations. Each node supporting SKALE Chains is secured by Proof-of-Stake from the validator and delegator communities.

Every node in the SKALE Network dynamically supplies containerized Web3 compute resources that work in concert with other nodes. A SKALE Chain involves 16 randomly chosen nodes that each run containerized network clients with EVM ([skaled](https://github.com/skalenetwork/skaled)) and other functions. All 16 of these skaled containers broadcast network messages, share transactions and blocks, and other cryptographic data with each other. These containers represent powerful and scalable instances of an Ethereum network, receiving Web3 transactional messages from clients and end-users, organizing them into blocks using an ultra-fast mathematically proven consensus called Asynchronous Binary Byzantine Agreement.

## How to work with a SKALE Chain

Each SKALE Chain powers dApps and their communities, providing dedicated Web3 compute resources to support dApp EVM execution and transactions from end-users.

Using SKALE is easy! Don't worry about [SGX enclaves](https://github.com/skalenetwork/SGXWallet), [BLS threshold signatures](https://github.com/skalenetwork/libBLS), and [Asynchronous Binary Byzantine Consensus](https://github.com/skalenetwork/skale-consensus) - all this technology works under the hood to provide dApp developers with scalable and easy to run dApp-specific blockchains.

You use your SKALE Chain as you work with Ethereum. SKALE Chain owners have a set of 16 available endpoints to receive Web3 transactions and data. Plug an endpoint into your Web3 client or developer config files, and you are using SKALE.

## SKALE Chain Features

-   **Decentralized and Permissionless network** where dApps run on chains supported by a randomly selected group of validator nodes, and nodes are swapped from time to time. The entire Network runs from the Ethereum Network to provide a permissionless way to access Web3 cloud resources.
-   **Flexible Chain Administration** that can be operated by a single entity, community, or a DAO. This provides a range of decentralization options for funding, operating, and maintaining SKALE Chains.
-   **Easy Cross-Chain Integration** using Ethereum and SKALE IMA – allows users to move tokens, state, and messages between Ethereum and SKALE Chains, and between SKALE Chains. This bridge is secured by stake, secure enclaves, and BLS Threshold cryptography.
-   **Web3 RPC API** so existing dApps can migrate to SKALE Chains with minimal change and developers can use Ethereum tooling such as Hardhat, Foundry, Metamask, Remix, etc.
