/// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/// @title Clone
/// @notice A simple contract that stores a clone ID
/// @dev This contract is meant to be deployed by the Factory contract
contract Clone {
    /// @notice The unique identifier for this clone
    /// @dev Set during contract creation and remains unchanged
    uint256 public cloneId;

    /// @notice Creates a new Clone with the specified ID
    /// @param _cloneId The unique identifier to assign to this clone
    constructor(uint256 _cloneId) {
        cloneId = _cloneId;
    }
}

/// @title Factory
/// @notice A factory contract that creates and tracks Clone instances
/// @dev Implements a simple factory pattern for deploying Clone contracts
contract Factory {
    /// @notice The total number of clones created by this factory
    /// @dev Also used to assign unique IDs to new clones
    uint256 public cloneCount;
    
    /// @notice Array of addresses for all clones created by this factory
    /// @dev Stores references to all deployed Clone contracts
    address[] public clones;
    
    /// @notice Creates a new Clone contract instance
    /// @dev Increments the clone counter, deploys a new Clone with that ID, and stores its address
    function createClone() external {
        Clone clone = new Clone(++cloneCount);
        clones.push(address(clone));
    }
}