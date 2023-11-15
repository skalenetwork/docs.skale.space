---
title: EVM Compatability
description: SKALE and EVM Compatability
---

The SKALE execution model is fully compatible with the Ethereum Virtual Machine (EVM). This allows any smart contract that works on other EVMs to work on SKALE with no changes necessary.

## Supported Languages

### Solidity

Solidity is the most popular language for writing smart contracts for EVM blockchains, including SKALE Chains. Being turing complete with a JavaScript-like syntax, Solidity empowers developers to build smart contracts that can run on a SKALE Chain.

:::tip[Developer Warning] The EVM Compiler version Shangai is not compatible with SKALE Chains at this time. If using v0.8.20 or greater, you must manually set the EVM Version to Paris or lower. Fore more information, see the [Solidity Language Announcement](https://soliditylang.org/blog/2023/05/10/solidity-0.8.20-release-announcement) :::

#### EIPS & Popular Standards

Since Solidity itself compiles to EVM compatible bytecode, many of the Ethereum Improvment Proposals ([EIP](https://eips.ethereum.org/)) that take shape in the form of Ethereum Request for Comment ([ERC](https://eips.ethereum.org/erc)), are also usable directly on SKALE with no changes needed. Examples of these popular standards include [ERC-20](https://eips.ethereum.org/EIPS/eip-20) (Fungible Token Standard), [ERC-721](https://eips.ethereum.org/EIPS/eip-721) (Non-Fungible Token Standard), and [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) (Multi Token Standard).

#### Links

- **Website** - https://soliditylang.org/
- **OpenZeppelin Contracts** - https://www.openzeppelin.com/contracts
- **Resources** - https://docs.soliditylang.org/en/v0.8.23/resources.html#general-resources

### Vyper

Vyper is a pythonic language that targets the EVM. Vyper does not try to replace Solidity, but instead focuses on simplicity.

#### Links

- **Website** - https://docs.vyperlang.org/en/stable/
- **Resources** - https://docs.vyperlang.org/en/stable/resources.html#general

### Yul

Yul is an intermediate language that can be compiled into bytecode. It can be used stand-alone or inside Solidity.

### Links

- **Website** - https://docs.soliditylang.org/en/latest/yul.html

## Supported Tooling

With SKALE Chains being EVM compatible, any tool or software that is chain-agnostic -- meaning it can run on any EVM chain -- should just work on SKALE! While some tools may not have docs directly for SKALE, any tooling that allows you to input your a custom RPC will generally be compatible.

For more tools, checkout the [tools section](/tools).
