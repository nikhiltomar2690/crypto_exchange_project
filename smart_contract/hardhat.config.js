require('@nomiclabs/hardhat-waffle');

const ALCHEMY_API_KEY = "PLSDE-xO7kxouTBtK3Z9SytucobbxqxW";

const GOERLI_PRIVATE_KEY = "021da5ccf382b8a98df10e658fdf417d1ef009a5611e55f6c7316b951c6b1296";

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
    accounts: [`${GOERLI_PRIVATE_KEY}`],
    },
  },
};