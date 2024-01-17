import React from 'react'
import { StyledNavLink, MainContainer, CloseIcon, NavContainer, LogoutIcon } from './ModalWindowMobileMenu.module.styled'
const ModalWindowMobileMenu = () => {
  return (
    <MainContainer>
      <CloseIcon/>
      <NavContainer>
        <StyledNavLink>Home</StyledNavLink>
        <StyledNavLink>Catalog</StyledNavLink>
        <StyledNavLink>Login</StyledNavLink>
        <StyledNavLink>Register</StyledNavLink>
        <StyledNavLink>Favorites</StyledNavLink>
      </NavContainer>
      <LogoutIcon/>
    </MainContainer>
  )
}

export default ModalWindowMobileMenu
