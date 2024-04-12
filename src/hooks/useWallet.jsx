import { useMemo, useState } from "react";
import { createContext, useContext } from "react";
import Wallets from "../component/staking/Wallets";

const WalletContext = createContext();

const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [signer,setSigner]=useState(null)
  const [wallet, setWallet] = useState({
    address: "0x1ddbB18ECf92d02Bb386224F0d160f30305150dD",
    balance: 300000,
    tokenName:"",
  });
  const [stakedPool, setStakedPool] = useState({});
  const [showSelectWallet, setShowSelectWallet] = useState(false);

  const stakePool = (stake) => {
    console.log("Adding pool to staked",stake);
    setStakedPool(stake);
  };

  const values = useMemo(
    () => ({
      signer,setSigner,
      isConnected,
      wallet,
      stakedPool,
      setWallet,
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
