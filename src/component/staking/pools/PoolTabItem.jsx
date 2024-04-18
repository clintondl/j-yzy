import { useParams, useNavigate } from "react-router-dom";
import { apvTip } from "../../../utils/tooltipContents";
import ToolTipMark from "../../ToolTipMark";
import { useId } from "react";

function PoolTabItem({ pool }) {
  const instanceId = useId();
  const { id } = useParams();
  const navigate = useNavigate();
  const isActive = id === pool.id;
  return (
    <div
      className="bg-black arced arced-border cursor-pointer"
      tabIndex={1}
      onClick={() =>
        navigate(`/staking/${pool.duration}`, {
          replace: true,
        })
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
