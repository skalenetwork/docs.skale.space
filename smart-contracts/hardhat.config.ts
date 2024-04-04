import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv"; // Using dotenv package to allow for npx scripts to work

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (PRIVATE_KEY === undefined) throw new Error("Private Key Require in .env");

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  defaultNetwork: "nebula-testnet",
  networks: {
    "calypso-testnet": {
      url: "https://testnet.skalenodes.com/v1/giant-half-dual-testnet",
      accounts: [PRIVATE_KEY],
      allowUnlimitedContractSize: true,
      blockGasLimit: 268_000_000,
      loggingEnabled: true,
      chainId: 974399131
    },
    "europa-testnet": {
      url: "https://testnet.skalenodes.com/v1/juicy-low-small-testnet",
      accounts: [PRIVATE_KEY],
      allowUnlimitedContractSize: true,
      blockGasLimit: 268_000_000,
      loggingEnabled: true,
      chainId: 1444673419
    },
    "nebula-testnet": {
      url: "https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet",
      accounts: [PRIVATE_KEY],
      allowUnlimitedContractSize: true,
      blockGasLimit: 268_000_000,
      loggingEnabled: true,
      chainId: 37084624
    },
    "titan-testnet": {
      url: "https://testnet.skalenodes.com/v1/aware-fake-trim-testnet",
      accounts: [PRIVATE_KEY],
      allowUnlimitedContractSize: true,
      blockGasLimit: 268_000_000,
      loggingEnabled: true,
      chainId: 1020352220
    }
  },
  etherscan: {
    apiKey: {
      "calypso-testnet": "na",
      "europa-testnet": "na",
      "nebula-testnet": "na",
      "titan-testnet": "na"
    },
    customChains: [
            {
        network: "calypso-testnet",
        chainId: 974399131,
        urls: {
          apiURL: "https://giant-half-dual-testnet.explorer.testnet.skalenodes.com/api",
          browserURL: "https://giant-half-dual-testnet.explorer.testnet.skalenodes.com"
        }
      },
      {
        network: "europa-testnet",
        chainId: 1444673419,
        urls: {
          apiURL: "https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/api",
          browserURL: "https://juicy-low-small-testnet.explorer.testnet.skalenodes.com"
        }
      },
      {
        network: "nebula-testnet",
        chainId: 37084624,
        urls: {
          apiURL: "https://lanky-ill-funny-testnet.explorer.testnet.skalenodes.com/api",
          browserURL: "https://lanky-ill-funny-testnet.explorer.testnet.skalenodes.com"
        }
      },
      {
        network: "titan-testnet",
        chainId: 1020352220,
        urls: {
          apiURL: "https://aware-fake-trim-testnet.explorer.testnet.skalenodes.com/api",
          browserURL: "https://aware-fake-trim-testnet.explorer.testnet.skalenodes.com"
        }
      }
    ]
  }
};

export default config;
