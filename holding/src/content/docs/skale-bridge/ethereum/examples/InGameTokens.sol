// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import { InterchainERC1155 } from "./InterchainERC1155.sol";

contract InGameTokens is InterchainERC1155("ipfs://<cid>") {}