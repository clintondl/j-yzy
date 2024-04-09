import poolsData from "../../../utils/poolsData";
import PoolCard from "./PoolCard";



function Pools() {
  return (
    <section className="py-[27px]">
      <div className="container">
        <h2 className="font-medium mb-[24px] text-2xl lg:text-[32px]">Pools</h2>
        <ul className="grid gap-[32px] lg:grid-cols-3">
          {poolsData.map((pool) => (
            <li key={pool.id}>
              <PoolCard pool={pool} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Pools;
