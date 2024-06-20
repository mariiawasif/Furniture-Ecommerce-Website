import React, { useState } from "react";
import "./Nav.css";
import logo from '../Navbar/logo.png';

function Nav() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <ul className={active}>
        <li>
        <a href="#" className="nav__brand">
         <img src={logo} alt="Brand Logo" className="logo"  />
        </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Pages
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Products
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Blog
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
        <li>
            <div className="search-bar">
              <input type="text"  className="search-input" />
              <button type="submit" className="search-button">
                <i className="fas fa-search"></i> 
              </button>
            </div>
            </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Nav;