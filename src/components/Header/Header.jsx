import { Image } from "../Router";
import { useState } from "react";

function HeaderComponent() {
  const [open, setOpen] = useState();

  return (
    <header className="header">
      <div className={`header__container ${open ? "open" : ""}`}>
        <Image.LogoText className={"header__logo-text"} />
        <nav className="header__body ">
          <ul className="header__list">
            <li className="header__item">Home</li>
            <li className="header__item">About Us</li>
            <li className="header__item">Products</li>
            <li className="header__item">Label & SDS</li>
            <li className="header__item">News</li>
            <li className="header__item">Contact Us</li>
          </ul>
        </nav>
        <button type="button" onClick={() => setOpen(!open)}>
          <Image.HamburgerMenu className={"header__menu-icon"} />
        </button>

        <Image.SearchIcon className={"header__search-icon"} />
      </div>
    </header>
  );
}

export default HeaderComponent;
