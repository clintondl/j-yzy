import { useEffect } from "react";
import Summary from "../component/staking/Summary";
import Pools from "../component/staking/pools/Pools";
import Rewards from "../component/staking/rewards/Rewards";
import useWallet from "../hooks/useWallet";
import {ethers} from "ethers";
import { user } from "../database/scheemas/user";

function Staking() {
  const {wallet,setWallet,selectWallet,setSigner,setStakes }=useWallet()
  useEffect(() => {
    console.log("Checking wallet in browser storage")
    const wallet = JSON.parse(localStorage.getItem('wallet'));
    if (wallet) {
      console.log("wallet found ...",wallet)
      setWallet(wallet);
      selectWallet();
      const provider = new ethers.BrowserProvider(window.ethereum);
      provider.getSigner(wallet.address).then((signer)=>{
        console.log("recreated signer", signer)
        setSigner(signer);
      });
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
