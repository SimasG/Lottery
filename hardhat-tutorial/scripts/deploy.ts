import hre, { ethers } from "hardhat";
import "dotenv/config";
import { VRF_FEE, VRF_COORDINATOR, LINK_TOKEN, KEY_HASH } from "../constants";

// Mumbai (old) | Deployed at 0xD22dB5F65A51F76985CBDc7168eA32FecA5Be1C8
// Goerli | Deployed at 0x315d07c659848287250fea9bfCa063Bc3E18d44F -> 0x012754E0A494337734fCE61d7a64aB6C466E5e7C -> 0xeBEdB5897C331A1444eb9020F591C325bd5Aaf59 -> 0x6C91Dea536AbD9DA8eCb5863f67A73773f98422a

async function main() {
  /*
 A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
 so randomWinnerGame here is a factory for instances of our RandomWinnerGame contract.
 */
  const randomWinnerGame = await ethers.getContractFactory("RandomWinnerGame");
  // deploy the contract
  const deployedRandomWinnerGameContract = await randomWinnerGame.deploy(
    VRF_COORDINATOR,
    LINK_TOKEN,
    KEY_HASH,
    VRF_FEE
  );

  console.log("Deploying deployedRandomWinnerGameContract...");
  await deployedRandomWinnerGameContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Verify Contract Address:",
    deployedRandomWinnerGameContract.address
  );

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(50000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedRandomWinnerGameContract.address,
    constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, VRF_FEE],
  });
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
