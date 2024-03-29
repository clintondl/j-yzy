function SignUp() {

  return (
    <section id="buy" className="py-[103px] bg-[#FFFFFF0D] action-bg">
      <div className="container bg-black">
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center bg-[#ffffff1c] border border-[#FFFFFF0D] py-[74px] px-[48px] w-full">
          <div className="lg:max-w-[386px]">
            <h2 className="font-medium text-3xl space-x-2">
              <span className="block lg:inline-block">Sign Up for</span>
              <span className="block lg:inline-block mt-1">Updates</span>
            </h2>
            <p className="font-lexend  py-3 text-base text-faint-60 lg:max-w-[348px]">
              Be the first to know about the $TENSOR token sale and upcoming
              milestones
            </p>
          </div>
          <form className="lg:w-[50%]">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-b-[1px] bg-transparent p-2 block md:inline-block mr-3 my-3 md:my-0 w-full md:w-[40%] lg:w-[50%] text-[#ffffff] font-rubik"
            />
            <button
              type="submit"
              className="p-2 bg-[#ffffff] text-[#000000] arc-border w-full md:w-[120px]"
            >
              sign up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
