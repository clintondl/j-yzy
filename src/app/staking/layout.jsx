import StakingHeader from "@/components/staking/StakingHeader";
import React from "react";

function layout({ children }) {
  return (
    <div>
      <StakingHeader />
      {children}
    </div>
  );
}

export default layout;
