import { coinTensorMission } from "../utils/dummyData";

function About() {
  return (
    <section className="py-16">
      <div className="container lg:flex">
        <div className="lg:min-w-[40%]">
          <h2 className="text-center lg:text-left heading-2 pb-8">
            <span className="lg:inline-block">Why </span>
            <span className="lg:inline-block">CoinTensor AI</span>
          </h2>
        </div>

        <div className="lg:mt-[100px] flex flex-wrap gap-[24px] lg:gap-[32px] items-start">
          {coinTensorMission.map((offer, index) => (
            <div
              key={offer.heading}
              className={[
                "bg-[#FFFFFF0D] py-[38px] px-[32px] w-full lg:w-1/2 lg:max-w-[340px]",
                index === 0
                  ? "lg:mt-[63px]"
                  : index === 3
                  ? "lg:mt-[-63px]"
                  : "",
                (index + 1) % 2 === 0 ? "arc-border-2" : "arc-border",
              ].join(" ")}
            >
              <h3 className="capitalize font-light heading-3 ">
                {offer.heading}
              </h3>
              <p className="text-sm mt-3 leading-6 text-faint-60">
                {offer.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
