import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  background: #7e33e0;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Brand = styled.a`
  text-transform: lowercase;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-weight: 0;

   @media screen and (max-width: 768px) {
    margin-top: 2%;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.active ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 8vh;
    right: 0;
    width: 40%;
    gap: 1rem;
    height: calc(100vh - 8vh);
    background: #7e33e0;
    padding: 2rem 0;
    transform: translateY(${(props) => (props.active ? "0" : "-100%")});
    transition: transform 0.3s ease-in-out;
  }
`;

const MenuItem = styled.li`
  list-style: none;
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: rgb(255, 255, 255);
`;

const Toggler = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 2rem;
    height: 2rem;
    flex-direction: column;
    cursor: pointer;
    z-index: 10;
    margin-top: 2%;

    div {
      width: 100%;
      height: 0.2rem;
      background: #fff;
      transition: transform 0.3s ease-in-out;

      &.line1.toggle {
        transform: rotate(-45deg) translate(-3px, 2px);
      }

      &.line3.toggle {
        transform: rotate(45deg) translate(-3px, -2px);
      }
    }
  }
`;

const Header = () => {
  const [active, setActive] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const headerToggle = () => {
    setActive(!active);
    setToggleIcon(!toggleIcon);
  };

  return (
    <HeaderContainer>
      <Brand href="#">mhhasanul@gmail.com</Brand>
      <Menu active={active}>
        <MenuItem>
          <MenuLink href="#">English</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">USD</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Login</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Wishlist</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">
            <FontAwesomeIcon icon={faShoppingCart} />
          </MenuLink>
        </MenuItem>
      </Menu>
      <Toggler onClick={headerToggle}>
        <div className={toggleIcon ? "line1 toggle" : "line1"}></div>
        <div className={toggleIcon ? "line2 toggle" : "line2"}></div>
        <div className={toggleIcon ? "line3 toggle" : "line3"}></div>
      </Toggler>
    </HeaderContainer>
  );
};

export default Header;
