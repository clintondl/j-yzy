"use client";

import { WalletProvider } from "@/hooks/useWallet";

function Providers({ children }) {
  return <WalletProvider>{children}</WalletProvider>;
}

export default Providers;
