import { MdArrowBack } from "react-icons/md";

function StackingDetails() {
  return (
    <section className="py-[27px]">
      <div className="container">
        <div className="flex gap-[24px] items-center">
          <div className="arced arced-border-white bg-[#0f0f0f] ">
            <button className="h-[50px] w-[50px] flex items-center justify-center bg-transparent border">
              <span>
                <MdArrowBack className="text-xl" />
              </span>
            </button>
          </div>
          <h2 className="font-bold text-[22px] lg:text-[38px]">Stake Tensor</h2>
        </div>
        <div className="max-w-[784px] mx-auto">
                
        </div>
      </div>
    </section>
  );
}

export default StackingDetails;
