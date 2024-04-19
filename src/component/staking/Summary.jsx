import { useMemo } from "react";
import ToolTipMark from "../ToolTipMark";
import { tvlTip } from "../../utils/tooltipContents";
import { useState } from "react";
import { getActiveStakerCount, getRewardsEarned, stakedByUser, totalStaked } from "../../hooks/stakingContractFunctions";
import useWallet from "../../hooks/useWallet";
import { getERC20Name, stakingToken } from "../../hooks/ERC20Hooks";
import { useEffect } from "react";

function Summary() {
  const {wallet}=useWallet()
  const [tvl,setTvl]=useState(0)
  const [staked,setStaked]=useState(0)
  const [rewards,setRewards]=useState(0)
  const [stakers,setStakers]=useState(0)
  const [tokenName,setTokenName]=useState("")

  getERC20Name(stakingToken).then((name)=>setTokenName(name))
  const data = useMemo(
    () => [
      // {
      //   id: 1,
      //   title: "TVL",
      //   value: tvl,
      //   tooltip: {
      //     id: "tvl",
      //     content: tvlTip,
      //   },
      // },
      {
        id: 2,
        title: "Total Staked",
        value: `${staked} $${tokenName} `,
      },
      {
        id: 3,
        title: "Total Rewards Earned",
        value: `${rewards} $${tokenName}`,
      },
      {
        id: 4,
        title: "No of Stakers",
        value: stakers,
      },
    ],
    [tvl, staked, rewards, stakers]
  );

  
  useEffect(()=>{
    totalStaked().then((amount) => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=cointensor ai&vs_currencies=usd')
      .then((response) => response.json())
      .then((data) => {
        console.log(`The price of TENSOR in USD is $${JSON.stringify(data)}`);
        setTvl(amount);
      });
});


    stakedByUser(wallet.address).then((amount)=>setStaked(amount))
    getActiveStakerCount().then((stakers)=>setStakers(stakers))
    getRewardsEarned(wallet.address).then((reward)=>setRewards(reward))
  },[])
  

  return (
    <section className="py-[27px]">
      <div className="container flex flex-col">
        <h2 className="font-bold mb-[24px] text-[22px] lg:text-[38px]">
          Staking
        </h2>
        <div className="bg-black arced arced-border-white summary border-faint-25 items-center w-max self-center">
          <ul className="grid grid-cols-2 gap-[32px] lg:grid-cols-4 px-[16px] py-[18px] lg:px-[21px] lg:py-[40px]">
            {data.map((item, i, arr) => (
              <li key={item.id}>
                <div
                  className="space-y-[8px] lg:space-y-[16px]"
                  style={{
                    borderRight:
                      i !== arr.length - 1 ? "1px solid #FFFFFF40" : "none",
                  }}
                >
                  <h3 className="text-xs lg:text-base text-faint">
                    {item.title}
                    {item.tooltip && <ToolTipMark {...item.tooltip} />}
                  </h3>
                  <p className="font-medium text-lg lg:text-[22px]">
                    {item.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Summary;
