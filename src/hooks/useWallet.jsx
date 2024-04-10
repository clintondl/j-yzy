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
  const [stakedPool, setStakedPool] = useState({});

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
        setIsConnected(true);
      },
      disconnectWallet: () => setIsConnected(false),
    }),
    [isConnected, wallet, stakedPool]
  );

  return (
    <WalletContext.Provider value={values}>{children}</WalletContext.Provider>
  );
};

export default useWallet;
