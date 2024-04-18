import { useState, useEffect } from "react";
import { getStakes } from "../../../database/userActions";
import useWallet from "../../../hooks/useWallet";
import NotStaked from "./NotStaked";
import Staked from "./Staked";
import { getUserStakeById } from "../../../hooks/stakingContractFunctions";

function Rewards() {
  const { wallet,signer } = useWallet();
  const [stakeIds, setStakeIds] = useState(null);
  const [stakesData, setStakesData] = useState(null);

  useEffect(() => {
    if (wallet.address) {
      getStakes(wallet.address)
        .catch((err) => console.log("Error while fetching stake records", err))
        .then((data)=>{console.log("Stake ids found",data);setStakeIds(data.data)});
    }
  }, [wallet]);

  useEffect(() => {
    if (stakeIds) {
      console.log("Stakeids changed, getting stakes....");
      Promise.all(stakeIds.map((id) => getUserStakeById(wallet.address, id,signer)))
        .then((stakes)=>{console.log("Stakes fetched from contract",stakes);setStakesData(stakes)})
        .catch((err) => console.log("Error while fetching stakes data", err));
    }
  }, [stakeIds]);

  return (
    <section className="py-[27px]">
      <div className="container">
        <h2 className="font-medium mb-[24px] text-2xl lg:text-[32px]">
          Rewards
        </h2>
        <div className="arced bg-black">
          <div className="bg-[#FFFFFF0F] w-full">
            {stakesData ? 
              (stakesData.map((stake,index)=>(
                <Staked key={index} stakedAmount={parseInt(stake[0].toString())} stakeDuration={parseInt(stake[1].toString())} stakedAt={parseInt(stake[2].toString())} reward={(stake[0].toString()/100*stake[3].toString()).toFixed(0)} id={stakeIds[index]} />
              )))
            : <NotStaked />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rewards;
