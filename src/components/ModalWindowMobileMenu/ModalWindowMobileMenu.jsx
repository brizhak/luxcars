import React from 'react'
// import { useState } from 'react'
import { StyledNavLink, MainContainer, CloseIcon, NavContainer, LogoutIcon } from './ModalWindowMobileMenu.module.styled'

const ModalWindowMobileMenu = ({closeModal, isOpenModal}) => {

  return (
    <MainContainer style={{ display: isOpenModal ? 'flex' : 'none' }}>
      <CloseIcon onClick={closeModal} />
      <NavContainer>
        <StyledNavLink to={'/'} onClick={closeModal}>Home</StyledNavLink>
        <StyledNavLink to={'/catalog'} onClick={closeModal}>Catalog</StyledNavLink>
        <StyledNavLink to={'/login'} onClick={closeModal}>Login</StyledNavLink>
        <StyledNavLink to={'/register'} onClick={closeModal}>Register</StyledNavLink>
        <StyledNavLink to={'/favorites'} onClick={closeModal}>Favorites</StyledNavLink>
      </NavContainer>
      <LogoutIcon />
    </MainContainer>
  );
};

export default ModalWindowMobileMenu
