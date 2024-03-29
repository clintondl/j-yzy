import rock from "../assets/rock.png";
import Xlogo from "../assets/X.png";
import shareIcon from "../assets/share.png";

import {
  coinTensorMission,
  coinTensorOffers,
  steps,
} from "../utils/dummyData";
import TechnologyBehind from "../component/TechnologyBehind";
import SensorTokens from "../component/SensorTokens";
import RoadMap from "../component/RoadMap";

function Home() {
  return (
    <main className="flex-1">
      <section className="">
        <div className="container">
          <h1 className="font-medium text-4xl lg:text-[54px] text-center lg:w-3/5 mx-auto pt-[52px] lg:leading-[60px]">
            Make informed decisions, transact securely, and earn passively
          </h1>
          <p className="text-sm font-normal text-center lg:w-2/5 mx-auto pt-8 pb-4 lg:pb-8">
            We&apos;re revolutionizing DeFi with the power of AI-driven
            insights, secure DePIN transactions, and a rewarding revenue-sharing
            model.
          </p>
          <img
            src={rock}
            alt="rock"
            className="lg:h-[300px] max-h-full block mx-auto pb-12 pt-6 lg:pt-12"
          />
          <div className="flex-box lg:justify-between  arc-border rectangle bg-[#FFFFFF0D] lg:p-10">
            {coinTensorOffers.map((offer) => (
              <div key={offer.heading} className="flex gap-5 lg:w-[30%] p-5">
                <div>{offer.icon}</div>
                <div>
                  <p className="text-base font-bold">{offer.heading}</p>
                  <p className="text-sm leading-[21.7px] primary-text font-light mt-2">
                    {offer.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <h2 className="text-center lg:text-left font-medium text-2xl lg:text-6xl lg:leading-[80px] lg:max-w-[450px] pb-8">
            <span className="lg:inline-block">Why </span>
            <span className="lg:inline-block">CoinTensor AI</span>
          </h2>

          <div className="flex-box sm:items-center sm:justify-between lg:w-[65%] lg:ml-auto lg:flex-wrap lg:relative ">
            {coinTensorMission.map((offer, index) => (
              <div
                key={offer.heading}
                className={[
                  "arc-border bg-[#FFFFFF0D] lg:w-[48%] lg:relative lg:h-[240px] mb-8 lg:mb-0 p-5",
                  index === 0
                    ? "lg:top-[60px] lg:left-0"
                    : index === 1
                    ? "lg:top-0 lg:right-0 ac-border-2"
                    : index === 2
                    ? "lg:top-[90px] lg:left-0 ac-border-2"
                    : "lg:top-[30px] lg:right-0",
                ].join(" ")}
              >
                <p className="capitalize font-light lg:text-4xl leading-6 ">
                  {offer.heading}
                </p>
                <p className="text-base mt-3 leading-7 ">{offer.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <h2 className="text-center text-3xl lg:text-5xl lg:leading-[37.5px] w-[85%] font-bold mx-auto p-3 lg:py-6">
            How CoinTensor AI Works
          </h2>
          <div className="flex-box lg:justify-center bg-[#FFFFFF0D] lg:w-full flex-wrap px-5 py-10">
            {steps.map((step) => (
              <div
                key={step.heading}
                className="lg:p-8 lg:w-[45%] lg:relative mb-5 lg:mb-0"
              >
                <div className="text-6xl lg:text-[150px] number font-bold lg:absolute left-0 top-0">
                  {step.number}
                </div>
                <div className="lg:relative lg:left-[18%] lg:w-[70%] lg:top-6">
                  <p className="capitalize text-[22px]  lg:text-2xl leading-6 font-medium mt-2 lg:w-3/5">
                    {step.heading}
                  </p>
                  <p className="text-base mt-3  leading-7 font-normal primary-text">
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TechnologyBehind />
      <SensorTokens />
      <RoadMap />
      <section className="py-16 bg-[#FFFFFF0D]">
        <div className="container">
          <div className="lg:flex lg:flex-row lg:justify-between lg:items-center bg-[#FFFFFF0D] border-1 border-[#ECF1F080] p-8 w-full">
            <div className="lg:w-[33%]">
              <h2 className="font-medium text-3xl">
                <span className="block lg:inline-block">Sign Up for</span>
                <span className="block lg:inline-block mt-1">Updates</span>
              </h2>
              <p className="py-3">
                Be the first to know about the $TENSOR token sale and upcoming
                milestones
              </p>
            </div>
            <form className="lg:w-[50%]">
              <input
                type="text"
                placeholder="Enter your email"
                className="border-b-[1px] bg-transparent p-2 block md:inline-block mr-3 my-3 md:my-0 w-full md:w-[40%] lg:w-[50%] text-[#ffffff]"
              />
              <button
                type="submit"
                className="p-2 bg-[#ffffff] text-[#000000] arc-border w-full md:w-[120px]"
              >
                sign up
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <article className="flex-box items-center">
            <div>
              <h5 className="text-3xl lg:text-5xl lg:leading-[37.5px] lg:w-1/2 font-bold mx-auto md:mx-0 py-2 lg:py-6">
                <span className="lg:block">Join the </span>
                <span className="lg:block lg:mt-5">CoinTensor AI </span>
                <span className="lg:block lg:mt-5">Community</span>
              </h5>
              <p className="font-normal leading-[33px] text-base primary-text lg:w-3/4">
                Stay informed about the latest project developments and exciting
                announcements by following us on social media
              </p>
            </div>
            <div className="flex justify-between primary-text mt-5 w-full lg:w-1/2 lg:mt-0">
              <div className="gap-[16px] border-[#FFFFFF24] border flex flex-col justify-center h-[150px] md:h-[200px] w-[40%] md:w-[210px] bg-[#FFFFFF05]">
                <img
                  src={Xlogo}
                  alt="x-brand-logo"
                  className="lg:h-[50px] h-30px max-h-full w-[40px] lg:w-[50px] block mx-auto"
                />
                <p className="font-normal leading-[33px] text-base text-center hidden lg:block">
                  X.xom/cointensorai
                </p>
              </div>
              <div className="gap-[16px] border-[#FFFFFF24] border flex flex-col justify-center h-[150px] md:h-[200px] w-[40%] md:w-[210px] bg-[#FFFFFF05]">
                <img
                  src={shareIcon}
                  alt="x-brand-logo"
                  className="lg:h-[50px] h-30px max-h-full w-[40px] lg:w-[50px] block mx-auto"
                />
                <p className="text-center font-normal leading-[33px] hidden lg:block text-base">
                  Join us on Telegram
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
// border: 1px solid #FFFFFF24

export default Home;
