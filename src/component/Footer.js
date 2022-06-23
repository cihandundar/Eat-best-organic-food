import React from "react";
import logo from "../images/logo.png";
import Facebook from "../icons/Facebook.js";
import İnstagram from "../icons/İnstagram.js";
import Twitter from "../icons/Twitter.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper__container">
          <div className="footer__wrapper__logo">
            <img src={logo} alt="" />
          </div>
          <ul className="footer__wrapper__list">
            <li className="footer__wrapper__list__link">Home</li>
            <li className="footer__wrapper__list__link">About</li>
            <li className="footer__wrapper__list__link">Contact</li>
            <li className="footer__wrapper__list__link">Works</li>
          </ul>
          <div className="footer__wrapper__socialmedia">
            <div>
              <Facebook />
            </div>
            <div>
              <İnstagram />
            </div>
            <div>
              <Twitter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
