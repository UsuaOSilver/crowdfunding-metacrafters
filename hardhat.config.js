require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
  },
  // etherscan: {
  //   apiKey: {
  //     goerli: ETHERSCAN_API_KEY,
  //     polygon: POLYGONSCAN_API_KEY,
  //   },
  // },
  gasReporter: {
    enabled: REPORT_GAS,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    // coinmarketcap: preocess.env.COINMARKETCAP_API_KEY
  },
  contractSizer: {
    runOnCompile: false,
    only: ["Crowdfund"]
  },
  namedAccounts: {
    deployer: {
      default: 0, // by default, take first account as deployer
      1: 0, // similarly taking first account as deployer on mainnet. Note: account 0 on one network can be different than on another
    },
    user1: {
      default: 1,
    },
  },
  solidity: {
    compiler: [
      {
        version: "0.8.17",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  mocha: {
    timeout: 200000, // 200 seconds max for running tests
  }
};
