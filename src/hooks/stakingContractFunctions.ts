import { ContractRunner, ethers } from 'ethers';
import {ABI as contractABI } from '../assets/ContractABI/StakingContract';
import useWallet from './useWallet';


const contractAddress = '0x2D5070de8F1fcC05A3f032fAb2457d48e775cE40';


export async function stake(amount: number,duration: number,signer:any) {
    try{
        console.log(signer)
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        console.log("Staking amount ....")
        const recipet=await contract.stake(amount, duration);
        console.log("Staking complete ....")
        return recipet
    }catch(err){
        console.log("Error in staking",err)
    }
}
