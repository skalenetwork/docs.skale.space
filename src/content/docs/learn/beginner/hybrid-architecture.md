---
title: Hybrid Architecture
description: SKALE's Unique Hybrid Architecture
---

In the evolving blockchain space, SKALE Network delivers a pioneering architecture that
merges the robustness of Layer 1 solutions with the enhanced scalability of Layer 2 solutions.
With each SKALE Chain serving as a distinct AppChain, SKALE effectively leverages the security provisions
of the Ethereum mainnet and introduces an unparalleled degree of customization and horizontal scaling.

## Blockchain Layers Explained

To fully comprehend the uniqueness of SKALE’s architectural model, developers should be acquainted with the
layer terminology in blockchain technology.

### Layer 1: The Settlement Layer

Layer 1 is the core blockchain protocol, also called the settlement layer. This base layer handles the
recording, verification, and storage of transactions. Examples of Layer 1 blockchains include Ethereum and
Bitcoin. While Layer 1 solutions excel in security, they often encounter scalability challenges due to their
inherent design.

### Layer 2: The Scalability Layer

Layer 2 is an auxiliary framework built atop a Layer 1 blockchain. The primary function of Layer 2 solutions
is to augment the blockchain’s transactional capacity and reduce associated costs. Layer 2 solutions process
transactions off-chain before consolidating and committing the results to the Layer 1 blockchain. This mechanism
significantly enhances transactional throughput and efficiency but at the cost of centralization, data
availability, and computational power.

### Layer 3: The Application Layer

Layer 3, an emerging concept in blockchain technology, aims to facilitate the customization of the underlying
blockchain infrastructure. As an application layer, Layer 3 is secured by Layer 2 and further enhances custom
scalability and features by providing Blockchain-as-a-service provisioning. However, this scalability and
customization are at the cost of a weakly-trusted Layer 3.

## SKALE: Hybrid Layer 1 and Layer 2 Solution

Unlike standard blockchain networks operating strictly as either Layer 1 or Layer 2 solutions,
SKALE Network presents a unique hybrid architecture. Each SKALE Chain functions as a base layer
that handles the recording, consensus, verification, and storage of transactions (Layer 1) without
consolidating or rolling results to Layer 1.

Yet each SKALE Chain is built atop Ethereum, which is a Layer 1 blockchain, for security (BLS and DKG), block
and message signing, and validator-node orchestration (creation of nodes, rotation of nodes in a chain, and
administration of validators and nodes). These approaches enable SKALE Chains, like other Layer 2s, to harness
the security provisions of Ethereum, a Layer 1 blockchain.

This hybrid architecture implies that SKALE Chains can swiftly process transactions with the efficiency of
Layer 2 solutions while benefiting from the robust security and decentralization offered by the Ethereum
mainnet, a characteristic of Layer 1 solutions. This groundbreaking combination mitigates the common
compromise between security and scalability experienced in conventional blockchain networks.

And that’s not all: SKALE Network even offers the customization and features promised by
Layer 3 blockchain-as-a-service, called [AppChains](/learn/beginner/app-chain) and [HubChains](/learn/beginner/hub-chain).

## Conclusion

With the innovative amalgamation of Layer 1 and Layer 2 characteristics, alongside its unique AppChain model,
SKALE presents an ecosystem that offers developers a highly secure, scalable, and customizable platform
for application development. This leap in blockchain technology enables developers to create applications that
can meet user needs more effectively, marking a significant stride in the evolution of blockchain applications.
