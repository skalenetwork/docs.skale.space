// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

// Importing the ERC20 standard contract and AccessControl for role-based access management.
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title InterchainERC20
 * @dev This contract is an ERC20 token implementation with role-based access control for minting and burning.
 * It utilizes OpenZeppelin's ERC20 and AccessControl for functionality.
 */
contract InterchainERC20 is ERC20, AccessControl {
    // Define roles using hashed constants for efficient comparison.
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    /**
     * @notice Constructor initializes the ERC20 token and sets up roles.
     * @param name The name of the token.
     * @param symbol The symbol of the token.
     */
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        // Assign the minter role to a predefined address.
        _grantRole(MINTER_ROLE, 0xD2aAA00500000000000000000000000000000000);

        // Assign the burner role to a predefined address.
        _grantRole(BURNER_ROLE, 0xD2aAA00500000000000000000000000000000000);
    }

    /**
     * @notice Mints new tokens and assigns them to the specified address.
     * @dev Caller must have the MINTER_ROLE to invoke this function.
     * @param to The address that will receive the newly minted tokens.
     * @param amount The amount of tokens to mint.
     * Requirements:
     * - Caller must have MINTER_ROLE.
     * - `to` cannot be the zero address.
     */
    function mint(address to, uint256 amount) public virtual {
        // Ensure that the caller has the MINTER_ROLE.
        require(hasRole(MINTER_ROLE, msg.sender), "Caller is not a minter");

        // Mint the specified amount of tokens to the target address.
        _mint(to, amount);
    }

    /**
     * @notice Burns tokens from the caller's account.
     * @dev Caller must have the BURNER_ROLE to invoke this function.
     * @param amount The amount of tokens to burn.
     * Requirements:
     * - Caller must have BURNER_ROLE.
     * - Caller must have at least `amount` tokens.
     */
    function burn(uint256 amount) public virtual {
        // Ensure that the caller has the BURNER_ROLE.
        require(hasRole(BURNER_ROLE, msg.sender), "Caller is not a burner");

        // Burn the specified amount of tokens from the caller's account.
        _burn(msg.sender, amount);
    }
}