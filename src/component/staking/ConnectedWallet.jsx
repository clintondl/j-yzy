import walletImg from "../../assets/wallet.svg";
import arrowDown from "../../assets/arrow-down.svg";
import { useState } from "react";
import CopyIcon from "../../assets/CopyIcon.jsx";
import Button from "../Button";
import useWallet from "../../hooks/useWallet.jsx";

function ConnectedWallet() {
  const [isOpen, setIsOpen] = useState(false);
  const { disconnectWallet, wallet,setWallet,setSigner } = useWallet();

  async function handleDisconnect() {
    await disconnectWallet();
    localStorage.removeItem("wallet")
    setWallet({address:"",balance:0,tokenName:""})
    setSigner(null)
  }

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={1}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="w-[40px] h-[40px] rounded bg-[#2F2F39] flex items-center justify-center">
          <img src={walletImg} alt="wallet" />
        </div>
        <div className="">
          <p className="text-[#F2F2F2] text-sm font-medium">{wallet.address}</p>
          <p className="text-xs text-faint">{wallet.balance} ${wallet.tokenName}</p>
        </div>
        <div>
          <img src={arrowDown} alt="" />
        </div>
      </div>
      {isOpen && (
        <div className="bg-[#050505] absolute right-0 z-[200] top-full border border-[#F2F4F740]  rounded">
          <h3 className="text-[18px] font-bold mb-[24px] px-[32px] pt-[32px]">
            Your Wallet
          </h3>
          <div className="flex items-center gap-3 px-[32px]">
            <div className="min-w-[40px] min-h-[40px] w-[40px] h-[40px] rounded bg-[#2F2F39] flex items-center justify-center">
              <img src={walletImg} alt="wallet" />
            </div>
            <div className="">
              <p className="text-[#F2F2F2] text-sm font-medium">
                {wallet.address}
              </p>
              <p className="text-[#ACACAC] whitespace-nowrap">
                Ethereum
                <span className="text-[10px] text-faint ml-2">
                  {wallet.balance} {wallet.tokenName}
                </span>
              </p>
            </div>
            <div className="min-w-[40px] min-h-[40px] w-[40px] h-[40px] p-[10px]">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(wallet.address);
                }}
              >
                <CopyIcon />
              </button>
            </div>
          </div>
          <div className="border-t border-[#F2F4F740] p-[32px] mt-[32px]">
            <Button onClick={handleDisconnect} value="Disconnect Wallet" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ConnectedWallet;
