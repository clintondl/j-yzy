import Footer from "../component/Footer";
import Header from "../component/Header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
