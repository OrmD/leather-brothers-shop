import { Image } from "../Router";
import headerData from "../../data/header.json";
import { useEffect, useState } from "react";
import { HeaderItem } from "./HeaderItem";

function HeaderComponent() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [open, setOpen] = useState();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 769);
  const toggleState = () => {
    setSearchOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className={`header__container ${open ? "open" : ""}`}>
        <Image.LogoText className={"header__logo-text"} />
        <nav className="header__body ">
          <ul className="header__list">
            {headerData.map((el, index) => {
              return <HeaderItem key={index} link={el.link} text={el.name} />;
            })}
          </ul>
        </nav>
        {isSmallScreen && (
          <button type="button" onClick={() => setOpen(!open)}>
            <Image.HamburgerMenu className={"header__menu-icon"} />
          </button>
        )}
        <Image.SearchIcon className={"header__search-icon"} onToggle={toggleState} />
      </div>
      <div className={`header__input ${searchOpen ? "open" : ""}`}>
        <input type="text" name="search" />
      </div>
    </header>
  );
}

export default HeaderComponent;
