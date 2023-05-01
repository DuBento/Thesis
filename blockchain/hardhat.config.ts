import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  typechain: {
    outDir: "./artifacts/frontend-artifacts/",
    target: "ethers-v5",
  },
};

export default config;
