import { ContractRunner, ethers } from 'ethers';
import {ABI as contractABI } from '../assets/ContractABI/StakingContract';
import useWallet from './useWallet';


export const contractAddress = '0x4BC90571112AcE47e12f79f71Ca5646a088eF950';


export async function stake(amount: number,duration: number,signer:any) {
    try{
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        console.log("Staking amount ....",amount)
        const recipet=await contract.stake(amount, duration);
        recipet.wait()
        console.log("Staking complete ....")
        return recipet
    }catch(err){
        console.log("Error in staking",err)
    }
}

export async function checkstaker(address:string,signer:ethers.Signer) {
    console.log("Checking staker ....",signer)
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const staker=await contract.stakers(address)

    console.log("Staker is ", staker)
    if(staker[0]>0){
        return true
    }
    return false
}

export async function collectRewards(signer:ethers.Signer) {
    console.log("Collecting rewards ....")
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const recipet=await contract.collectRewards();
    console.log("Rewards collected ....",recipet)
    return recipet
}



// Contract Data reading functions

export async function totalStaked(){
    console.log("Getting total staked ....")
    const provider=new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const totalStaked=await contract.totalStaked();

    console.log("Total staked is ", totalStaked.toString())

    return totalStaked.toString()
}

export async function stakedByUser(address:string){
    console.log("Getting amount staked by user ....")
    const provider=new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const staker=await contract.stakers(address)

    console.log("Amount staked by user ...",staker[0])

    return staker[0].toString()
}

export async function getActiveStakerCount(){
    console.log("Getting all stakers ....")
    const provider=new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const stakers=await contract.activeStakerCount()

    console.log("All stakers ...",stakers.toString())

    return stakers.toString()
}

export async function getRewardsEarned(address:string){
    console.log("Getting rewards earned ....")
    const provider=new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const stakerRecord=await contract.stakersRecord(address)

    console.log("Rewards earned ...",stakerRecord[1].toString())

    return stakerRecord[1].toString()
}