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
            <a
              href="mailto:Hello@cointensor.io"
              className="block text-[#ffffffb9]"
            >
              Hello@cointensor.io
            </a>
          </p>
          <div>
            <h6 className="font-bold inline-flex items-center text-base">
              <BrandLogo />
              <span className="mr-3"></span>CoinTensor AI
            </h6>
          </div>
          <div className="flex items-center gap-[32px]">
            <a
              href="https://x.com/cointensor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Xlogo}
                alt="x-brand-logo"
                classNames={["w-[24px] max-w-[24px]"]}
              />
            </a>
            <a
              href="https://t.me/+pbMXLv_Tf5c3NTZk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={shareIcon}
                alt="share-icon"
                classNames={["w-[24px] max-w-[24px]"]}
              />
            </a>
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
