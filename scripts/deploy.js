
const hre = require("hardhat");

async function main() {
  const MushMouthNFT = await hre.ethers.getContractFactory("MushMouthNFT");
  const mushmouthnft = await MushMouthNFT.deploy();

  await mushmouthnft.deployed();

  console.log("MushMouthNFT deployed to:", mushmouthnft.address);
}


main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
