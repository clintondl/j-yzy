import Summary from "../component/staking/Summary";
import Pools from "../component/staking/pools/Pools";
import Rewards from "../component/staking/rewards/Rewards";

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
