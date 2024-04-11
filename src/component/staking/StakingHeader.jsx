import { BrandLogo, CloseIcon, MenuIcon, WhitePaperIcon } from "../../SvgIcons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavHashLink as HashLink } from "react-router-hash-link";
import useWallet from "../../hooks/useWallet";
import ConnectedWallet from "./ConnectedWallet";

const navLinks = [
  { title: "home", href: "#" },
  { title: "how it works", href: "#how-it-works" },
  { title: "trade", href: "#trade" },
  { title: "buy", href: "#buy" },
  { title: "community", href: "#community" },
];

function StakingHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen((prev) => !prev);
  const [floating, setFloating] = useState(false);

  const { isConnected, connectWallet } = useWallet();

  const changeNavBg = () => {
    window.scrollY >= 200 ? setFloating(true) : setFloating(false);
  };
  const { hash } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <header className="w-screen bg-[#050505]">
      <div
        className={[
          "border-b border-[#ffffff3f] top-0 w-full left-0 right-0 z-[1000] bg-[#050505]",
          floating || isOpen ? "fixed" : "",
        ].join(" ")}
      >
        <div
          className={[
            "container bg-[#050505]",
            floating && !isOpen ? "h-[64px] " : "h-[64px] lg:h-[103px]",
          ].join(" ")}
        >
          <div className="flex items-center justify-between h-full">
            <Link to="/">
              <span className="font-bold inline-flex items-center text-base">
                <BrandLogo />
                <span className="mr-3"></span>CoinTensor AI
              </span>
            </Link>

            <div className="hidden lg:block grow flex items-center text-center">
              <button className="btn rounded pl-[10px]">Staking</button>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden lg:block">
                {!isConnected ? (
                  <div className="arced bg-[#0f0f0f]">
                    <button
                      onClick={connectWallet}
                      className="btn hidden lg:block"
                    >
                      Connect Wallet
                    </button>
                  </div>
                ) : (
                  <ConnectedWallet />
                )}
              </div>
              <div className="lg:hidden">
                {isConnected && <ConnectedWallet />}
              </div>
              <button className="lg:hidden" onClick={toggleNavbar}>
                {isOpen ? (
                  <span className="inline-block p-2">
                    <CloseIcon />
                  </span>
                ) : (
                  <MenuIcon />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-[#050505] fixed top-[64px] left-0 right-0 w-screen lg:hidden h-[calc(100vh-64px)] z-[1000]">
          <ul className={["flex flex-col h-full"].join(" ")}>
            {navLinks.map((link) => (
              <li key={link.title} className="capitalize">
                <HashLink
                  to={link.href}
                  className={[
                    "font-light text-[#ECF1F080] flex gap-4 items-center justify-center py-[35px] border-b border-[#ffffff2a]  text-center w-full",
                    hash === link.href || (link.title === "home" && !hash)
                      ? "nav-active"
                      : "",
                  ].join(" ")}
                  onClick={() => setIsOpen(false)}
                >
                  {link?.icon && <span>{link?.icon}</span>}
                  <span>{link.title}</span>
                </HashLink>
              </li>
            ))}
            <li className="capitalize">
              <a
                href="https://docs.cointensor.io"
                className="text-[#B6B6B6] flex gap-4 items-center justify-center py-[35px] border-b border-[#ffffff2a]  text-center w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <WhitePaperIcon />
                </span>
                <span>Whitepaper</span>
              </a>
            </li>
            {!isConnected && (
              <li className="capitalize flex  justify-center py-[35px]">
                <div className="arced bg-[#0f0f0f]">
                  <button
                    onClick={() => {
                      connectWallet();
                      setIsOpen(false);
                    }}
                    className="btn"
                  >
                    Connect Wallet
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

export default StakingHeader;
