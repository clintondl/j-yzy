import { MdArrowBack } from "react-icons/md";
import poolsData from "../utils/poolsData";
import { useNavigate } from "react-router-dom";
import PoolTabItem from "../component/staking/pools/PoolTabItem";

function StackingDetails() {
  const navigate = useNavigate();

  return (
    <section className="py-[27px]">
      <div className="container">
        <div className="flex gap-[24px] items-center">
          <div className="arced arced-border-white bg-[#0f0f0f] ">
            <button
              onClick={() => navigate(`/staking`)}
              className="h-[50px] w-[50px] flex items-center justify-center bg-transparent border"
            >
              <span>
                <MdArrowBack className="text-xl" />
              </span>
            </button>
          </div>
          <h2 className="font-bold text-[22px] lg:text-[38px]">Stake Tensor</h2>
        </div>
        <div className="max-w-[800px] mx-auto mt-[55px]">
          <ul className="lg:grid-cols-3 gap-[32px] hidden lg:grid">
            {poolsData.map((pool) => (
              <li key={pool.id}>
                <PoolTabItem pool={pool} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default StackingDetails;
