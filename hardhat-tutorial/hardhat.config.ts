import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

// const ALCHEMY_MUMBAI_HTTP_URL = process.env.ALCHEMY_MUMBAI_HTTP_URL;
const ALCHEMY_GOERLI_HTTP_URL = process.env.ALCHEMY_GOERLI_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
// const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      chainId: 5,
      // blockConfirmations: 5,
      url: ALCHEMY_GOERLI_HTTP_URL,
      accounts: [PRIVATE_KEY!],
    },
    // mumbai: {
    //   url: ALCHEMY_MUMBAI_HTTP_URL,
    //   accounts: [PRIVATE_KEY!],
    // },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
    // apiKey: {
    //   polygonMumbai: POLYGONSCAN_KEY!,
    //   goerli: ETHERSCAN_KEY!,
    // },
  },
};

export default config;
