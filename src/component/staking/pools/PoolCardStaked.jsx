import lock from "../../../assets/Icons/lock.png";
import useWallet from "../../../hooks/useWallet";
import Button from "../../Button";
import ToolTipMark from "../../ToolTipMark";

function PoolCardStaked({ pool }) {
  const { isConnected, connectWallet, stakedPool } = useWallet();

  return (
    <div className="bg-black arced arced-border h-full">
      <div className="bg-[#FFFFFF0F] pool-card h-full">
        <div className="flex justify-end p-[8px]">
          <div className="space-x-1 text-faint bg-faint-5 flex items-center px-[8px] py-[4px]">
            <span>
              <img src={lock} alt="zdxzx" className="w-[16px]" />
            </span>
            <span>Locked Staking</span>
          </div>
        </div>
        <div className="p-[32px] pt-0 space-y-[16px]">
          <div>
            <h3 className="font-bold text-[28px]">{pool.duration}</h3>
          </div>
          <div className="flex gap-[36px] py-[14px]">
            <div className="border-r border-faint-25 space-y-1 w-1/3">
              <h4 className="text-xs text-[#8D8D99]">
                APY
                <ToolTipMark />
              </h4>
              <p className="text-primary font-medium text-lg">{pool.apy}</p>
            </div>
            <div className="row-span-3 space-y-1 grow">
              <h4 className="text-xs text-[#8D8D99]">Total Staked</h4>
              <p className="font-medium text-lg">
                {Number.parseFloat(pool.amountStaked).toFixed(2)} $Tensor
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 border border-[#FFFFFF1F] px-[12px] py-[11px]">
            <div className="space-y-1">
              <h4 className="text-xs text-[#8D8D99]">Rewards</h4>
              <p className="font-medium text-sm">1,615.5 $Tensor</p>
              <p className="font-medium text-xs text-faint-60">$123.23</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs text-[#8D8D99]">My Stake</h4>
              <p className="font-medium text-sm">1,615.5 $Tensor</p>
              <p className="font-medium text-xs text-faint-60">$123.23</p>
            </div>
          </div>
          <div className="space-y-1 pt-[8px]">
            <h4 className="text-[10px] text-[#8D8D99] font-light">
              Unlocks in
            </h4>
            <p className="font-medium text-sm">
              10 days
              <span className="text-[10px] text-faint-60 ml-2">
                April 25th 17:00
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoolCardStaked;
