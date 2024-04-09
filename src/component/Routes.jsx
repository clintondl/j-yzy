import { useRoutes } from "react-router-dom";
import Staking from "../pages/Staking";
import Home from "../pages/Home";
import Layout from "../layout";
import StakingLayout from "./staking/StakingLayout";
import StackingDetails from "../pages/StackingDetails";

const AppRoutes = [
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },

  {
    element: <StakingLayout />,
    children: [
      {
        path: "/staking",
        element: <Staking />,
      },
      {
        path: "/staking/:id",
        element: <StackingDetails />,
      },
    ],
  },
];

function Routes() {
  const Routes = useRoutes(AppRoutes);
  return <div>{Routes}</div>;
}

export default Routes;
