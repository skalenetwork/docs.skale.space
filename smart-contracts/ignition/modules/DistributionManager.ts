import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { parseEther } from "ethers";

const DistributionManagerModule = buildModule("DistributionManager", (m) => {

  const contract = m.contract("DistributionManager", [
    [
    // Calypso
    // "0x2aebcdc4f9f9149a50422fff86198cb0939ea165" // USDC
    // Europa
    // "0x7aE734db73c57F3D16f5F141BAf6CfABD9E693bf", // DAI,
    // "0xbEE0FB0C095405A17c079Cd5C3cc89525e5A9a8C", // USDP,
    // "0x6CE77Fc7970F6984eF3E8748A3826972Ec409Fb9", // USDC
    // "0x6c71319b1F910Cf989AD386CcD4f8CC8573027aB", // SKL
    // Nebula
    // "0x5eaf4e5a908ba87abf3de768cb0da517db45db48" // USDC
    // Titan
    "0x10a30e73ab2da5328fc09b06443dde3e656e82f4", // USDC
    ]
  ], {
    value: parseEther("50"),
  });

  return { contract };
});

export default DistributionManagerModule;
