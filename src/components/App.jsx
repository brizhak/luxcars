import { lazy, Suspense } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader';
import ModalWindowMobileMenu from './ModalWindowMobileMenu';
import SectionTemplate from './SectionTemplate';
import {
  NavContainer,
  StyledNavLink,
  MainHeaderContainer,
  LogoContainer,
  LogoIcon,
  Logo,
  BurgerMenu,
  LogoutIcon,
  LogoutButton,
} from './App.styled';

const Home = lazy(() => import('../pages/HomePage'));
const Catalog = lazy(() => import('../pages/CatalogPage'));
const Favorites = lazy(() => import('../pages/FavoritesPage'));
const Login = lazy(() => import('../pages/LoginPage'));
const Register = lazy(() => import('../pages/RegisterPage'));

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModal = () => {
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }

  return (
    <>
      <header>
        <SectionTemplate>
          <MainHeaderContainer>
            <LogoContainer to="/">
              <LogoIcon />
              <Logo>LUX CARS</Logo>
            </LogoContainer>
            <NavContainer>
              <StyledNavLink to={'/'}>Home</StyledNavLink>
              <StyledNavLink to={'/catalog'}>Catalog</StyledNavLink>
              <StyledNavLink to={'/login'}>Sign in</StyledNavLink>
              <StyledNavLink to={'/register'}>Sign up</StyledNavLink>
              <StyledNavLink to={'/favorites'}>Favorites</StyledNavLink>
              <LogoutButton>
                <LogoutIcon />
              </LogoutButton>
            </NavContainer>
            <BurgerMenu onClick={openModal}/>
          </MainHeaderContainer>
        </SectionTemplate>
        <ModalWindowMobileMenu closeModal={closeModal} isOpenModal={isOpenModal}/>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            {/* <Route path="*" element={<NotFoundPage />}></Route> */}
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
