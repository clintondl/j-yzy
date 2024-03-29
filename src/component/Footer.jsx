import { BrandLogo } from "../SvgIcons";
import Xlogo from "../assets/X.png";
import shareIcon from "../assets/share.png";
import Image from "./Image";

function Footer() {
  return (
    <footer className="bg-[#FFFFFF03] border-t border-[#FFFFFF0D] backdrop-blur-[100px]">
      <div className="container pt-[68px] pb-[19px] space-y-[32px]">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-[32px]">
          <p className="primary-text text-sm py-4 text-center lg:text-left">
            <span className="block">For partnerships and support contact </span>
            <span className="block">Hello@cointensor.io </span>
          </p>
          <div>
            <h6 className="font-bold inline-flex items-center text-base">
              <BrandLogo />
              <span className="mr-3"></span>CoinTensor AI
            </h6>
          </div>
          <div className="flex items-center gap-[32px]">
            <Image
              src={Xlogo}
              alt="x-brand-logo"
              classNames={["w-[24px] max-w-[24px]"]}
            />
            <Image
              src={shareIcon}
              alt="share-icon"
              classNames={["w-[24px] max-w-[24px]"]}
            />
          </div>
        </div>
        <p className="text-sm text-center primary-text">
          Copyright © 2024 CoinTensor AI. All rights reserved Privacy | Terms
        </p>
      </div>
    </footer>
  );
}

export default Footer;
