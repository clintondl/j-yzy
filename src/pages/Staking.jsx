import { useEffect } from "react";
import Summary from "../component/staking/Summary";
import Pools from "../component/staking/pools/Pools";
import Rewards from "../component/staking/rewards/Rewards";
import useWallet from "../hooks/useWallet";

function Staking() {
  const {wallet,setWallet,selectWallet}=useWallet()
  useEffect(() => {
    console.log("Checking wallet in browser storage")
    const wallet = JSON.parse(localStorage.getItem('wallet'));
    if (wallet) {
      console.log("wallet found ...",wallet)
      setWallet(wallet);
      selectWallet();
    }
  }, []);
  return (
    <div>
      <Summary />
      <Pools />
      <Rewards />
    </div>
  );
}

export default Staking;
