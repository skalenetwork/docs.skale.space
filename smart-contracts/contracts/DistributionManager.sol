// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract DistributionManager is AccessControl, ReentrancyGuard {

    using SafeERC20 for IERC20;

    bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE");
    
    uint256 public nextTokenId;
    uint256 public sfuelThreshold;
    uint256 public erc20Threshold;

    mapping(address => uint64) public lastClaim;
    mapping(uint256 => IERC20) public tokens;

    event AddToken(address indexed token);
    event Withdraw(address indexed to, uint64 indexed timestamp);

    constructor(
        IERC20[] memory _tokens
    ) payable {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MANAGER_ROLE, msg.sender);

        for (uint256 i = 0; i < _tokens.length; i++) {
            _addToken(_tokens[i]);
        }

        nextTokenId = 1;
        sfuelThreshold = 1 ether;
        erc20Threshold = 50 ether;
    }

    function addToken(IERC20 token) external onlyRole(MANAGER_ROLE) {
        _addToken(token);
    }

    function _addToken(IERC20 token) internal {
        for (uint256 i = 1; i < nextTokenId; i++) {
            if (address(tokens[i]) == address(token)) revert("Token already added");
        }

        tokens[nextTokenId++] = token; 

        emit AddToken(address(token));
    }

    function withdraw(address to) external nonReentrant {

        require(uint64(lastClaim[to]) + 24 hours < block.timestamp, "You can't withdraw yet");

        if (to.balance < sfuelThreshold && address(this).balance >= sfuelThreshold - to.balance) {
            (bool sent,) = to.call{ value: sfuelThreshold - to.balance }("");
            require(sent, "Failed to send Ether");
        }

        for (uint256 i = 1; i < nextTokenId; i++) {
            if (tokens[nextTokenId].balanceOf(to) < erc20Threshold && tokens[nextTokenId].balanceOf(address(this)) > erc20Threshold - tokens[nextTokenId].balanceOf(to)) {
                tokens[nextTokenId].safeTransferFrom(address(this), to, erc20Threshold - tokens[nextTokenId].balanceOf(to));
            }
        }
        
        emit Withdraw(to, uint64(block.timestamp));
    }

    receive() payable external {}
    fallback() external {}
}
