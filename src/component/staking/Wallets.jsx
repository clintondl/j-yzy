import { MdKeyboardArrowRight } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import metaMask from "../../assets/Icons/wc-meta.svg";
import wcConnect from "../../assets/Icons/wc-connect.svg";
import Keplr from "../../assets/Icons/Keplr.svg";
import coinbase from "../../assets/Icons/coinbase.svg";
import useWallet from "../../hooks/useWallet";

import { ethers } from 'ethers';
import { getERC20Balance, getERC20Name, stakingToken } from "../../hooks/ERC20Hooks";
import { useEffect } from "react";


const wallets = [
  { name: "MetaMask", icon: <img src={metaMask} alt="dxfszxcv" /> },
  // { name: "WalletConnect", icon: <img src={wcConnect} alt="dxfszxcv" /> },
  // { name: "CoinBase Wallet", icon: <img src={coinbase} alt="dxfszxcv" /> },
  // { name: "Keplr", icon: <img src={Keplr} alt="dxfszxcv" /> },
];

const targetNetworkId = '0xaa36a7';

// checks if current chain matches with the one we need
// and returns true/false
const checkNetwork = async () => {
  if (window.ethereum) {
    const currentChainId = await window.ethereum.request({
      method: 'eth_chainId',
    });
    console.log("Cureent network id ",currentChainId)
    // return true if network id is the same
    if (currentChainId == targetNetworkId) return true;
    // return false is network id is different
    return false;
  }
}

async function addCain(chainId){
  console.log("Adding chain", chainId)
  try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: chainId, // Sepolia network
        chainName: 'Sepolia',
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: ['https://ethereum-sepolia-rpc.publicnode.com','https://endpoints.omniatech.io/v1/eth/sepolia/public'],
      }],
    });
    console.log("Chain added")
    return true
  } catch (addError) {
    console.error("Erro in adding chain",addError);
    return false
  }
}

function Wallets({onClose}) {
  const { selectWallet,setWallet,setSigner } = useWallet();

  async function connectWallet() {
    if (window.ethereum) {
        selectWallet();
        
        let eth_accounts=await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(
          "Ethereum accounts",eth_accounts
        );
    
        try{
          const correctNetwork=await checkNetwork()
          if(!correctNetwork){
            try{
              await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: targetNetworkId }], // Sepolia network
              });
            }catch(e){
            
              await addCain(targetNetworkId)
            }
          }
        }catch(e){
          console.log("Error in switching network",e);
        }

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer =await provider.getSigner();
        console.log("signer", signer);
        setSigner(signer);
        const tokenBalanceAvailable=await getERC20Balance(eth_accounts[0],stakingToken)
        const tokenName=await getERC20Name(stakingToken)
        localStorage.setItem('wallet', JSON.stringify({address:eth_accounts[0],balance:tokenBalanceAvailable,tokenName}));
        console.log("wallet set in localStorage", JSON.parse(localStorage.getItem('wallet')));
        setWallet({address:eth_accounts[0],balance:tokenBalanceAvailable,tokenName});
        

    } else {
        console.log("Please install MetaMask!");
    }
  }


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
                onClick={connectWallet}
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
