import { useRoutes } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/Home"));

const AppRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
];

function Layout() {
  const Routes = useRoutes(AppRoutes);
  return (
    <div className="flex flex-col min-h-screen relative ">
      <Header />
      {Routes}
      <Footer />
    </div>
  );
}

export default Layout;
