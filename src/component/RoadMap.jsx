import { roadMap } from "../utils/dummyData";

function RoadMap() {
  return (
    <section className="py-16">
      <div className=" relative">
        <div className="text-center py-16">
          <header>
            <h2 className="heading">Roadmap</h2>
            <p className="lg:w-[33%] mx-auto  primary-text">
              A clear concise timeline outlining key milestones, including
            </p>
          </header>
          <div className="mt-10 road-map w-full h-[356px] flex items-center">
            <div className="flex flex-col lg:flex-row gap-[16px] container">
              {roadMap.map(({ heading, content }, i) => (
                <div
                  key={heading}
                  className={[
                    "border border-[#ffffff4c] p-4 bg-[#000000] max-w-[276.5px]",
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
/* Frame 7 */

/* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 24px;
// gap: 16px;

// width: 276.5px;
// height: 198px;

// background: #000000;
// background: color(display-p3 0.000 0.000 0.000);
// border: 1px dashed #ffffff4c;
// border: 1px dashed color(display-p3 1.000 1.000 1.000 / 0.3);

// /* Inside auto layout */
// flex: none;
// order: 2;
// align-self: stretch;
// flex-grow: 0;
