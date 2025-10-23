/// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @title ERC20Payment
/// @author TheGreatAxios
/// @notice A simple contract that allows users to make payments with ERC20 tokens
/// @dev This contract leverages OpenZeppelin's SafeERC20 library for secure token transfers
contract ERC20Payment {
    using SafeERC20 for IERC20;
    
    /// @notice The ERC20 token used for payments
    IERC20 public token;
    
    /// @notice Initializes the contract with a specific ERC20 token
    /// @dev Sets the token that will be used for all payment operations
    /// @param _token The address of the ERC20 token contract
    constructor(address _token) {
        token = IERC20(_token);
    }
    
    /// @notice Allows a user to make a purchase by sending 100 tokens
    /// @dev Transfers 100 tokens from the sender to this contract using safeTransferFrom
    /// @dev The amount is hardcoded to 100e18 (100 tokens with 18 decimals)
    function purchase() external {
        token.safeTransferFrom(msg.sender, address(this), 100e18);
    }
}