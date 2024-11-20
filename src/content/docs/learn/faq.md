---
title: FAQ
description: SKALE Network Frequently Asked Questions
---

## General

### How does the SKALE Network work?

The SKALE Network consists of a large pool of validator supernodes, all running concurrently and independently, validating transactions within the SKALE Chains they oversee. These supernodes coordinate with a set of smart contracts that run on the Ethereum mainnet called SKALE Manager. SKALE Manager includes SKALE Token that governs its issuance and how rewards get distributed to validators and delegators.

Developers can attain the size chain (small, medium, and large), chain duration (180, 365, 730 days i.e. 6, 12, 24 months), and then stake SKL tokens to complete the provisioning of the chain. These tokens get staked into SKALE Manager on the Ethereum mainnet. Each month, a set portion of tokens from this developer's stake move into a bounty pool which is then used to reward the validators and delegators within the network. An inflation event occurs each month whereby new SKALE tokens are created, which gets pushed into the bounty pool for reward to validators and delegators.

For example, suppose there are a thousand validator supernodes in the network and they all perform in accordance with the service parameters. In that case, they will each participate in the monthly proceeds from the bounty pool, which includes a portion of the SKALE Chain token stakes plus the inflation/issuance amount. Note that the distribution to the validators isn't necessarily shared equally as there is a modifier component that adjusts the payout based on the stake duration. Supernodes with tokens that are locked for twelve months, for example, will receive a greater percentage than those locked up for three or six months.

### How does the network work from an operational and governance perspective? x

The SKALE Network serves as a custodial execution and storage layer (Layer 2) for the Ethereum mainnet. Whereas non-custodial approaches use a system of fraud proofs to allow funds to move between chains, SKALE makes use of BLS threshold signatures, deposit boxes within the Ethereum mainnet, and other mechanisms to allow for custodial ownership and use within the network (which allows it to inherit security guarantees from the Ethereum mainnet but provide the performance inherent in a Layer 2 solution).

The stakes from the validators, developers, and the token inflation, are coordinated through SKALE Manager contracts on Ethereum mainnet and SKALE supernodes in the SKALE Network.

This approach is different from other Layer 2 models that attempt to use mainnet interactions to run verification or fraud proofs. SKALE uses the Ethereum mainnet for staking and other mechanistic operations in a way that's better attuned to creating a robust and trustworthy Layer 2 network. SKALE will also support BLS Rollups for use cases that require complete reliance on Ethereum Mainnet custody.

### What benefits do virtualized nodes and supernodes containerization provide? x

Each SKALE Chain comprises a collective of randomly appointed virtualized node that run a containerized SKALE EVM-client daemon (skaled) and SKALE ABBA-based consensus algorithm. Supernodes in the SKALE Network aren't restricted to operating a single chain but instead can support multiple chains via virtualized nodes. This multiplex capability is made possible via a containerized node architecture deployed on each supernode in the network. Each supernode is virtualized and can participate as a validator via this node architecture for an independent number of SKALE Chains. Chains sizes can be small, medium, or large, with a small chain using 1/128 of a supernode's resources, a medium using 1/8 of the resources, and a large using the total amount. Medium SKALE chains are available at present but the other sizes will be made available in the near future.

The nodes virtualization is enabled via an innovative containerized architecture that provides industrial-grade performance and optionality for decentralized application developers – performance and flexibility that's similar to traditional centralized cloud and microservice systems. Containers are divided into several main components encapsulated via a dockerized Linux OS, allowing each supernode to be hosted in an OS-agnostic manner.

### What differentiates the SKALE token from others? x

SKL is a utility token that serves as a fundamental mechanism in the security of the network. A significant amount of tokens are staked into the network by validators and delegators as provided by chain sponsors for the provision of SKALE chains. The four primary functions of the SKL token include:

**Security of and staking in the network**

SKL token holders (delegators) stake their SKL tokens to validators who run supernodes that make the SKALE network function by validating blocks, executing smart contracts, and securing the network. They're rewarded with SKL tokens for their efforts.

**.**Sponsorship of SKALE Chains\*\*

Developers, DAOs, and other chain sponsors provision their subscription access to SKALE Chains using SKL tokens. SKALE Chains can be provisioned in several sizes and durations with larger chains and longer durations necessitating larger deposits of SKL tokens.

**Rewards for validators and delegators staking their tokens**

Validator and delegator rewards are accumulated on a monthly basis, based on developer stake for chains and monthly inflation of tokens.

**Governance and voting**

SKL tokens are intended to be used for onchain voting as the means to control all economic parameters of the SKALE Network.

More details about the SKALE token are here: https://skale.network/token/

### What's a SKALE Chain? x

A SKALE Chain is an Ethereum native and Ethereum-compatible chain that provides developers with increased scalability, faster throughput, and zero-gas transactions over Ethereum mainnet transactions. SKALE Chains provide EVM compute power, decentralized database storage, and other functionality to help not only power dApps but allow them to scale in a cost-efficient manner. The SKALE Network unique Proof of Stake model and operational ties with the Ethereum mainnet provides the security guarantees of Ethereum with the performance and cost efficiency of a Layer 2 solution.

