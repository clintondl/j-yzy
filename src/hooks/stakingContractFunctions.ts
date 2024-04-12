import { ContractRunner, ethers } from 'ethers';
import {ABI as contractABI } from '../assets/ContractABI/StakingContract';
import useWallet from './useWallet';


export const contractAddress = '0x39f5dDF7DcbD41206c168D7dD357715fb295fc08';


export async function stake(amount: number,duration: number,signer:any) {
    try{
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        console.log("Staking amount ....",amount)
        const recipet=await contract.stake(amount, duration);
        console.log("Staking complete ....")
        return recipet
    }catch(err){
        console.log("Error in staking",err)
    }
}

export async function checkstaker(address:string,signer:ethers.Signer) {
    console.log("Checking staker ....")
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const staker=await contract.stakers(address)

    console.log("Staker is ", staker)
    if(staker[0]>0){
        return true
    }
    return false
}

export async function totalStaked(){
    console.log("Getting total staked ....")
    const provider=await ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const totalStaked=await contract.totalStaked();

    console.log("Total staked is ", totalStaked)

    return totalStaked
}

export async function collectRewards(signer:ethers.Signer) {
    console.log("Collecting rewards ....")
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const recipet=await contract.collectRewards();
    console.log("Rewards collected ....",recipet)
    return recipet
}