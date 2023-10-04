import { ethers } from "hardhat";

async function main() {
  const HelloWorld = await ethers.deployContract("HelloWorld");
  console.log(HelloWorld);
  await HelloWorld.waitForDeployment();
  const address = await HelloWorld.getAddress();
  console.log(`Contract Deployed to ${address}`);

  // await HelloWorld.run();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
