import { ethers } from "hardhat";

// ** Using new data from https://docs.chain.link/docs/vrf/v2/subscription/supported-networks/

// address of the link token which is the token in which the chainlink takes its payment
// ** The contract address is the same for both Goerli & Mumbai testnets. How?
export const LINK_TOKEN = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";

// address of the VRFCoordinator contract
export const VRF_COORDINATOR = "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D"; // Goerli

// ID of the public key against which randomness is generated. This value is responsible for
// generating an unique Id for our randomneses request called as requestId
// ** Don't understand how keyHash works
export const KEY_HASH =
  "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15"; // Goerli

// The amount of LINK to send with the request
// Tried increasing the LINK fee (0.0001 -> 0.01)
export const VRF_FEE = ethers.utils.parseEther("0.0001");
