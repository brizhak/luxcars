import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { IoCarSport } from 'react-icons/io5';
import { FiMenu, FiLogOut} from "react-icons/fi";

export const MainHeaderContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 428px) {
    padding-top: 25px;
    padding-bottom: 25px;
  }
  @media screen and (min-width: 1158px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

export const LogoIcon = styled(IoCarSport)`
  width: 25px;
  height: 25px;
  color: var(--main-text-color);
  transition: all 0.3s;
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }

  @media screen and (min-width: 1158px) {
    width: 35px;
    height: 35px;
  }

  
`;

export const Logo = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }

  @media screen and (min-width: 1158px) {
    font-size: 30px;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: var(--accent-color);

    ${LogoIcon} {
      color: var(--accent-color);
    }
  }
`

export const BurgerMenu = styled(FiMenu)`
  width: 25px;
  height: 25px;
  color: var(--main-text-color);
  display: none;
  cursor: pointer;
  transition: all 0.3s;
  @media screen and (max-width: 767px) { 
    display: block;
  }
  &:hover {
    color: var(--accent-color);
  }
  &:focus {
    color: var(--accent-color);
  }
`

export const StyledNavLink = styled(NavLink)`
  font-size: 15px;
  padding: 3px 5px;
  font-weight: 500;
  display: inline-block;
  text-decoration: none;
  color: var(--main-text-color);
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  &:hover {
    color: var(--accent-color);
  }

  &.active {
    border-color: var(--accent-color);
    color: var(--accent-color);
  }
`;


export const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0px;
  color: inherit;

`
export const LogoutIcon = styled(FiLogOut)`
  color: var(--main-text-color);
  width: 20px;
  height: 20px;
  transition: all 0.3s;
  &:hover {
    color: var(--accent-color);
  }

  /* @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
  @media screen and (min-width: 1158px) {
    width: 30px;
    height: 30px;
  } */

`