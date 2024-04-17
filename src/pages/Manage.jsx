import { useState } from "react";
import Button from "../component/Button";
import { AddRewardRate, AddRewards, contractAddress, RemoveRewardRate, RemoveRewards, rewardPool } from "../hooks/stakingContractFunctions";
import { approveTransfer, getERC20Balance, stakingToken } from "../hooks/ERC20Hooks";
import useWallet from "../hooks/useWallet";
import { useEffect } from "react";
import { AddDuration, DeleteDuration } from "../database/userActions";

function ManageContract(){
    const {signer,wallet,setWallet}=useWallet()
    const [amount,setAmount]=useState(0);
    const [duration,setDuration]=useState(0)
    const [pool,setRewardPool]=useState(0)
    const [rewardRate,setRewardRate]=useState(0)

    useEffect(()=>{
        rewardPool().then(setRewardPool)
    },[])

    async function updateBalance(){
        const tokenBalanceAvailable=getERC20Balance(wallet.address,stakingToken).then((balance)=>{
            console.log("wallet found ...",wallet)
            setWallet({...wallet,balance:balance});
            selectWallet();
          })
    }

    async function handleAddingReward(){
        const approving=await approveTransfer(stakingToken,amount,contractAddress,signer)
        const adding=await AddRewards(amount,signer);
        updateBalance()
    }

    async function handleAddingRewardRates(){
        try{
            const api=await AddDuration(duration)
            const rateAdd=await AddRewardRate(duration,rewardRate,signer)
        }catch(err){
            await DeleteDuration(duration)   
        }
    }

    async function handleRemoveRewardRate(){
        try{const api=await DeleteDuration(duration)
        const removed=await RemoveRewardRate(duration,signer);
        console.log(removed);}
        catch(err){
            await AddDuration(duration)
        }
    }

    async function handleRemoveReawrd(){
        const removeRewards=await RemoveRewards(signer);
        updateBalance()
    }
    return(
        <div className="flex flex-col gap-5 p-2 ">
        <p className=" self-center">Reward pool {pool}</p>
        <div className="flex flex-col gap-10 ">
            {/* Funds management */}
            <p className="text-[22px] self-center">Funds Management</p>
            <div className="flex justify-evenly gap-10 w-auto min-h-max items-end">
                <div className=" space-y-10">
                    <div className="flex font-bold text-[15px] border h-[90px] items-start p-2">
                        <p>Amount</p>
                        <input
                        type="number"
                        placeholder="0"
                        className="w-full bg-transparent text-end stake-amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <Button
                        disabled={amount==0}
                        value="Add rewards"
                        onClick={handleAddingReward}
                    />
                </div>
                <div className="flex-col gap-10">
                    <Button
                    value="Remove rewards"
                    onClick={handleRemoveReawrd}
                    />
                </div>
            </div>

            {/* Reward Rate management */}
            <p className="text-[22px] self-center p-2">Funds Management</p>
            <div className="flex flex-wrap justify-between gap-10 p-2">
                <div className="flex flex-col gap-10">
                    
                    <div className="border p-3 h-[90px]">
                        <div className="flex font-bold text-[15px] ">
                        <p>duration</p>
                        <input
                        type="number"
                        placeholder="0"
                        className="w-full bg-transparent text-end stake-amount"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        />
                        </div>
                        <div className="flex font-bold text-[15px]">
                            <p className="whitespace-nowrap ">reward %</p>
                            <input
                            type="number"
                            placeholder="0"
                            className="w-full bg-transparent text-end stake-amount"
                            value={rewardRate}
                            onChange={(e) => setRewardRate(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button
                        disabled={rewardRate==0||duration==0}
                        value="Reward rate"
                        onClick={handleAddingRewardRates}
                    />
                </div>
                <div className=" space-y-10">
                        <div className="flex font-bold text-[15px] border h-[90px] p-2 items-start">
                        <p>duration</p>
                        <input
                        type="number"
                        placeholder="0"
                        className="w-full bg-transparent text-end stake-amount"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        />
                    </div>
                    <Button
                        disabled={duration==0}
                        value="Remove reward rate"
                        onClick={handleRemoveRewardRate}
                        duration={duration}
                        signer={signer}
                    />
                </div>
            </div>
            
        </div>
        </div>
    )
}



export default ManageContract;