import { useId } from "react";
import lock from "../../../assets/Icons/lock.png";
import useWallet from "../../../hooks/useWallet";
import { apvTip } from "../../../utils/tooltipContents";
import Button from "../../Button";
import ToolTipMark from "../../ToolTipMark";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getERC20Name, stakingToken } from "../../../hooks/ERC20Hooks";

function PoolCard({ pool }) {
  const { isConnected, connectWallet } = useWallet();
  const navigate = useNavigate();
  const instanceId = useId();
  const [tokenName,setTokenname]=useState("");

  getERC20Name(stakingToken).then((name)=>{setTokenname(name)})
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
            <p className="text-faint-60 text-sm">
              Stake ${tokenName} to Earn rewards daily.
            </p>
          </div>
          <div className="flex gap-[36px] py-[14px]">
            <div className="border-r border-faint-25 space-y-[16px] w-1/3">
              <h4 className="text-xs text-[#8D8D99]">
                APY
                <ToolTipMark id={instanceId} content={apvTip} />
              </h4>
              <p className="text-primary font-medium text-[32px]">{pool.apy}</p>
            </div>
            <div className="row-span-3 space-y-[16px] grow">
              <h4 className="text-xs text-[#8D8D99]">Total Staked</h4>
              <p className="font-medium text-[22px]">
                {Number.parseFloat(pool.amountStaked).toFixed(2)} ${tokenName}
              </p>
            </div>
          </div>
          <div className="text-center">
            {isConnected ? (
              <Button
                onClick={() => navigate(`/staking/${pool.id}`)}
                value="Stake Now"
              />
            ) : (
              <Button onClick={connectWallet} value="Connect Wallet" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoolCard;
