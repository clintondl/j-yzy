import StakingHeader from "./StakingHeader";
import { Outlet } from "react-router-dom";

function StakingLayout() {
  return (
    <div>
      <StakingHeader />
      <Outlet />
    </div>
  );
}

export default StakingLayout;
