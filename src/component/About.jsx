import { coinTensorMission } from '../utils/dummyData';

function About() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-center lg:text-left heading-2 lg:max-w-[450px] pb-8">
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
  );
}

export default About;