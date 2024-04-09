import PoolCard from "./PoolCard";

const pools = [
  {
    id: "pool-1",
    duration: "14 Days",
    apy: "5%",
    amountStaked: 0.0,
    status: "locked",
  },
  {
    id: "pool-2",
    duration: "28 Days",
    apy: "10%",
    amountStaked: 0.0,
    status: "locked",
  },
  {
    id: "pool-3",
    duration: "58 Days",
    apy: "20%",
    amountStaked: 0.0,
    status: "locked",
  },
];

function Pools() {
  return (
    <section className="py-[27px]">
      <div className="container">
        <h2 className="font-medium mb-[24px] text-2xl lg:text-[32px]">Pools</h2>
        <ul className="grid gap-[32px] lg:grid-cols-3">
          {pools.map((pool) => (
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
