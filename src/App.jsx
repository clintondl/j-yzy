import { BrowserRouter } from "react-router-dom";
import Routes from "./component/Routes";
import { WalletProvider } from "./hooks/useWallet";

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>{" "}
    </WalletProvider>
  );
}

export default App;
