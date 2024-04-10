import { useMemo, useState } from "react";
import { createContext, useContext } from "react";

const WalletContext = createContext();

const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [wallet, setWallet] = useState({
    address: "0x1ddbB18ECf92d02Bb386224F0d160f30305150dD",
    balance: 300000,
  });
  const [stakedPools, setStakedPools] = useState([]);

  const stakePool = (stake) => {
    const activeStake = stakedPools.find((p) => p.id === stake.id);
    if (!activeStake) {
      setStakedPools((prev) => [...prev, stake]);
    } else {
      setStakedPools((prev) => [
        ...prev.filter((p) => p.id !== stake.id),
        {
          ...activeStake,
          amountStaked: activeStake.amountStaked + stake.amountStaked,
        },
      ]);
    }
  };

  const values = useMemo(
    () => ({
      isConnected,
      wallet,
      stakePool,
      connectWallet: () => {
        setIsConnected(true);
      },
      disconnectWallet: () => setIsConnected(false),
    }),
    [isConnected, wallet]
  );

  return (
    <WalletContext.Provider value={values}>{children}</WalletContext.Provider>
  );
};

export default useWallet;
