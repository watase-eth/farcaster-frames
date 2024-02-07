import { ethers } from "ethers";
import { BigNumber } from "bignumber.js";
import {
  httpFetchBalanceStatus,
  httpFetchOwned,
  httpMint,
} from "../../api/fetcher";

// This class is a wrapper for the thirdweb engine. It's used to interact with
// the blockchain and check the balance of the wallet, mint NFTs and check if
// a wallet owns an NFT.

export class ThirdWebEngine {
  public static isBalanceLow = async () => {
    const { result } = await httpFetchBalanceStatus();
    const formattedEther = ethers.utils.formatEther(result.value);
    const totalFormattedBalance = BigNumber(formattedEther).dp(6).toNumber();
    // Make sure to include your own low balanec logic here. In this example
    // if polygon mainnet funds are lower than 0.01 it'll return true
    return totalFormattedBalance < 0.01;
  };

  public static mint = async (receiver: string) => {
    const response = await httpMint(receiver);
    return response;
  };

  public static isNFTOwned = async (receiver: string) => {
    const response = await httpFetchOwned(receiver);
    return response.result.length > 0;
  };
}