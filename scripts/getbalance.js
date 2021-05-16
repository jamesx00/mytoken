const hre = require("hardhat");
const { ethers } = hre

const CONTRACTS = {
  MYTOKEN: {
    address: "0x9B600910f008EC1b64a4A16D43bfBF60eE1a81C1",
    data: require("../artifacts/contracts/Token.sol/Token.json"),
  },
};

const ANOTHER_WALLET_PUBIC_ADDRESS = '0x0734533439Df2E6Edba0D3B2b1157A8acdD83D05';

async function main() {

  const provider = await ethers.getDefaultProvider();
  const accounts = (await ethers.getSigners());
  const accountAddress = accounts[0].address;

  const TokenContract = new ethers.Contract(CONTRACTS.MYTOKEN.address, CONTRACTS.MYTOKEN.data.abi, accounts[0])

const myBalance = await TokenContract.balanceOf(accountAddress)
console.log(myBalance.toString())

await TokenContract.transfer(ANOTHER_WALLET_PUBIC_ADDRESS, 10)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
