// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

interface IMessageProxy {
  function postOutgoingMessage(
    bytes32 targetChainHash,
    address targetContract,
    bytes calldata data
  ) external;
}
