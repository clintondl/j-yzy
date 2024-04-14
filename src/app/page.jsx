import TechnologyBehind from "@/components/TechnologyBehind";
import SensorTokens from "@/components/SensorTokens";
import RoadMap from "@/components/RoadMap";
import HowItWorks from "@/components/HowItWorks";
import SignUp from "@/components/SignUp";
import Community from "@/components/Community";
import About from "@/components/About";
import Hero from "@/components/Hero";
import HomeLayout from "@/layout";

function Home() {
  return (
    <HomeLayout>
      <main className="flex-1">
        <Hero />
        <About />
        <HowItWorks />
        <TechnologyBehind />
        <SensorTokens />
        <RoadMap />
        <SignUp />
        <Community />
      </main>
    </HomeLayout>
  );
}

export default Home;
