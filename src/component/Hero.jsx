import rock from "../assets/rock.png";
import { coinTensorOffers } from "../utils/dummyData";

function Hero() {
  return (
    <section className="">
      <div className="container">
        <h1 className="font-medium text-4xl lg:text-[54px] text-center lg:w-3/5 mx-auto pt-[52px] lg:leading-[60px]">
          Make informed decisions, transact securely, and earn passively
        </h1>
        <p className="text-sm font-normal text-center lg:w-2/5 mx-auto pt-8 pb-4 lg:pb-8">
          We&apos;re revolutionizing DeFi with the power of AI-driven insights,
          secure DePIN transactions, and a rewarding revenue-sharing model.
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
  );
}

export default Hero;