### What's the governing body for the SKALE Network?

The governing body for the network is the N.O.D.E. Foundation. The Foundation believes that validators must play a primary role in policing. Given their responsibility to the network, validators are highly incentivized to act in their best interest in guarding and preserving the integrity of the network.

The Network of Decentralized Economics (N.O.D.E.) Foundation based in Liechtenstein has been created to carry out the mission of supporting the SKALE Network. The SKALE Network is designed to support businesses, people, organizations that run on the open internet.

The SKALE Network is governed by its code which includes the SKL token. Onchain voting will be required to change any economic principles of the protocol.

The Foundation will support the network by electing a diverse set of Network Representatives. These representatives will ideally comprise dApp developers who run SKALE Chains, validators who run SKALE Supernodes, independents such as investors who helped kickstart the network economics, and developers/representatives that actively build, maintain, and evolve the codebase. These representatives will serve the community by facilitating on-chain voting, grants, and budget/treasury decisions. The representatives will be selected by the Foundation initially; however, future elections will be held via a variant of on-chain voting by token holders to choose representatives that facilitate on-chain voting.

Ten percent of the total pool of SKL tokens is allocated to the Foundation and is vested over seven years to provide it with a budget and resources to fulfill its mission.

### When are Governance proposals scheduled?

The process for governance proposals is still under development. Look for future updates in the announcement channels as well as on telegram [here](https://t.me/skalefoundation).

The Product Team is working on the plans, [see the current roadmap here](https://github.com/orgs/skalenetwork/projects/6/views/39).

### Why is the SKALE token an ERC777?

The SKALE Token (SKL) is based on the ERC-777 token standard but with several key improvements. One of these improvements include the removal of ERC 777 functions which have created security issues in the past. Other improvements include the addition of functions that better support validators and delegators (those who delegate tokens to validators in return for a portion of the validator payout).

Specifically, the ERC-777 standard offers unique pre-transfer checks that facilitate locking and delegation mechanisms within the SKALE Network while being backward compatible with ERC-20. The added benefit is that managing ownership over a delegator's token is simplified. With ERC-777, a delegated token never leaves the user's wallet – instead it's simply locked from any further actions until such time as the lock is released.

The locking feature of the ERC-777 provided the flexibility necessary to work well within the SKALE Manager, which consists of over 35 Solidity contracts that run on the Ethereum mainnet, and which manages the SKL token, the validator/delegator workflow, and SKALE Chain sponsorship and staking.

More details about the SKALE token are here: https://skale.space/token

### Where can I see the token schedule?

The token schedule is here: https://supply.skale.network/supply/index.html :::note[Note] month 0 is Oct. 2020. :::

### What's an epoch?

One epoch on SKALE equals **one-month calendar period** of network activity. Validator and delegator rewards are calculated and distributed at the end of each epoch. Epochs start on the 1st day of each month and end on the last day of each month.

Please note that the delegation period can be longer than an epoch.

### Has SKALE conducted any audit of its code?

SKALE Manager and IMA contracts are periodically audited by third parties and have been audited independently by ConsenSys Diligence, Quantstamp, and Bramah Systems. See each repository for further details.

SKALE Network also has an active HackerOne program. Please see the SKALE Network's HackerOne program for any bug bounties related to SKALE Manager [here](https://hackerone.com/skale_network).

### How do SKALE Chains resist DDoS attacks and malicious activity?

The SKALE Network has a few ways to handle DDoS protections, [see more details here](/learn/advanced/ddos-protection).

High load monitoring and prevention outlined in the above documentation under the DDoS Protection section provides a detailed explanation of the feature.

Additionally, SKALE Chains have SKALE chain-specific sFUEL (sFUEL) that helps to prevent malicious activity. Here is an excerpt from the dev documentation above:

```
Transactions on SKALE Chain run in a gas-free way. This means there is gas on
SKALE Chains just like on Ethereum, but it's powered by what's called SKALE ETH
(sFUEL), which has no monetary value. In this way, executing transactions and
state changes don't incur costs but require consuming gas in sFUEL, which is
value-less. SKALE Chain gas in the form of sFUEL provides a way to meter and/or
limit transactions on the SKALE Chain so as to forestall and prevent malicious
execution.
```

### How does the network mitigate security risks?

Security and validity of transactions in a SKALE chain primarily rest with the performance and behavior of the validator supernodes. A network first has to have a heterogeneous set of validator supernodes. A small number of supernodes in a network is inherently risky and fragile.

In addition, and as a requirement for a secure and robust network, it ideally needs to provide for a) the random selection of chain validator sets and b) the rotation of nodes in and out of chains frequently. Without randomness and rotation, there is a far greater risk of bribery or collusion between validators, reducing the security and integrity of the chains within a network.

For a detailed look at the design of the network and its security protection, please check out [this](https://skale.network/blog/skale-differentiators-consensus-block-proposals-and-survivability) interview with Stan Kladko, CTO/Co-Founder, SKALE Labs.

## Have an unanswered question?

**[Head over to the SKALE Developer community!](https://discord.com/invite/gM5XBy6)**
