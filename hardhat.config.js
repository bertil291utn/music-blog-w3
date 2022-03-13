require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [process.env.pk]
    },
    // polygon: {
    //   url: "https://polygon-rpc.com/",
    //   accounts: [process.env.pk]
    // }
  }
};