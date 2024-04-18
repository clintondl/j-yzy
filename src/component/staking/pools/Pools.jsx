import { useEffect } from "react";
import useWallet from "../../../hooks/useWallet";
import poolsData from "../../../utils/poolsData";
import PoolCard from "./PoolCard";
import PoolCardStaked from "./PoolCardStaked";
import { useState } from "react";
import { getAllDurations } from "../../../database/userActions";
import { GetRewardRates } from "../../../hooks/stakingContractFunctions";

function Pools() {
  const { stakedPool,poolData,setPoolData } = useWallet();
  const [pools,setPools]=useState([])

  useEffect(()=>{
    getAllDurations().then((data)=>{
      Promise.all(
        data.data.map(async (d,index)=>{
          const duration=parseInt(d["duration"])
          const rewardRate=await GetRewardRates(duration)
          const days=duration/(24*60*60);
          const apy_p=rewardRate.toString();

          return {
              id: index,
              duration: days+" Days",
              apy: apy_p+"%",
              amountStaked: 0.0,
              status: "locked",
            }
        })
      ).then((poolsArray)=>{
        setPoolData(poolsArray)
        console.log("PoolData found  ",poolData)
      })
    })
  },[])
  
  return (
    <section className="py-[27px]">
      <div className="container">
        <h2 className="font-medium mb-[24px] text-2xl lg:text-[32px]">Pools</h2>
        <ul className="grid gap-[32px] lg:grid-cols-3">
          {poolData.map((pool) =>
            pool.id === stakedPool.id ? (
              <li key={pool.id}>
                <PoolCardStaked pool={pool} />
              </li>
            ) : (
              <li key={pool.id}>
                <PoolCard pool={pool} />
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}

export default Pools;
