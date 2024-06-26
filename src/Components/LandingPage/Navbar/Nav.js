import React, { useState } from "react";
import styled from "styled-components";
import logo from '../../assets/Navbar/logo.png';

// Styled Components
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  background: rgb(255, 255, 255);
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;
  list-style: none;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 8vh;
    right: 0;
    gap: 1rem;
    height: 92vh;
    width: 30vw;
    background: rgb(255, 255, 255);
    flex-direction: column;
    transform: ${({ active }) => (active ? 'translateX(0%)' : 'translateX(100%)')};
    transition: 0.5s ease-in;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: rgb(1, 1, 1);
  transition: color 0.3s ease;

  &:hover {
    color: #FB2E86;
  }
`;

const NavBrand = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: auto;
  height: 6vh; // Make sure the logo stays within the navbar height

  @media screen and (max-width: 768px) {
    height: 5vh;
  }

  @media screen and (max-width: 425px) {
    height: 4.5vh;
  }

  @media screen and (max-width: 320px) {
    height: 4vh;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    margin-right: 14%;
    width: 10%;
  }
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  margin-left: 20%;
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 0;
  height: 8px;
  margin-top: -7%;

  i {
    background-color: #FB2E86;
    color: #ffffff;
    width: 40px;
    padding: 0.6rem;
    border-radius: 0.25rem;
  }

  @media (max-width: 1024px) {
    margin-top: -80%;
  }
`;

const NavToggler = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }

  @media screen and (max-width: 425px) {
    cursor: pointer;
  }

  &.toggle .line1 {
    transform: rotate(-45deg) translate(-4px, 5px);
  }

  &.toggle .line2 {
    opacity: 0;
  }

  &.toggle .line3 {
    transform: rotate(45deg) translate(-4px, -5px);
  }
`;

const Line = styled.div`
  width: 2.5rem;
  height: 0.2rem;
  margin: 0.4rem;
  background: rgb(204, 204, 204);
  transition: 0.3s ease-in;
`;

const Nav = () => {
  const [active, setActive] = useState(false);
  const [icon, setIcon] = useState(false);

  const navToggle = () => {
    setActive(!active);
    setIcon(!icon);
  };

  return (
    <NavContainer>
      <NavBrand href="#">
        <Logo src={logo} alt="Brand Logo" />
      </NavBrand>
      <NavMenu active={active}>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Pages</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contact</NavLink>
        </NavItem>
        <NavItem>
          <SearchBar>
            <SearchInput type="text" />
            <SearchButton type="submit">
              <i className="fas fa-search"></i>
            </SearchButton>
          </SearchBar>
        </NavItem>
      </NavMenu>
      <NavToggler onClick={navToggle} className={icon ? 'toggle' : ''}>
        <Line className="line1"></Line>
        <Line className="line2"></Line>
        <Line className="line3"></Line>
      </NavToggler>
    </NavContainer>
  );
};

export default Nav;
