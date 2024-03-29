import { BrandLogo, CloseIcon, MenuIcon, WhitePaperIcon } from "../SvgIcons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavHashLink as HashLink } from "react-router-hash-link";

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
  const { pathname, asPath, hash, ...others } = useLocation();
  console.log({ pathname, asPath, hash, others }, location.pathname);

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
          <div className="flex items-center h-full">
            <h1 className="grow font-bold inline-flex items-center text-base">
              <BrandLogo />
              <span className="mr-3"></span>CoinTensor AI
            </h1>
            <button className="lg:hidden" onClick={toggleNavbar}>
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
            <div className="hidden lg:block grow">
              <ul className="flex items-center text-center">
                {navLinks.map((link) => (
                  <li key={link.title} className="p-4 capitalize items-center ">
                    <HashLink
                      to={link.href}
                      className={[
                        "font-light text-[#ECF1F080] flex gap-4 items-center",
                        hash === link.href || (link.title === "home" && !hash)
                          ? "nav-active"
                          : "",
                      ].join(" ")}
                    >
                      <span>{link?.icon}</span>
                      <span>{link.title}</span>
                    </HashLink>
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
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-[#050505] fixed top-[64px] left-0 right-0 w-screen lg:hidden h-[calc(100vh-64px)] z-[1000]">
          <ul
            className={[
              "flex flex-col justify-evenly items-center text-center h-full",
            ].join(" ")}
          >
            {navLinks.map((link) => (
              <li key={link.title} className="p-4 capitalize items-center ">
                <HashLink
                  to={link.href}
                  className={[
                    "font-light text-[#ECF1F080] flex gap-4 items-center",
                    hash === link.href || (link.title === "home" && !hash)
                      ? "nav-active"
                      : "",
                  ].join(" ")}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link?.icon}</span>
                  <span>{link.title}</span>
                </HashLink>
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
      )}
    </header>
  );
}

export default Header;
