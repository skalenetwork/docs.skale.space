// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import { ERC1155 } from "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";

contract InterchainERC1155 is AccessControl, ERC1155 {
    using Strings for uint256;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    string private _baseUri;

    constructor(string memory baseUri) ERC1155("") {
        _grantRole(MINTER_ROLE, 0xD2aaA00900000000000000000000000000000000);
        _baseUri = baseUri; // e.g. "ipfs://QmSomeCID/"
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        return string(abi.encodePacked(_baseUri, tokenId.toString(), ".json"));
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) external {
        require(hasRole(MINTER_ROLE, _msgSender()), "Sender is not a Minter");
        _mint(account, id, amount, data);
    }

    function mintBatch(
        address account,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) external {
        require(hasRole(MINTER_ROLE, _msgSender()), "Sender is not a Minter");
        _mintBatch(account, ids, amounts, data);
    }

    function setBaseUri(string memory newBaseUri) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _baseUri = newBaseUri;
    }
}
