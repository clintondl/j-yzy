"use client";
import { WalletProvider } from "@/hooks/useWallet";

function Providers({ children }: any) {
  return <WalletProvider>{children}</WalletProvider>;
}

export default Providers;
