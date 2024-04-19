import { ContractRunner, ethers } from 'ethers';
import {ABI as contractABI } from '../assets/ContractABI/StakingContract';
import useWallet from './useWallet';


export const contractAddress = '0x1ce44c13ac000C763F9CB545C1e794C3aEE727fe';
//export const contractAddress = '0xA9Fa79AEeFeec3443a94bdE90ADd4bB1c0c5224f'; //TestNet


export async function stake(_id:string,amount: number,duration: number,signer:any) {

        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        console.log("Staking amount ....",amount)
        const recipet=await contract.stake(_id,amount, duration);
        const response=recipet.wait(1)
        console.log("Staking complete ....",response)
        return response
    
}

export async function estimateStakingGas(_id:string, amount:number, duration:number, signer:ethers.Signer) {
    try {
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        const data = contract.interface.encodeFunctionData("stake", [_id, amount, duration]);
        const from = await signer.getAddress();
        const transaction = {
            to: contractAddress,
            data: data,
            from: from,
            // add other fields if necessary
        };
        console.log("Transaction ...",transaction)
        const gasEstimate = await signer.estimateGas(transaction);
        console.log(`Estimated gas cost for stake: ${gasEstimate}`);
        return gasEstimate;
    } catch(err) {
        console.log("Error in estimating gas fee...", err);
    }
}




export async function checkstaker(address:string,_id:string,signer:ethers.Signer) {
    console.log("Checking staker ....",signer)
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const staker=await contract.addressToStakingId(address,_id)

    console.log("Staker is ", staker)
    if(staker[0]>0){
        return true
    }
    return false
}

export async function getUserStakeById(address:string,_id:string,signer:ethers.Signer) {
    console.log("Checking stake ....",signer)
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const stake=await contract.addressToStakingId(address,_id)

    console.log("Staker is ", stake)
    return stake
}

export async function collectRewards(_id:string,signer:ethers.Signer) {
    console.log("Collecting rewards ....")
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const recipet=await contract.collectRewards(_id);
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
    const staker=await contract.stakersRecord(address)

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

    console.log("Rewards earned ...",stakerRecord[2].toString())

    return stakerRecord[2].toString()
}


// Contract Management Functions
export async function AddRewards(amount:number,signer:ethers.Signer){
    console.log("Adding rewards...")
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const rewardAdd=await contract.addRewards(amount)
    const tx=rewardAdd.wait(1)

    console.log("Rewards added ....")
    return tx;
}

export async function RemoveRewards(signer:ethers.Signer){
    console.log("removeing rewrds ...")
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const removedRewards=await contract.removeRewardPool();
    const tx=removedRewards.wait(1)

    console.log("rewards removed ....")

    return tx;
}

export async function AddRewardRate(duration:number,percentage:number,signer:ethers.Signer){
    console.log("adding reward rate with,",signer);
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const rewardRateAdd=await contract.addRewardRate(duration,percentage);

    const tx=rewardRateAdd.wait(1)
    console.log("reward rate added ...",tx);
    return tx;
}

export async function UpdateRewardRates(duration:number,percentage:number,signer:ethers.Signer){
    console.log("updating reward rate with,",signer);
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const rewardRateUpdate=await contract.updateRewardRate(duration,percentage);

    const tx=rewardRateUpdate.wait(1)
    console.log("reward rate updated ...",tx);
    return tx; 
}

export async function RemoveRewardRate(duration:number,signer:ethers.Signer){
    console.log("removing reward rate");
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const rewardRateRemove=await contract.removeRewardRate(duration);

    const tx=rewardRateRemove.wait(1)
    console.log("reward rate removed ...",tx);
    return tx;
}

export async function GetRewardRates(duration:number,){
    console.log("fetching reward rate for ...",duration)
    const provider=new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const rewardRate=await contract.rewardRates(duration); 
    
    console.log("reward rate fetched ...",rewardRate)

    return rewardRate;
}


export async function rewardPool(){
    console.log("getting reward pool ...")
    const provider=new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const rewardPool=await contract.rewardPool(); 

    console.log("fetched reward pool",rewardPool.toString())

    return rewardPool.toString();
}
