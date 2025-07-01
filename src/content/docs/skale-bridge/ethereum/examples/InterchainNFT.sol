// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import { InterchainERC721 } from "./InterchainERC721.sol";

contract InterchainNFT is InterchainERC721("NFT Name", "NFT Symbol", "ipfs://<cid>/") {}