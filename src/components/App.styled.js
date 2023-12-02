import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { IoCarSport } from 'react-icons/io5';

export const MainHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1264px;
  margin: 0 auto;
  padding: 20px 40px;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    color: #0029ff;
  }
`;

export const LogoIcon = styled(IoCarSport)`
  width: 35px;
  height: 35px;
`;

export const Logo = styled.h1`
  font-size: 25px;
  font-weight: 500;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  padding: 3px 5px;
  display: inline-block;
  text-decoration: none;
  color: #313131;
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #3470ff;
  }

  &.active {
    border: 2px solid #0b44cd;
    color: #0b44cd;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  align-items: center;
`;
