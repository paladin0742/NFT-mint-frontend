/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty-pattern */
import _ from "lodash";
import Web3 from "web3";

import ERC20ABI from "../contracts/ERC20ABI.json";
import ERC721ABI from "../contracts/ERC721.json"
import NFTMint from "../contracts/NFTMint.json"

declare let window: any;

export interface StakedInfo{
    duration: number
    amount: number
    stakedTime: number
    lastClaimed: number
    name: string
    NFTId: number
    StakeNFTId: number
}

export const setNetworkProvider = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    }
    const NFTContract = await new window.web3.eth.Contract(NFTMint, process.env.REACT_APP_CONTRACT_ADDR);
    return NFTContract
    // return await new window.web3.eth.Contract(LockupAPI, process.env.REACT_APP_CONTRACT_ADDR);
}

export const claimNFT = async (account: string) => {
    console.log(account, '>>>>>>>>>>wallet connect');
    const NFTContract = await setNetworkProvider();
    NFTContract.methods.claim().send({from: account});
}

export const mintToken = async (tokenuri: string, account: string) => {
    console.log(account, '>>>>>>>>>>wallet connect');
    const NFTContract = await setNetworkProvider();
    NFTContract.methods.mintToken(tokenuri).send({from: account});
}

export const setStep = async (step: number, account: string) => {
    console.log(account, '>>>>>>>>>>wallet connect');
    const NFTContract = await setNetworkProvider();
    NFTContract.methods.setStep(step).send({from: account});
}

export const getStep = async () => {
    const NFTContract = await setNetworkProvider();
    const step = await NFTContract.methods.step().call();
    return step;
}

export const includedWhiteList = async (whitelistAddress: string) => {
    const NFTContract = await setNetworkProvider();
    const res = await NFTContract.methods.whiteList(whitelistAddress).call();
    return res;
}
