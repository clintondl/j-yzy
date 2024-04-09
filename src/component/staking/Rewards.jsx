import NotStaked from "./NotStaked";
import Staked from "./Staked";

function Rewards() {
  const isStaked = true;
  return (
    <section>
      <div className="container">
        <h2 className="font-medium mb-[24px] text-2xl lg:text-[32px]">
          Rewards
        </h2>
        <div className="bg-[#FFFFFF0F] w-full">
          {isStaked ? <Staked /> : <NotStaked />}
        </div>
      </div>
    </section>
  );
}

export default Rewards;
