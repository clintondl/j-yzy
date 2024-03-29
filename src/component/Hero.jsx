import rock from "../assets/rock.png";
import { coinTensorOffers } from "../utils/dummyData";

function Hero() {
  return (
    <section className="layout-pd">
      <div className="container flex flex-col items-center text-center">
        <h1 className="font-medium text-4xl lg:text-[54px]  mb-[32px]">
          Make informed decisions, transact securely, and earn passively
        </h1>
        <p className="text-sm text-faint-60 mb-[49px]">
          We&apos;re revolutionizing DeFi with the power of AI-driven insights,
          secure DePIN transactions, and a rewarding revenue-sharing model.
        </p>
        <img
          src={rock}
          alt="rock"
          className=" "
        />
        <div className="flex-box lg:justify-between  arc-border rectangle bg-[#FFFFFF0D] lg:p-10 mt-[95px]">
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
