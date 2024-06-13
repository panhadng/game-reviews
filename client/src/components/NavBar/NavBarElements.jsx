import styled from "styled-components";
import { NavLink as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ scrolled }) => (scrolled ? "black" : "transparent")};
  transition: background 0.3s ease-in-out;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: red;
  font-family: "Orbitron", sans-serif;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: ${({ isActive }) => (isActive ? "red" : "white")};
  border-bottom: ${({ isActive }) => (isActive ? "3px solid red" : "none")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: darkred;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: darkred;
  }
`;

export const ProfileButton = styled.button`
  border-radius: 50px;
  background: darkred;
  color: white;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: red;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
    padding: 15px 33px;
    &:hover {
      background: darkred;
      color: white;
    }
  }
`;

export const ProfileDropdown = styled.div`
  position: absolute;
  top: 50px;
  width: 150px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 480px) {
    margin-left: -10px;
    margin-top: 10px;
  }
`;

export const ProfileDropdownButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 12px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  &:hover {
    background-color: #f0f0f0;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
