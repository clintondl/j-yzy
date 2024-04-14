import Summary from "@/components/staking/Summary";
import Pools from "@/components/staking/pools/Pools";
import Rewards from "@/components/staking/rewards/Rewards";

function Staking() {
  return (
    <div>
      <Summary />
      <Pools />
      <Rewards />
    </div>
  );
}

export default Staking;
