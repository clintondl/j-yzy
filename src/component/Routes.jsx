import { useRoutes } from "react-router-dom";
import Staking from "../pages/Staking";
import Home from "../pages/Home";
import Layout from "../layout";

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
    path: "/staking",
    element: <Staking />,
  },
];

function Routes() {
  const Routes = useRoutes(AppRoutes);
  return <div>{Routes}</div>;
}

export default Routes;
