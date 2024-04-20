import { useState } from "react";
import Button from "../component/Button";
import { AddRewardRate, AddRewards, contractAddress, GetRewardRates, RemoveRewardRate, RemoveRewards, rewardPool, UpdateRewardRates } from "../hooks/stakingContractFunctions";
import { approveTransfer, getERC20Balance, stakingToken } from "../hooks/ERC20Hooks";
import useWallet from "../hooks/useWallet";
import { useEffect } from "react";
import { AddDuration, DeleteDuration, getAllDurations } from "../database/userActions";
import { fromDurationsToPool } from "../utils/helperFunctions";

function ManageContract(){
    const {signer,wallet,setWallet}=useWallet()
    const [amount,setAmount]=useState(0);
    const [duration,setDuration]=useState(0)
    const [pool,setRewardPool]=useState(0)
    const [rewardRate,setRewardRate]=useState(0)
    const [pools,setPools]=useState([])
    const [loading,setLoading]=useState(false)

    const [currentPoolIndex,setCurrentPoolIndex]=useState(3333)

    useEffect(()=>{
        rewardPool().then(setRewardPool)

        fromDurationsToPool().then((poolsArray)=>{
              //setPools([{duration:245,apy:"10 %"},{duration:300,apy:"10 %"}])
              setPools(poolsArray)
              console.log("Pools fetched...",poolsArray)

              if (poolsArray.length > 0) {
                setCurrentPoolIndex(0); // Set the current pool index to 0 once pools are fetched
              }

              console.log("current pool index", currentPoolIndex)
            })
    },[])

    useEffect(() => {
        if (pools.length > 0 && typeof pools[currentPoolIndex] !== 'undefined') {
          setDuration(pools[currentPoolIndex].duration);
          setRewardRate(pools[currentPoolIndex].apy.split(" ")[0]);
        }
      }, [currentPoolIndex, pools]);

    async function updateBalance(){
      setLoading(true)
        try{
          const tokenBalanceAvailable=getERC20Balance(wallet.address,stakingToken).then((balance)=>{
            console.log("wallet found ...",wallet)
            setWallet({...wallet,balance:balance});
          })
        setLoading(false)
        }catch(err){
          console.log("error in action", err)
          setLoading(false)
        }
    }

    async function handleAddingReward(){
      setLoading(true)
        const approving=await approveTransfer(stakingToken,amount,contractAddress,signer)
        try{const adding=await AddRewards(amount,signer);
        updateBalance()
        rewardPool().then(setRewardPool)
        setLoading(false)}
        catch(err){
          console.log("error in action", err)
          setLoading(false)
        }
    }

    async function handleAddingRewardRates(){
      setLoading(true)
        try{
            const api=await AddDuration(duration,rewardRate)

            if(api.ok){
              const days=duration/(24*60*60);
              const APYrewardRate=Math.round((rewardRate/365)*days);
              console.log("Days ", days)
              console.log("APYrewardRate", APYrewardRate)
              const rateAdd=await AddRewardRate(duration,APYrewardRate,signer)
            }

            fromDurationsToPool().then((poolsArray)=>{
                  //setPools([{duration:245,apy:"10 %"},{duration:300,apy:"10 %"}])
                  setPools(poolsArray)
                  console.log("Pools fetched...",pools)
                  setLoading(false)
                })
              
        }catch(err){
          console.log("error in action", err)
          setLoading(false)
          await DeleteDuration(duration)   
        }
    }

    async function handleRemoveRewardRate(){
      setLoading(true)
        const prev_duration=pools[currentPoolIndex].duration
        const prev_reward=pools[currentPoolIndex].full_reward
        try{
            const api=await DeleteDuration(duration)
            
                const removed=await RemoveRewardRate(duration,signer);
                console.log(removed);

        getAllDurations().then((data)=>{
            Promise.all(
              data.data.map(async (d,index)=>{
                const duration=parseInt(d["duration"])
                const full_reward=parseInt(d["reward"])
                const rewardRate=await GetRewardRates(duration)
                const days=duration/(24*60*60);
                const apy_p=rewardRate.toString();
      
                return {
                    id: index,
                    duration: duration,
                    apy: apy_p+" %",
                    full_reward:full_reward,
                    amountStaked: 0.0,
                    status: "locked",
                  }
              })
            ).then((poolsArray)=>{
              //setPools([{duration:245,apy:"10 %"},{duration:300,apy:"10 %"}])
              setPools(poolsArray)
              console.log("Pools fetched...",pools)
              setLoading(false)
            })
          })
    
    }
        catch(err){
          setLoading(false)
            await AddDuration(prev_duration,prev_reward)
        }
    }

    async function handleRemoveReawrd(){
      try{
        setLoading(true)
        const removeRewards=await RemoveRewards(signer);
        updateBalance()
        rewardPool().then(setRewardPool)
        setLoading(false)
      }catch(err){
        console.log("error in action", err)
        setLoading(false)
      }
    }

    async function handleUpdateReward(){
        const prev_duration=pools[currentPoolIndex].duration
        const prev_reward=pools[currentPoolIndex].full_reward
        setLoading(true)
        try{const api_d=await DeleteDuration(duration)
          const days=duration/(24*60*60);
          const APYrewardRate=Math.round((rewardRate/365)*days);
        const updateRewards=await UpdateRewardRates(duration,APYrewardRate,signer)
        const api=await AddDuration(duration,rewardRate)

        // Update pool
        getAllDurations().then((data)=>{
            Promise.all(
              data.data.map(async (d,index)=>{
                const duration=parseInt(d["duration"])
                const full_reward=parseInt(d["reward"])
                const rewardRate=await GetRewardRates(duration)
                const days=duration/(24*60*60);
                const apy_p=rewardRate.toString();
      
                return {
                    id: index,
                    duration: duration,
                    apy: apy_p+" %",
                    full_reward:full_reward,
                    amountStaked: 0.0,
                    status: "locked",
                  }
              })
            ).then((poolsArray)=>{
              //setPools([{duration:245,apy:"10 %"},{duration:300,apy:"10 %"}])
              setPools(poolsArray)
              console.log("Pools fetched...",pools)
              setLoading(false)
            })
          })}catch(err){
            console.log("Error in updating ...",err)
            const api=await AddDuration(prev_duration)
            setLoading(false)

          }

    }
    return(
        <div className="flex flex-col items-center gap-5 lg:gap-10 p-2 mt-3 ">
        <p className=" text-[23px]">Funds Management</p>
        <p className=" w-3/4 lg:w-2/5 flex justify-end p-5 text-[20px] border">{pool}</p>
        <div className=" w-3/4 lg:w-2/5 flex flex-col justify-between p-5 text-[20px] gap-10 ">
            <div className="flex justify-between ">
                <p className="whitespace-nowrap	">Funds balance</p>
                <input value={amount} type="number" className="w-2/5 flex bg-transparent text-end stake-amount border p-[2px]" 
                onChange={(e)=>setAmount(e.target.value)} />
            </div>
            <div className="flex justify-between">
                <Button
                value="Add rewards"
                onClick={handleAddingReward}
                />
                <Button
                value="remove"
                onClick={handleRemoveReawrd}
                />
            </div>
        </div>
        <div className="flex flex-wrap gap-[15px]">
                {
                    pools&&pools.map((p,index)=>(
                        <>
                            <p>Pool {index+1}</p>
                            <input type="radio" checked={currentPoolIndex==index} value={index} name="pool" onChange={(e)=>setCurrentPoolIndex(()=>index)} />
                        </>
                    ))
                }
        </div>
        <div className=" w-auto items-center flex flex-col gap-5">
            <div className="flex w-full justify-center">
                <div className="flex w-1/2 justify-between ">Duration <p>-</p> </div>
                <input value={duration} type="number" className=" w-[90px] flex bg-transparent text-end stake-amount  p-[2px]" onChange={(e)=>setDuration(e.target.value)} />
            </div>
            <div className="flex w-full justify-center">
                <div className="flex w-1/2 justify-between ">Reward % <p>-</p> </div>
                <input value={rewardRate} type="number" className=" w-[90px] flex bg-transparent text-end stake-amount  p-[2px]" onChange={(e)=>setRewardRate(e.target.value)} />
            </div>            <div className="flex gap-5 justify-between">
                <Button
                value="update"
                onClick={handleUpdateReward}
                onMouseEnter={() => alert('Update')}
                />
                <Button
                value="add"
                onClick={handleAddingRewardRates}
                />
                <Button
                value="remove"
                onClick={handleRemoveRewardRate}
                />
            </div>
        </div>
        
        </div>
    )
}



export default ManageContract;