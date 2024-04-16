import { useState } from "react";
import Button from "../component/Button";
import { AddRewardRate, AddRewards, contractAddress, RemoveRewardRate, RemoveRewards } from "../hooks/stakingContractFunctions";
import { approveTransfer, stakingToken } from "../hooks/ERC20Hooks";
import useWallet from "../hooks/useWallet";

function ManageContract(){
    const {signer,wallet,setWallet}=useWallet()
    const [amount,setAmount]=useState(0);
    const [duration,setDuration]=useState(0)

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

    async function  handleAddingRewardRates(){
        const rateAdd=await AddRewardRate(duration,amount,signer)
    }

    async function handleRemoveRewardRate(){
        const removed=await RemoveRewardRate(duration,signer);
        console.log(removed);
    }

    async function handleRemoveReawrd(){
        const removeRewards=await RemoveRewards(signer);
        updateBalance()
    }
    return(
        <div className="flex flex-wrap p-2 gap-10">
            {/* Funds management */}
            <div className="flex flex-wrap gap-10 w-auto">
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
                <div className="">
                    <Button
                    value="Remove rewards"
                    onClick={handleRemoveReawrd}
                    />
                </div>
            </div>

            {/* Reward Rate management */}
            <div className="flex flex-wrap gap-10">
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
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button
                        disabled={amount==0||duration==0}
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
    )
}



export default ManageContract;