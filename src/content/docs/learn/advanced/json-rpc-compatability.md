---
title: JSON-RPC Interface Compatability
description: SKALE JSON-RPC Compatabilty Table
---

:::tip[Developer Warning]
All Ethereum **debug** Namespace methods (for example, _debug_traceCall_) are currently NOT supported on any node (core, sync, archive).
:::

| Method                                  | Core Node           | Full Sync Node      | Archive Node        | Notes                                                                                                                                                      |
| --------------------------------------- | ------------------- | ------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| web3_clientVersion                      | Supported           | Supported           | Supported           |
| web3_sha3                               | Supported           | Supported           | Supported           |
| net_version                             | Supported           | Supported           | Supported           | Returns ChainID from config.json                                                                                                                           |
| net_listening                           | Supported           | Supported           | Supported           |
| net_peerCount                           | Partially Supported | Partially Supported | Partially Supported | Always returns 0                                                                                                                                           |
| eth_protocolVersion                     | Supported           | Supported           | Supported           |
| eth_syncing                             | Partially Supported | Partially Supported | Partially Supported | Always returns false                                                                                                                                       |
| eth_coinbase                            | Supported           | Supported           | Supported           | Always returns SKALE Chain Owner Address. Retrieved from config.json (which is used as the coinbase address)                                               |
| eth_mining                              | Partially Supported | Partially Supported | Partially Supported | Always returns false. Mining is not supported on a SKALE Chain                                                                                             |
| eth_hashrate                            | Partially Supported | Partially Supported | Partially Supported | Always returns 0. No hashrate for SKALE Chains                                                                                                             |
| eth_gasPrice                            | Supported           | Supported           | Supported           | Gas price is dynamically adjusted from 1000 wei and above aas load increases                                                                               |
| eth_accounts                            | Supported           | Supported           | Supported           |
| eth_blockNumber                         | Supported           | Supported           | Supported           |
| eth_getBalance                          | Partially Supported | Partially Supported | Supported           | Second parameter is ignored and always set to "latest" on Core and Full Sync Node. Supports EIP-1898 interface                                             |
| eth_getStorageAt                        | Partially Supported | Partially Supported | Supported           | Second parameter is ignored and always set to "latest" on Core and Full Sync Node. Supports EIP-1898 interface                                             |
| eth_getTransactionCount                 | Partially Supported | Partially Supported | Supported           | Second parameter is ignored and always set to "latest" on Core and Full Sync Node. Supports EIP-1898 interface                                             |
| eth_getBlockTransactionCountByHash      | Partially Supported | Partially Supported | Partially Supported | Old blocks are [rotated out](/learn/advanced/block-rotation)                                                                                               |
| eth_getBlockTransactionCountByNumber    | Partially Supported | Partially Supported | Partially Supported | Old blocks are [rotated out](/learn/advanced/block-rotation)                                                                                               |
| eth_getUncleCountByBlockHash            | Supported           | Supported           | Supported           | There are no uncles on a SKALE Chain                                                                                                                       |
| eth_getUncleCountByBlockNumber          | Supported           | Supported           | Supported           | There are no uncles on a SKALE Chain                                                                                                                       |
| eth_getCode                             | Partially Supported | Partially Supported | Supported           | Second parameter is ignored and always set to "latest" on Core and Full Sync Node. Supports EIP-1898 interface                                             |
| eth_sign                                | Not Supported       | Not Supported       | Not Supported       |
| eth_signTransaction                     | Not Supported       | Not Supported       | Not Supported       | SKALE Chains do not support Personal API Methods                                                                                                           |
| eth_sendTransaction                     | Partially Supported | Not Supported       | Not Supported       | Full Sync and Archive Nodes cannot process blocks. Partially supported on Core Nodes as Personal API is disabled.                                          |
| eth_sendRawTransaction                  | Supported           | Supported           | Supported           | Full Sync and Archive Nodes cannot process blocks. Fully supported on Core Nodes.                                                                          |
| eth_call                                | Partially Supported | Partially Supported | Partially Supported | Second parameter is ignored and always set to "latest" on Core and Full Sync Node. Supports EIP-1898 interface                                             |
| eth_estimateGas                         | Supported           | Supported           | Supported           | Does not use binary search                                                                                                                                 |
| eth_getBlockByHash                      | Supported           | Supported           | Supported           | Old blocks are [rotated out](/learn/advanced/block-rotation) on Core and Full Sync Node. Block contains three (3) extra fields: author, boundary, seedHash |
| eth_getBlockByNumber                    | Supported           | Supported           | Supported           | Old blocks are [rotated out](/learn/advanced/block-rotation) on Core and Full Sync Node. Block contains three (3) extra fields: author, boundary, seedHash |
| eth_getTransactionByHash                | Supported           | Supported           | Supported           | Does not contain fields: _chainId_, _v_, _r_, _s_, _type_                                                                                                  |
| eth_getTransactionByBlockHashAndIndex   | Supported           | Supported           | Supported           |
| eth_getTransactionByBlockNumberAndIndex | Supported           | Supported           | Supported           |
| eth_getTransactionReceipt               | Supported           | Supported           | Supported           | Receipt does not contain fields: _effectiveGasPrice_, _type_                                                                                               |
| eth_getUncleByBlockHashAndIndex         | Supported           | Supported           | Supported           | There are no uncles on a SKALE Chain                                                                                                                       |
| eth_getUncleByBlockNumberAndIndex       | Supported           | Supported           | Supported           | There are no uncles on a SKALE Chain                                                                                                                       |
| eth_getCompilers                        | Not Supported       | Not Supported       | Not Supported       |
| eth_compileSolidity                     | Not Supported       | Not Supported       | Not Supported       |
| eth_compileLLL                          | Not Supported       | Not Supported       | Not Supported       |
| eth_compileSerpent                      | Not Supported       | Not Supported       | Not Supported       |
| eth_newFilter                           | Partially Supported | Partially Supported | Supported           | Ignores logs on logs that were [rotated out](/learn/advanced/block-rotation) on Core and Full Sync Nodes                                                   |
| eth_newBlockFilter                      | Supported           | Supported           | Supported           |
| eth_newPendingTransactionFilter         | Supported           | Supported           | Supported           |
| eth_uninstallFilter                     | Supported           | Supported           | Supported           |
| eth_getFilterChanges                    | Supported           | Supported           | Supported           |
| eth_getFilterLogs                       | Supported           | Supported           | Supported           |
| eth_getLogs                             | Partially Supported | Partially Supported | Supported           | Ignores logs on logs that were [rotated out](/learn/advanced/block-rotation) on Core and Full Sync Nodes                                                   |
| eth_getWork                             | Supported           | Supported           | Supported           |
| eth_submitWork                          | Not Supported       | Not Supported       | Not Supported       |
| eth_submitHashrate                      | Supported           | Supported           | Supported           |
| eth_getProof                            | Not Supported       | Not Supported       | Not Supported       |
| db_putString                            | Not Supported       | Not Supported       | Not Supported       |
| db_getString                            | Not Supported       | Not Supported       | Not Supported       |
| db_putHex                               | Not Supported       | Not Supported       | Not Supported       |
| db_getHex                               | Not Supported       | Not Supported       | Not Supported       |
| ssh_version                             | Not Supported       | Not Supported       | Not Supported       |
| ssh_newIdentity                         | Not Supported       | Not Supported       | Not Supported       |
| ssh_hasIdentity                         | Not Supported       | Not Supported       | Not Supported       |
| ssh_newGroup                            | Not Supported       | Not Supported       | Not Supported       |
| ssh_addToGroup                          | Not Supported       | Not Supported       | Not Supported       |
| ssh_newFilter                           | Not Supported       | Not Supported       | Not Supported       |
| ssh_uninstallFilter                     | Not Supported       | Not Supported       | Not Supported       |
| ssh_getFilterChanges                    | Not Supported       | Not Supported       | Not Supported       |
| ssh_getMessages                         | Not Supported       | Not Supported       | Not Supported       |
