import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config()

export const ABI = [
  {
    inputs: [],
    name: "helloWorld",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];



const trackTransaction = async() => {
  console.log(process.env.RPC_URL)
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
  const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, ABI, provider)
  console.log(contract)
  const tx =await contract.helloWorld()
  console.log(tx)
};

trackTransaction();
