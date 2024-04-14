"use client";
import { useMemo, useState } from "react";
import { createContext, useContext } from "react";
import Wallets from "@/components/staking/Wallets";

const WalletContext = createContext();

const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [wallet, setWallet] = useState({
    address: "0x1ddbB18ECf92d02Bb386224F0d160f30305150dD",
    balance: 300000,
  });
  const [stakedPool, setStakedPool] = useState({});
  const [showSelectWallet, setShowSelectWallet] = useState(false);

  const stakePool = (stake) => {
    setStakedPool(stake);
  };

  const values = useMemo(
    () => ({
      isConnected,
      wallet,
      stakedPool,
      stakePool,
      connectWallet: () => {
        setShowSelectWallet(true);
      },
      selectWallet: () => {
        setShowSelectWallet(false);
        setIsConnected(true);
      },
      disconnectWallet: () => setIsConnected(false),
    }),
    [isConnected, wallet, stakedPool]
  );

  return (
    <WalletContext.Provider value={values}>
      <div className="relative">
        {children}
        {showSelectWallet && (
          <Wallets onClose={() => setShowSelectWallet(false)} />
        )}
      </div>
    </WalletContext.Provider>
  );
};

export default useWallet;
