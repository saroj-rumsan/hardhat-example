import { ethers } from "ethers";
import EnvVars from "../constants/EnvVars";
import { ABI } from "../constants/Abi";

const trackTransaction = () => {
  const provider = new ethers.JsonRpcProvider(EnvVars?.networkUrl);
};

trackTransaction();
