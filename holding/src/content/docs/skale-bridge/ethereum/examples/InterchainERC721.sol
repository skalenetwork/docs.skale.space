// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
/**
 * @title InterchainERC721
 * @dev ERC-721 with role-based minting and dynamic token URI.
 */
contract InterchainERC721 is AccessControl, ERC721 {

    using Strings for uint256;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    string private _baseTokenURI;

    constructor(
        string memory contractName,
        string memory contractSymbol,
        string memory baseTokenURI
    )
        ERC721(contractName, contractSymbol)
    {
        _setRoleAdmin(MINTER_ROLE, 0xD2aaa00600000000000000000000000000000000); // example admin role
        _grantRole(MINTER_ROLE, _msgSender());
        _baseTokenURI = baseTokenURI;
    }

    function mint(address to, uint256 tokenId) external returns (bool) {
        require(hasRole(MINTER_ROLE, _msgSender()), "Sender is not a Minter");
        _safeMint(to, tokenId);
        return true;
    }

    /// @notice Override to return dynamic token URI
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721: URI query for nonexistent token");
        return string(abi.encodePacked(_baseTokenURI, tokenId.toString(), ".json");
    }

    /// @notice Allows admin to update base URI
    function setBaseURI(string calldata newBaseURI) external onlyRole(MINTER_ROLE) {
        _baseTokenURI = newBaseURI;
    }
}
