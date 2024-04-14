import { useMemo, useState } from "react";
import { createContext, useContext } from "react";
import Wallets from "../component/staking/Wallets";

const WalletContext = createContext();

const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [signer,setSigner]=useState(null)
  const [wallet, setWallet] = useState({
    address: null,
    balance: 300000,
    tokenName:"",
  });
  const [stakedPool, setStakedPool] = useState({});
  const [showSelectWallet, setShowSelectWallet] = useState(false);

  const [stakes,setStakes]=useState(null);

  const stakePool = (stake) => {
    console.log("Adding pool to staked",stake);
    setStakedPool(stake);
  };

  const values = useMemo(
    () => ({
      stakes,setStakes,
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
    [isConnected, wallet, stakedPool,signer,stakes]
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
