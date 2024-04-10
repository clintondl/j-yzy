import poolsData from "../../../utils/poolsData";
import { useParams, useNavigate } from "react-router-dom";
import ToolTipMark from "../../ToolTipMark";
import useWallet from "../../../hooks/useWallet";
import { BrandLogo } from "../../../SvgIcons";
import Button from "../../Button";
import { useState } from "react";

function PoolBroadCard({ unstake = false }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const { wallet, stakePool } = useWallet();
  const [amount, setAmount] = useState();

  const pool = poolsData.find((pool) => pool.id === id);

  const handleStake = () => {
    if (amount) {
      stakePool({
        ...pool,
        stakedAmount: amount,
      });
      navigate(`/staking`);
    }
  };

  return (
    <div className="bg-black arced arced-border mt-[24px]">
      <div className="py-[32px] px-[16px] lg:px-[32px] bg-[#FFFFFF0F]">
        <h2 className="font-bold text-[28px] lg:text-[32px]">
          {pool?.duration}
        </h2>
        <div className="grid grid-cols-5 lg:grid-cols-3 gap-[12px] lg:gap-[36px] mt-[24px]">
          <div className="space-y-[10px] border-r border-faint col-span-2 lg:col-span-1">
            <h4 className="text-xs text-[#8D8D99]">Available to Stake</h4>
            <p className="font-medium text-sm lg:text-[20px]">
              {wallet.balance} $Tensor
            </p>
          </div>
          <div className="space-y-[10px]  border-r border-faint col-span-1">
            <h4 className="text-xs text-[#8D8D99]">
              APY
              <ToolTipMark />
            </h4>
            <p className="font-medium text-sm lg:text-[20px]">{pool.apy}</p>
          </div>
          <div className="space-y-[10px] col-span-2 lg:col-span-1">
            <h4 className="text-xs lg:text-sm text-[#8D8D99]">Staked Amount</h4>
            <p className="font-medium text-sm lg:text-[20px]">
              {Number.parseFloat(pool.amountStaked).toFixed(2)} $Tensor
            </p>
          </div>
        </div>
        <div className="h-[1px] bg-[#FFFFFF26] my-[32px] " />
        <div className="bg-[#0f0f0f] arced arced-border-white border-faint-50">
          <div className="border border-faint-50 flex items-center px-[24px] py-[20px]">
            <div>
              <span className="font-medium inline-flex items-center text-base lg:text-[20px]">
                <span className="mr-3">
                  <BrandLogo />
                </span>
                Tensor
              </span>
            </div>
            <div className="text-end grow">
              <div className="font-bold text-[24px]">
                <input
                  type="number"
                  placeholder="0"
                  className="w-full bg-transparent text-end stake-amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="text-faint-60 text-xs font-light">
                $
                {Number.parseFloat(
                  amount ? wallet.balance - amount : wallet.balance
                ).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
        <div className="my-[16px] flex justify-center gap-[12px] lg:gap-[16px]">
          {[
            { name: "10%", value: 0.1 },
            { name: "25%", value: 0.25 },
            { name: "50%", value: 0.5 },
            { name: "75%", value: 0.75 },
            { name: "Max", value: 1 },
          ].map((item) => (
            <div
              key={item.name}
              className="arced arced-border-white bg-[#0f0f0f] border-[#9999993f]"
            >
              <button
                onClick={() => setAmount(wallet.balance * item.value)}
                className="h-[36px] lg:h-[44px] px-[9px] lg:px-[27px] flex items-center justify-center bg-transparent border border-[#9999993f] text-faint-50 text-sm lg:text-base font-medium focus:outline-none hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-100"
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-[32px]">
          <Button
            onClick={handleStake}
            value={unstake ? "Unstake" : "Stake now"}
          />
        </div>
        <div className="h-[1px] bg-[#FFFFFF26] my-[32px] " />
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-[#858491]">Network fee</span>
          </div>
          <div className="text-end">
            <div className="font-bold text-sm">0.00034 ETH</div>
            <div className="text-faint-60 text-xs font-light">$0.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoolBroadCard;
