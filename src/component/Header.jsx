import { NavLink } from "react-router-dom";
import { BrandLogo, CloseIcon, MenuIcon, WhitePaperIcon } from "../SvgIcons";
import { useState } from "react";

const navLinks = [
  { title: "home", href: "/" },
  { title: "how it works", href: "/" },
  { title: "trade", href: "#trade" },
  { title: "buy", href: "#buy" },
  { title: "community", href: "#community" },
  { title: "whitepaper", href: "#whitepaper", icon: <WhitePaperIcon /> },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen((prev) => !prev);
  return (
    <header className="w-screen">
      <div
        className={[
          "border-b border-[#ffffff3f]",
          isOpen && "fixed lg-relative top-0 w-full left-0 right-0 z-[1000]",
        ].join(" ")}
      >
        <div className={"container h-[64px] lg:h-[103px] bg-[#050505]"}>
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
                  <li
                    key={link.title}
                    className="p-4 capitalize items-center "
                  >
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        isActive
                          ? "font-bold text-[#ffffff] flex gap-4 items-center"
                          : "font-light text-[#ECF1F080] flex gap-4 items-center"
                      }
                    >
                      <span>{link?.icon}</span>
                      <span>{link.title}</span>
                    </NavLink>
                  </li>
                ))}
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
              <li
                className="p-4 capitalize inline-flex items-center"
                key={link.href}
              >
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-[#ffffff] flex gap-4 items-center"
                      : "font-light text-[#ECF1F080] flex gap-4 items-center"
                  }
                >
                  <span>{link?.icon}</span>
                  <span>{link.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
