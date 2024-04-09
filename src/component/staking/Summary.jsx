import { useMemo } from "react";
import ToolTipMark from "../ToolTipMark";

function Summary() {
  const data = useMemo(
    () => [
      {
        id: 1,
        title: "TVL",
        value: `$0.00`,
        tooltip: "Tevele",
      },
      {
        id: 2,
        title: "Total Staked",
        value: `0.00 $Tensor `,
      },
      {
        id: 3,
        title: "Total Rewards Earned",
        value: `0.00 $Tensor`,
      },
      {
        id: 4,
        title: "No of Stakers",
        value: `0`,
      },
    ],
    []
  );
  return (
    <section className="py-[27px]">
      <div className="container">
        <h2 className="font-medium mb-[24px] text-2xl lg:text-[32px]">Pools</h2>
        <div className="bg-black arced arced-border summary">
          <ul className="grid grid-cols-2 gap-[32px] lg:grid-cols-4 px-[16px] py-[18px] lg:px-[21px] lg:py-[40px]">
            {data.map((item, i, arr) => (
              <li key={item.id}>
                <div
                  className="space-y-[8px] lg:space-y-[16px]"
                  style={{
                    borderRight:
                      i !== arr.length - 1 ? "1px solid #FFFFFF40" : "none",
                  }}
                >
                  <h3 className="text-xs lg:text-base text-faint">
                    {item.title} {item.tooltip && <ToolTipMark />}
                  </h3>
                  <p className="font-medium text-lg lg:text-[22px]">
                    {item.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Summary;

// background: #8D8D99;
// background: #FFFFFF;
// background: #FFFFFF40;


