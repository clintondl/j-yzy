import { steps } from "../utils/dummyData";

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 ">
      <div className="container">
        <h2 className="text-center heading-2 w-[85%]  mx-auto p-3 lg:py-6">
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
  );
}

export default HowItWorks;
