import { aboutStatement } from "../utils/dummyData";

function TechnologyBehind() {
  return (
    <section className="py-16 relative">
      <div className="container">
        <div className="number absolute w-full text-[64px] lg:text-[200px] font-light left-0 top-[163px] flex justify-center font-dms z-[1]">
          CoinTensor AI
        </div>
        <h2 className="text-center heading-2">
          <span className="lg:block">The Technology Behind </span>
          <span className="lg:block lg:mt-5">CoinTensor AI</span>
        </h2>
        <div className="mt-[87px] lg:mt-[106px] lg:h-[470px] bg-[url(./assets/image.png)] lg:bg-[url(./assets/circular-bg.png)] bg-no-repeat bg-center bg-contain lg:bg-cover lg:max-w-[978px] bg-clip-content bg-origin-content mx-auto ">
          <div className="h-full flex-box lg:items-center space-y-[160px] lg:space-y-[0] justify-between ">
            {aboutStatement.map(({ heading, content }) => (
              <div
                key={heading}
                className="border border-gray-800 p-[24px] lg:p-[32px] lg:w-[40%] lg:max-w-[340px] bg-[#000000b0] min-h-[249px] lg:min-h-[300px]"
              >
                <h3 className="text-[22px] lg:text-4xl leading-6 font-medium ">
                  {heading}
                </h3>
                <p className="py-3 primary-text">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologyBehind;
