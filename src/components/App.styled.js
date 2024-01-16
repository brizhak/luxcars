import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { IoCarSport } from 'react-icons/io5';
import { FiMenu, FiLogOut} from "react-icons/fi";

export const MainHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SecondHeaderContainer = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  width: 320px;

  @media screen and (min-width: 428px) {
    width: 100%;
    padding: 20px 25px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1158px) {
    padding: 30px 35px;
    width: 1158px;
  }
`

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: var(--accent-color);
  }
`;

export const LogoIcon = styled(IoCarSport)`
  width: 25px;
  height: 25px;

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

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }

  @media screen and (min-width: 1158px) {
    font-size: 30px;
  }
`;

export const BurgerMenu = styled(FiMenu)`
  width: 25px;
  height: 25px;
  color: #313131;
  display: none;

  @media screen and (max-width: 767px) { 
    display: block;
  }
`

export const StyledNavLink = styled(NavLink)`
  font-size: 15px;
  padding: 3px 5px;
  display: inline-block;
  text-decoration: none;
  color: #313131;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  &:hover {
    color: var(--accent-color);
  }

  &.active {
    border: 1px solid var(--accent-color);
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
  /* @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
  @media screen and (min-width: 1158px) {
    width: 30px;
    height: 30px;
  } */

`