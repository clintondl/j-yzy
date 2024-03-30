import { roadMap } from "../utils/dummyData";

function RoadMap() {
  return (
    <section className="py-16">
      <div className=" relative">
        <div className="text-center py-16">
          <header>
            <h2 className="heading-2 mb-[10px]">Roadmap</h2>
            <p className="mx-auto primary-text max-w-[400px] text-xl">
              A clear concise timeline outlining key milestones, including
            </p>
          </header>
          <div className="max-w-[1440px] mx-auto mt-10 road-map w-full lg:h-[356px] lg:flex lg:items-center">
            <div className="flex flex-col lg:flex-row lg:justify-center gap-[16px] items-center lg:items-stretch container">
              {roadMap.map(({ heading, content }, i) => (
                <div
                  key={heading}
                  className={[
                    "border border-[#ffffff4c] p-4 bg-[#000000] lg:w-[calc(20%)] xl:w-[calc(25%-16px)] max-w-[276.5px]",
                    i === 0 ? "" : "border-dashed ",
                  ].join(" ")}
                >
                  <p className=" font-medium leading-[24px] mt-2 text-left text-sm">
                    {heading}
                  </p>
                  <p className="py-3 primary-text text-left text-sm">
                    {content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;