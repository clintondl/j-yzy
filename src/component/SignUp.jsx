function SignUp() {
  return (
    <section id="buy" className="py-16 bg-[#FFFFFF0D]">
      <div className="container">
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center bg-[#FFFFFF0D] border-1 border-[#ECF1F080] p-8 w-full">
          <div className="lg:w-[33%]">
            <h2 className="font-medium text-3xl space-x-2">
              <span className="block lg:inline-block">Sign Up for</span>
              <span className="block lg:inline-block mt-1">Updates</span>
            </h2>
            <p className="py-3">
              Be the first to know about the $TENSOR token sale and upcoming
              milestones
            </p>
          </div>
          <form className="lg:w-[50%]">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-b-[1px] bg-transparent p-2 block md:inline-block mr-3 my-3 md:my-0 w-full md:w-[40%] lg:w-[50%] text-[#ffffff]"
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
