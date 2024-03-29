import { useRoutes } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Home from "../pages/Home";

const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
];

function Layout() {
  const Routes = useRoutes(AppRoutes);
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      {Routes}
      <Footer />
    </div>
  );
}

export default Layout;
