import Xlogo from "../assets/X.png";
import shareIcon from "../assets/share.png";
function Community() {
  return (
    <section id="community" className="layout-pd">
      <div className="container">
        <article className="flex-box items-center">
          <div>
            <h2 className="heading-2 font-bold mx-auto md:mx-0 mb-4">
              <span className="lg:block">Join the </span>
              <span className="lg:block lg:mt-5">CoinTensor AI </span>
              <span className="lg:block lg:mt-5">Community</span>
            </h2>
            <p className="text-base text-faint-60 mb lg:w-3/4">
              Stay informed about the latest project developments and exciting
              announcements by following us on social media
            </p>
          </div>
          <div className="flex justify-between primary-text mt-[32px] w-full lg:w-1/2 lg:mt-0">
            <div className="gap-[16px] border-[#FFFFFF24] border flex flex-col justify-center h-[150px] md:h-[200px] w-[40%] md:w-[210px] bg-[#FFFFFF05]">
              <img
                src={Xlogo}
                alt="x-brand-logo"
                className="lg:h-[50px] h-30px max-h-full w-[40px] lg:w-[50px] block mx-auto"
              />
              <p className="font-normal leading-[33px] text-base text-center hidden lg:block">
                X.xom/cointensorai
              </p>
            </div>
            <div className="gap-[16px] border-[#FFFFFF24] border flex flex-col justify-center h-[150px] md:h-[200px] w-[40%] md:w-[210px] bg-[#FFFFFF05]">
              <img
                src={shareIcon}
                alt="x-brand-logo"
                className="lg:h-[50px] h-30px max-h-full w-[40px] lg:w-[50px] block mx-auto"
              />
              <p className="text-center font-normal leading-[33px] hidden lg:block text-base">
                Join us on Telegram
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Community;
