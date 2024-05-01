import Footer from "@/components/Footer";
import Header from "@/components/Header";

function HomeLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
