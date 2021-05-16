require("@nomiclabs/hardhat-waffle");

const ALCHEME_API_KEY = "KEY";

const ROPSTEN_PRIVATE_KEY = 
/**
 * @type import('hardhat/config').HardhatUserConfig
 *
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
	  ropsten: {
		  url: `https://ropsten.infura.io/v3/0a0cd7edb9184b5d97aafea6cfa265cb`,
		  accounts: [`0x0eb47fad914c52329463cbaded410fb8d1927523a8ec47985659484c8cc07366`]
	  }
  }
};
