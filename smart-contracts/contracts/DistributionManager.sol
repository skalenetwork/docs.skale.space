// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract DistributionManager is AccessControl, ReentrancyGuard {

    using SafeERC20 for ERC20;

    bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE");
    
    uint256 public erc20DistributionAmount;    
    uint256 public sfuelThreshold;

    mapping(address => uint64) public lastClaim;
    ERC20[] public tokens;

    event AddToken(address indexed token);
    event Withdraw(address indexed to, uint64 indexed timestamp);

    constructor(
        ERC20[] memory _tokens
    ) payable {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MANAGER_ROLE, msg.sender);

        tokens = _tokens;

        
        sfuelThreshold = 1 ether;
        erc20DistributionAmount = 5;
    }

    function updateDistributionValue(uint256 amount) external onlyRole(MANAGER_ROLE) {
        erc20DistributionAmount = amount;
    }

    function addToken(ERC20 token) external onlyRole(MANAGER_ROLE) {
        _addToken(token);
    }

    function _addToken(ERC20 token) internal {
        tokens.push(token);
        emit AddToken(address(token));
    }

    function withdraw(address to) external nonReentrant {
        require(uint64(lastClaim[to]) + 24 hours < block.timestamp, "You can't withdraw yet");

        // Update last claim time
        lastClaim[to] = uint64(block.timestamp);

        // Withdraw ETH if necessary
        if (address(this).balance >= sfuelThreshold) {
            (bool sent,) = payable(to).call{ value: sfuelThreshold }("");
            require(sent, "Failed to send Ether");
        }

        // Withdraw tokens
        for (uint256 i = 0; i < tokens.length; i++) {
            tokens[i].safeTransfer(to, erc20DistributionAmount * 10 ** tokens[i].decimals());
        }

        emit Withdraw(to, uint64(block.timestamp));
    }


    receive() payable external {}
    fallback() external {}
}
