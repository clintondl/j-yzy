import useWallet from "../../../hooks/useWallet";
import poolsData from "../../../utils/poolsData";
import PoolCard from "./PoolCard";
import PoolCardStaked from "./PoolCardStaked";

function Pools() {
  const { stakedPool } = useWallet();
  
  return (
    <section className="py-[27px]">
      <div className="container">
        <h2 className="font-medium mb-[24px] text-2xl lg:text-[32px]">Pools</h2>
        <ul className="grid gap-[32px] lg:grid-cols-3">
          {poolsData.map((pool) =>
            pool.id === stakedPool.id ? (
              <li key={pool.id}>
                <PoolCardStaked pool={pool} />
              </li>
            ) : (
              <li key={pool.id}>
                <PoolCard pool={pool} />
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}

export default Pools;
