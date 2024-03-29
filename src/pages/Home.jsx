import TechnologyBehind from "../component/TechnologyBehind";
import SensorTokens from "../component/SensorTokens";
import RoadMap from "../component/RoadMap";
import HowItWorks from "../component/HowItWorks";
import SignUp from "../component/SignUp";
import Community from "../component/Community";
import About from "../component/About";
import Hero from "../component/Hero";

function Home() {
  return (
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
  );
}

export default Home;
