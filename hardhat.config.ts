import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import EnvVars from "./constants/EnvVars";

dotenv.config();
const privateKey = process.env?.PRIVATE_KEY ?? "";
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: process?.env?.RPC_URL,
      accounts: [privateKey],
    },
  },
};

export default config;
