import { useState } from "react";
import useWallet from "../../../hooks/useWallet";
import Button from "../../Button";
import { addStake, deleteAStake } from "../../../database/userActions";
import { collectRewards } from "../../../hooks/stakingContractFunctions";
import { getERC20Balance } from "../../../hooks/ERC20Hooks";

function Staked({index,stakedAmount,stakeDuration,stakedAt,reward,id}) {
  const {signer,wallet,setWallet}=useWallet();
  const [countDown,setCountDown]=useState("")
  const [unlocked,setUnlocked]=useState(false)

  const [loading,setLoading]=useState(false)
  function secondsToDay(seconds){
    return parseInt(seconds)/60/60/24;
  }

  function secondsToHours(seconds){
    return parseInt(seconds)/60/60;
  }

  async function updateBalance(){
    const tokenBalanceAvailable=getERC20Balance(wallet.address,stakingToken).then((balance)=>{
        console.log("wallet found ...",wallet)
        setWallet({...wallet,balance:balance});
      })
}

  // function convertSeconds(seconds) {
  //   let days = Math.floor(seconds / (24*60*60));
  //   seconds  -= days*24*60*60;
  //   let hours   = Math.floor(seconds / (60*60));
  //   seconds  -= hours*60*60;
  //   let minutes = Math.floor(seconds / 60);
  //   seconds  -= minutes*60;

  //   return `${days}:days ${hours}:hours ${minutes}:minutes`;
  // }

  // Your convertSeconds function
function convertSeconds(seconds) {
  let days = Math.floor(seconds / (24*60*60));
  seconds -= days * 24*60*60;
  let hours = Math.floor(seconds / (60*60));
  seconds -= hours * 60*60;
  let minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;

  return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

function startCountdown(durationInSeconds) {
  const endTime = Date.now() + durationInSeconds * 1000;

  const intervalId = setInterval(() => {
    const timeLeftInSeconds = Math.round((endTime - Date.now()) / 1000);

    if (timeLeftInSeconds <= 0) {
      clearInterval(intervalId);
      setUnlocked(true);
    } else {
      const timeString = convertSeconds(timeLeftInSeconds);
      setCountDown(timeString);
    }
  }, 1000);
}

function findPoolDuration(durationInSeconds) {
  if(durationInSeconds < 60) return `${durationInSeconds}s`;
  if (durationInSeconds < 3600) {
    const minutes = Math.floor(durationInSeconds / 60);
    return `${minutes}m`;
  }
  if(durationInSeconds < 86400){
    const hours = Math.floor(durationInSeconds / 3600);
    return `${hours}h`;
  }
  if(durationInSeconds >= 86400){
    const days = Math.floor(durationInSeconds / 86400);
    return `${days}d`;
  }
}


// Function to start the countdown
// function startCountdown(durationInSeconds) {
//   let secondsRemaining = durationInSeconds;
//   const intervalId = setInterval(() => {
//     // Update the display with the converted time
//     const timeString = convertSeconds(secondsRemaining);
//     // Decrement the remaining time
//     secondsRemaining--;
    
//     const countdownElement = document.getElementById('countdown');

//     // Check if the countdown is complete
//     if (secondsRemaining < 0) {
//       clearInterval(intervalId);
//       setUnlocked(true)
//       //console.log('Countdown finished!'); // Replace with what should happen when countdown ends
//     }else if(countdownElement) {
//       setCountDown(timeString);
//     }


    
//   }, 1000);
// }
  // function startCountdown(seconds) {
  //   function updateCountdown() {
  //     const days = Math.floor(seconds / (24 * 60 * 60));
  //     const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  //     const minutes = Math.floor((seconds % (60 * 60)) / 60);
  //     const remainingSeconds = seconds % 60;
  
  //     // Format the output
  //     const formatted = `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
  
  //     // Display the countdown timer
  //     document.getElementById('countdown').textContent = formatted;
  
  //     // When countdown reaches zero
  //     if (seconds <= 0) {
  //       clearInterval(countdownTimer);
  //       document.getElementById('countdown').textContent = 'Time is up!';
  //     } else {
  //       // Decrease seconds
  //       seconds--;
  //     }
  //   }
  
  //   // Update the countdown every second
  //   const countdownTimer = setInterval(updateCountdown, 1000);
  // }


// deleting stake from db 0x7e7ccfb39b9d31d62cd9e2e066e0aaea02543cb4 34c8fa2e-78d2-466e-8f3b-e6121166294a
  const handleCollectReward=async()=>{
    setLoading(true);
    try{
      const api=await deleteAStake(wallet.address,id)
      if(api.ok){
        try{
          await collectRewards(id,signer)
        }catch(err){
          addStake(wallet.address,id)
          window.location.reload();
          setLoading(false)
        }
      }
      await updateBalance()
      setLoading(false)

    }catch(err){
      setLoading(false)
      
      console.log("Error in collecting rewards", err)
    }
  }

  const timeTillUnlock=Math.floor(new Date().getTime() / 1000)-(stakedAt+stakeDuration)
  startCountdown(Math.round((stakedAt+stakeDuration)-(new Date().getTime() / 1000))); // Replace 5000 with your total seconds

  const unlockDate=new Date(stakedAt*1000+stakeDuration*1000);
  return (
    <div className="min-h-[213px] lg:min-h-[311px] px-[16px] py-[32px] lg:px-[32px]">
      {index==0&&
      <header className="mb-[16px] lg:mb-[32px]">
        <h3 className="font-bold text-[22px] lg:text-[32px] mb-1">My Stake</h3>
        <p className="text-[#FFFFFF99] text-xs lg:text-sm">
          Stake $Tensor to Earn $Tensor
        </p>
      </header>}
      <div className="border border-[#FFFFFF1F] py-[24px] px-[12px] lg:px-[32px] lg:grid lg:grid-cols-2">
        <div className="mb-[12px] flex flex-col justify-center">
          <h4 className="text-sm text-faint-60 mb-1">Rewards</h4>
          <p className="text-primary text-2xl mb-1">+{parseInt(reward)+parseInt(stakedAmount)} $Tensor</p>
          <p className="text-xs text-faint-60">${stakedAmount}</p>
        </div>
        <div className="grid grid-cols-2 gap-[20px] py-[19px] px-[18px] border border-[#FFFFFF1F] ">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-light text-faint-60">
              Staked in {findPoolDuration(parseInt(stakeDuration))} pool
            </p>
            <p className="text-lg">{stakedAmount} $tensor</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs text-faint-60">
              Unlocks in
              {!unlocked?<span id="countdown" className="block text-white text-lg">
                {countDown}
              </span>
              :<span id="countdown" className="block text-white text-lg">
                <Button 
                disabled={loading}
                value="Unlocked"
                onClick={handleCollectReward}
                id
                />
                </span>}
            </p>
            <p className="text-xs text-faint-60">{unlockDate.toDateString()} at {unlockDate.getHours()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staked;
