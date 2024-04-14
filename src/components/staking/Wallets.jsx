"use client";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import useWallet from "../../hooks/useWallet";

const wallets = [
  { name: "MetaMask", icon: <img src="/Icons/wc-meta.svg" alt="dxfszxcv" /> },
  {
    name: "WalletConnect",
    icon: <img src="/Icons/wc-connect.svg" alt="dxfszxcv" />,
  },
  {
    name: "CoinBase Wallet",
    icon: <img src="/Icons/coinbase.svg" alt="dxfszxcv" />,
  },
  { name: "Keplr", icon: <img src="/Icons/Keplr.svg" alt="dxfszxcv" /> },
];

function Wallets({ onClose }) {
  const { selectWallet } = useWallet();
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center z-[1000] bg-[#000000e4]">
      <div className="arced arced-border-white border-faint bg-black  ">
        <div className="border border-faint w-[90vw] max-w-[526px] p-[32px]">
          <div className="flex justify-between items-center mb-[32px]">
            <h2>Connect a wallet</h2>
            <button
              onClick={onClose}
              className="text-xl text-[#717A8C] hover:text-faint-60 p-1 hover:bg-faint-5"
            >
              <RiCloseFill />
            </button>
          </div>
          <ul className="space-y-[16px]">
            {wallets.map((item) => (
              <li
                tabIndex={1}
                onClick={selectWallet}
                key={item.name}
                className="px-[24px] py-[12px] font-medium text-faint-60 flex items-center justify-between bg-[#131313] hover:bg-[#13131384] cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <div>
                  <MdKeyboardArrowRight />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Wallets;
