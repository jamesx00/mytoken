const ethers = require("hardhat");

const CONTRACTS = {
  MYTOKEN: {
    address: "0x9B600910f008EC1b64a4A16D43bfBF60eE1a81C1",
    data: require("../artifacts/contracts/Token.sol/Token.json"),
  },
};

async function main() {
  const account = (await ethers.getSigners())[4];
  console.log(account)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
