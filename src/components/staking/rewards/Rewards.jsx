"use client";
import useWallet from "../../../hooks/useWallet";
import NotStaked from "./NotStaked";
import Staked from "./Staked";

function Rewards() {
  const { stakedPool } = useWallet();

  return (
    <section className="py-[27px]">
      <div className="container">
        <h2 className="font-medium mb-[24px] text-2xl lg:text-[32px]">
          Rewards
        </h2>
        <div className="arced bg-black">
          <div className="bg-[#FFFFFF0F] w-full">
            {stakedPool?.id ? <Staked /> : <NotStaked />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rewards;
