import { useState } from "react";
import useWallet from "../../../hooks/useWallet";
import Button from "../../Button";
import { addStake, deleteAStake } from "../../../database/userActions";
import { collectRewards } from "../../../hooks/stakingContractFunctions";

function Staked({stakedAmount,stakeDuration,stakedAt,reward,id}) {
  const {signer,wallet}=useWallet();

  const [loading,setLoading]=useState(false)
  function secondsToDay(seconds){
    return parseInt(seconds)/60/60/24;
  }

  function secondsToHours(seconds){
    return parseInt(seconds)/60/60;
  }

  function convertSeconds(seconds) {
    let days = Math.floor(seconds / (24*60*60));
    seconds  -= days*24*60*60;
    let hours   = Math.floor(seconds / (60*60));
    seconds  -= hours*60*60;
    let minutes = Math.floor(seconds / 60);
    seconds  -= minutes*60;

    return `${days}: days,${hours}: hours,${minutes}: minutes`;
}
// deleting stake from db 0x7e7ccfb39b9d31d62cd9e2e066e0aaea02543cb4 34c8fa2e-78d2-466e-8f3b-e6121166294a
  const handleCollectReward=async()=>{
    setLoading(true);
    try{
      const api=await deleteAStake(wallet.address,id)
      if(api.ok){
        await collectRewards(id,signer)
      }
      setLoading(false)
    }catch(err){
      setLoading(false)
      addStake(wallet.address,id)
      console.log("Error in collecting rewards", err)
    }
  }

  const timeTillUnlock=Math.floor(new Date().getTime() / 1000)-(stakedAt+stakeDuration)
  console.log(Math.floor(new Date().getTime() / 1000),stakedAt+stakeDuration)
  const unlockDate=new Date(stakedAt*1000+stakeDuration*1000);
  return (
    <div className="min-h-[213px] lg:min-h-[311px] px-[16px] py-[32px] lg:px-[32px]">
      <header className="mb-[16px] lg:mb-[32px]">
        <h3 className="font-bold text-[22px] lg:text-[32px] mb-1">My Stake</h3>
        <p className="text-[#FFFFFF99] text-xs lg:text-sm">
          Stake $Tensor to Earn $Tensor
        </p>
      </header>
      <div className="border border-[#FFFFFF1F] py-[24px] px-[12px] lg:px-[32px] lg:grid lg:grid-cols-2">
        <div className="mb-[12px] flex flex-col justify-center">
          <h4 className="text-sm text-faint-60 mb-1">Rewards</h4>
          <p className="text-primary text-2xl mb-1">+{parseInt(reward)+parseInt(stakedAmount)} $Tensor</p>
          <p className="text-xs text-faint-60">${stakedAmount}</p>
        </div>
        <div className="grid grid-cols-2 gap-[20px] py-[19px] px-[18px] border border-[#FFFFFF1F] ">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-light text-faint-60">
              Staked in Pool [{parseInt(stakeDuration)>60*60*24?secondsToDay(stakeDuration)+ "d":secondsToHours(stakeDuration).toFixed(3)+ " h"}]
            </p>
            <p className="text-lg">234 $tensor</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs text-faint-60">
              Unlocks in
              <span className="block text-white text-lg">{timeTillUnlock>0?
                <Button 
                disabled={loading}
                value="Unlocked"
                onClick={handleCollectReward}
                id
                />
              :(convertSeconds(Math.floor(new Date().getTime() / 1000)-stakedAt))}</span>
            </p>
            <p className="text-xs text-faint-60">{unlockDate.toDateString()} at {unlockDate.getHours()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staked;
