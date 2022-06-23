import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <div className="header__nav__logo">
            <img src={logo} alt="" />
          </div>
          <ul className="header__nav__item">
            <li className="header__nav__link">Home</li>
            <li className="header__nav__link">About</li>
            <li className="header__nav__link">Contact</li>
            <li className="header__nav__link">Works</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
