---
title: Block Rotation
description: Block Rotation on a SKALE Chain
---

Block rotation on a SKALE Chain enables a limit on the size of the hard drive space that is
occupied by blocks on core consensus nodes and full-sync nodes. The current default size of this space is **12.6 GB**.

Each SKALE Chain maintains a minimum to maximum number of blocks, which are the 80% to 100% of the above respectively,
meaning the most recent 20% of the blocks.

:::tip[Developer Note]
This does not apply to SKALE Archive Nodes
:::

Each database contains:

-   blocks
-   transactions and their receipts
-   log blooms
-   "best" (lastBlockHash, best block of the canonical chain)
-   "chainStart" (firstBlockHash, use when full chain isn't available, for example after snapshot import)

## API Changes

| Calls                                   | Changes                                          |
| --------------------------------------- | ------------------------------------------------ |
| eth_getBlockByNumber/eth_getBlockByHash | may return null                                  |
| eth_getBlockTransactionCountByNumber    | may return null                                  |
| eth_getBlockTransactionCountByHash      | may return null                                  |
| eth_getUncleCountByBlockNumber          | may return null                                  |
| eth_getUncleCountByBlockHash            | may return null                                  |
| eth_getTransactionByBlockHashAndIndex   | may return null                                  |
| eth_getTransactionByBlockNumberAndIndex | may return null                                  |
| eth_getUncleByBlockHashAndIndex         | may return null                                  |
| eth_getUncleByBlockNumberAndIndex       | may return null                                  |
| eth_getTransactionByHash                | may return null                                  |
| eth_getTransactionReceipt               | may return null                                  |
| eth_getFilterLogs                       | will treat removed blocks as if they have 0 logs |
| eth_getLogs                             | will treat removed blocks as if they have 0 logs |
