const ethers = require("hardhat");

const CONTRACTS = {
  MYTOKEN: {
    address: "0x9B600910f008EC1b64a4A16D43bfBF60eE1a81C1",
    data: require("../artifacts/contracts/Token.sol/Token.json"),
  },
};

async function main() {
    provider = await ethers.provider().getDefaultProvider('https://ropsten.infura.io/v3/0a0cd7edb9184b5d97aafea6cfa265cb');
    console.log(provider)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
