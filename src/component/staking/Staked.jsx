function Staked() {
  return (
    <div className="min-h-[213px] lg:min-h-[311px] px-[16px] py-[32px] lg:px-[32px]">
      <header className="mb-[16px] lg:mb-[32px]">
        <h3 className="font-bold text-[22px] lg:text-[32px] mb-1">My Stake</h3>
        <p className="text-[#FFFFFF99] text-xs lg:text-sm">
          Stake $Tensor to Earn $Tensor
        </p>
      </header>
      <div className="border border-[#FFFFFF1F] py-[24px] px-[12px] lg:px-[32px] lg:grid lg:grid-cols-2">
        <div className="mb-[12px] flex flex-col justify-center">
          <h4 className="text-sm text-faint-60 mb-1">Rewards</h4>
          <p className="text-[#007C29] text-2xl mb-1">+1,615.5 $Tensor</p>
          <p className="text-xs text-faint-60">$123.23</p>
        </div>
        <div className="grid grid-cols-2 gap-[20px] py-[19px] px-[18px] border border-[#FFFFFF1F] ">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-light text-faint-60">
              Staked in Pool [14days]
            </p>
            <p className="text-lg">234 $tensor</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs text-faint-60">
              Unlocks in
              <span className="block text-white text-lg">10 days</span>
            </p>
            <p className="text-xs text-faint-60">April 25th 17:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staked;
