"use client";
import {
  BrandLogo,
  CloseIcon,
  MenuIcon,
  WhitePaperIcon,
} from "@/assets/SvgIcons";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { title: "home", href: "#" },
  { title: "how it works", href: "#how-it-works" },
  { title: "trade", href: "#trade" },
  { title: "buy", href: "#buy" },
  { title: "community", href: "#community" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen((prev) => !prev);
  const [floating, setFloating] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 200 ? setFloating(true) : setFloating(false);
  };

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
            <div>
              <Link href="/">
                <span className="font-bold inline-flex items-center text-base">
                  <BrandLogo />
                  <span className="mr-3"></span>CoinTensor AI
                </span>
              </Link>
            </div>

            <div className="hidden lg:block">
              <ul className="flex items-center text-center">
                {navLinks.map((link) => (
                  <li key={link.title} className="p-4 capitalize items-center ">
                    <Link
                      href={link.href}
                      className={[
                        "font-light text-[#ECF1F080] flex gap-4 items-center",
                        "hash" === link.href ||
                        (link.title === "home" && !"hash")
                          ? "nav-active"
                          : "",
                      ].join(" ")}
                    >
                      <span>{link?.icon}</span>
                      <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
                <li className="p-4 capitalize items-center ">
                  <a
                    href="https://docs.cointensor.io"
                    className="text-[#B6B6B6] flex gap-4 items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <WhitePaperIcon />
                    </span>
                    <span>Whitepaper</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="hidden lg:block">
                <div className="arced bg-[#0f0f0f]">
                  <Link href="/staking" className="btn hidden lg:block">
                    Stake $Tensor
                  </Link>
                </div>
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
                <Link
                  href={link.href}
                  className={[
                    "font-light text-[#ECF1F080] flex gap-4 items-center justify-center py-[35px] border-b border-[#ffffff2a]  text-center w-full",
                    "hash" === link.href || (link.title === "home" && !"hash")
                      ? "nav-active"
                      : "",
                  ].join(" ")}
                  onClick={() => setIsOpen(false)}
                >
                  {link?.icon && <span>{link?.icon}</span>}
                  <span>{link.title}</span>
                </Link>
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
            <li className="capitalize flex  justify-center py-[35px]">
              <div className="arced bg-[#0f0f0f]">
                <Link href="/staking" className="btn hidden lg:block">
                  Stake $Tensor
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
