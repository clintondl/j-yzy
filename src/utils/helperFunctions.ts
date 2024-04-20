import { getAllDurations } from "../database/userActions"
import { GetRewardRates } from "../hooks/stakingContractFunctions"

export async function fromDurationsToPool(){
    const durations=await getAllDurations()
    const sortedData=durations.data.sort((a,b)=>parseInt(a["duration"])-parseInt(b["duration"]))

    return Promise.all(
        sortedData.map(async (d,index)=>{
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
      )
}