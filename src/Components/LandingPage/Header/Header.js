import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart  } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

function Header() {
  const [active, setActive] = useState("header_menu");
  const [icon, setIcon] = useState("header__toggler");
  const headerToggle = () => {
    if (active === "header_menu") {
      setActive("header_menu header_active");
    } else setActive("header_menu");

    if (icon === "header__toggler") {
      setIcon("header__toggler toggle");
    } else setIcon("header__toggler");
  };
  return (
    <nav className="header">
      <a href="#" className="header_brand">
        mhhasanul@gmail.com
      </a>
      <a href="#" className="header_brand-2">
        (123456) 7890
      </a>
      <ul className={active}>
        <li className="header__item">
          <a href="#" className="header__link">
            English
          </a>
        </li>
        <li className="header__item">
          <a href="#" className="header__link">
            USD
          </a>
        </li>
        <li className="header__item">
          <a href="#" className="header__link">
            Login
          </a>
        </li>
        <li className="header__item">
          <a href="#" className="header__link">
            Wishlist 
          
          </a>
        </li>
        <li className="header__item">
          <a href="#" className="header__link">
          <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </li>
      </ul>
      <div onClick={headerToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;