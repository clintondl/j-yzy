import { aboutStatement } from "../utils/dummyData";

function TechnologyBehind() {
  return (
    <section className="py-16 relative">
      <div className="container">
        <div className="number absolute w-full lg:text-[200px] font-bold left-0 top-[163px] flex justify-center font-dms z-[1]">
          CoinTensor AI
        </div>
        <h2 className="text-center heading-2">
          <span className="lg:block">The Technology Behind </span>
          <span className="lg:block lg:mt-5">CoinTensor AI</span>
        </h2>
        <div className="mt-[106px] p-[47px] flex-box  mx-auto justify-between bg-[url(./assets/circular-bg.png)] bg-no-repeat bg-center bg-cover max-w-[978px]">
          {aboutStatement.map(({ heading, content }) => (
            <div
              key={heading}
              className="border border-[#FFFFFF0D] p-[32px] lg:w-[40%] bg-[#0000009a]"
            >
              <h3 className="text-[22px]  lg:text-4xl leading-6 font-medium mt-2 lg:w-3/5">
                {heading}
              </h3>
              <p className="py-3 primary-text">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologyBehind;
