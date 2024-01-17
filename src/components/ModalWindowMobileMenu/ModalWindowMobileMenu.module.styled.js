import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { FiX, FiLogOut } from "react-icons/fi";

export const MainContainer = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #fff;
  padding: 20px;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 17px;
  height: 100%;
  padding: 20px;
  @media screen and (min-width: 428px){
    gap: 20px;
  }
`

export const CloseIcon = styled(FiX)`
  width: 30px;
  height: 30px;
  margin: 0 0 0 auto;
  color: var(--main-text-color);
  transition: all 0.3s;
  &:hover {
   color: var(--accent-color)
  }
  &:focus {
    color: var(--accent-color)
  }
  @media screen and (min-width: 428px){
    width: 35px;
    height: 35px;
  }
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  transition: all 0.3s;
  &:hover {
   color: var(--accent-color)
  }
  &:active {
    color: var(--accent-color)
  }
  &:focus {
    color: var(--accent-color)
  }
  @media screen and (min-width: 428px){
    font-size: 40px;
  }
`

export const LogoutIcon = styled(FiLogOut)`
  width: 25px;
  height: 25px;
  margin: 0 0 0 auto;
  color: var(--main-text-color);
  transition: all 0.3s;
  &:hover {
   color: var(--accent-color)
  }
  &:focus {
    color: var(--accent-color)
  }
  @media screen and (min-width: 428px){
    width: 30px;
    height: 30px;
  }
`