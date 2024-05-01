"use client";
import { useParams } from "next/navigation";
import { apvTip } from "@/utils/tooltipContents";
import { useId } from "react";
import { useRouter } from "next/navigation";
import ToolTipMark from "@/components/ToolTipMark";

function PoolTabItem({ pool }) {
  const instanceId = useId();
  const { id } = useParams();
  const router = useRouter();
  const isActive = id === pool.id;

  return (
    <div
      className="bg-black arced arced-border cursor-pointer"
      tabIndex={1}
      onClick={() =>
        router.replace(`/staking/${pool.id}`)
      }
    >
      <div
        className={[
          "p-[16px] grid grid-cols-2 gap-[20px]",
          isActive ? "bg-[#FFFFFFE5]" : "bg-[#FFFFFF0F]",
        ].join(" ")}
      >
        <div className="space-y-[10px]">
          <h3
            className={[
              "text-[18px] font-bold",
              isActive && "text-[#050505]",
            ].join(" ")}
          >
            {pool.duration}
          </h3>
          <div className="space-x-1 text-faint bg-[#202020] flex items-center px-[8px] py-[4px]">
            <span className="text-[10px] whitespace-nowrap">
              Locked Staking
            </span>
          </div>
        </div>
        <div className="space-y-[10px]">
          <h4 className="text-xs text-[#8D8D99]">
            APY
            <ToolTipMark id={instanceId} content={apvTip} />
          </h4>
          <p className="text-primary font-medium text-[22px]">{pool.apy}</p>
        </div>
      </div>
    </div>
  );
}

export default PoolTabItem;
