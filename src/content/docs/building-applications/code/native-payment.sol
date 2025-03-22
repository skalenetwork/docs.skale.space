/// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/// @title NativePayment
/// @author TheGreatAxios
/// @notice A simple contract that allows users to make payments with native ETH
/// @dev This contract demonstrates handling of native ETH transfers
contract NativePayment {
    
    /// @notice Allows a user to make a purchase by sending ETH
    /// @dev Transfers the sent ETH amount to the contract's balance
    /// @dev Uses low-level call to transfer ETH value within the contract
    /// @dev Reverts if the internal transfer fails
    function purchase() external payable {
        (bool sent,) = payable(address(this)).call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}