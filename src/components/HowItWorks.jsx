import { steps } from "../utils/dummyData";

function HowItWorks() {
  return (
    <section id="how-it-works" className="layout-pd">
      <div className="container ">
        <h2 className="text-center heading-2 mb-[43px]">
          How CoinTensor AI Works
        </h2>
        <div className="flex flex-col lg:flex-row lg:flex-wrap  bg-[#FFFFFF0D] gap-[20px] pb-[27px] lg:relative lg:p-[70px]">
          {steps.map((step) => (
            <div
              key={step.heading}
              className="p-[24px] w-full lg:max-w-[calc(50%-10px)] lg:flex group lg:pb-[100px] card"
            >
              <div className="text-6xl lg:text-[200px] group-hover:text-6xl group-hover:pb-[30px] group-hover:pl-[30px] lg:leading-[.8] font-light font-dms lg:w-[200px] lg:min-w-[200px] lg:h-[130px] inline-flex items-end transition-all duration-300 ease-in-out">
                <span className="number number-active">{step.number}</span>
              </div>
              <div className="lg:relative lg:top-[25px] lg:left-[-20px] lg:max-w-[340px] z-[200]">
                <p className="text-[22px]  lg:text-[32px] font-medium mt-2 ">
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
