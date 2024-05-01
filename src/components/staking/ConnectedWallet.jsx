"use client";
import { useState } from "react";
import Button from "../Button";
import useWallet from "@/hooks/useWallet.jsx";
import CopyIcon from "@/assets/CopyIcon";

function ConnectedWallet() {
  const [isOpen, setIsOpen] = useState(false);
  const { disconnectWallet, wallet } = useWallet();

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={1}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="w-[40px] h-[40px] rounded bg-[#2F2F39] flex items-center justify-center">
          <img src="/wallet.svg" alt="wallet" />
        </div>
        <div className="">
          <p className="text-[#F2F2F2] text-sm font-medium">0xf07...bf79c</p>
          <p className="text-xs text-faint">10,000 $Tensor</p>
        </div>
        <div>
          <img src="/arrow-down.svg" alt="" />
        </div>
      </div>
      {isOpen && (
        <div className="bg-[#050505] absolute right-0 z-[200] top-full border border-[#F2F4F740]  rounded">
          <h3 className="text-[18px] font-bold mb-[24px] px-[32px] pt-[32px]">
            Your Wallet
          </h3>
          <div className="flex items-center gap-3 px-[32px]">
            <div className="min-w-[40px] min-h-[40px] w-[40px] h-[40px] rounded bg-[#2F2F39] flex items-center justify-center">
              <img src="/wallet.svg" alt="wallet" />
            </div>
            <div className="">
              <p className="text-[#F2F2F2] text-sm font-medium">
                0x09750ad...bf79c
              </p>
              <p className="text-[#ACACAC] whitespace-nowrap">
                Phantom
                <span className="text-[10px] text-faint ml-2">
                  10,000 TENSOR
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
            <Button onClick={disconnectWallet} value="Disconnect Wallet" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ConnectedWallet;
