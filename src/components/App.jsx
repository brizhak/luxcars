import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader';
import ModalWindowMobileMenu from './ModalWindowMobileMenu';
import {
  NavContainer,
  StyledNavLink,
  MainHeaderContainer,
  SecondHeaderContainer,
  LogoContainer,
  LogoIcon,
  Logo,
  BurgerMenu,
  LogoutIcon,
  LogoutButton
} from './App.styled';

const Home = lazy(() => import('../pages/HomePage'));
const Catalog = lazy(() => import('../pages/CatalogPage'));
const Favorites = lazy(() => import('../pages/FavoritesPage'));
const Login = lazy(()=> import('../pages/LoginPage'))
const Register = lazy(()=> import('../pages/RegisterPage'))

export const App = () => {
  return (
    <>
    <ModalWindowMobileMenu/>
      <header>
        <MainHeaderContainer>
          <SecondHeaderContainer>
            <LogoContainer to="/">
              <LogoIcon />
              <Logo>LUX CARS</Logo>
            </LogoContainer>
            <NavContainer>
              <StyledNavLink to={'/'}>Home</StyledNavLink>
              <StyledNavLink to={'/catalog'}>Catalog</StyledNavLink>
              <StyledNavLink to={'/login'}>Login</StyledNavLink>
              <StyledNavLink to={'/register'}>Register</StyledNavLink>
              <StyledNavLink to={'/favorites'}>Favorites</StyledNavLink>
                <LogoutButton><LogoutIcon/></LogoutButton>
            </NavContainer>
            <BurgerMenu/>
          </SecondHeaderContainer>
        </MainHeaderContainer>
        
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            {/* <Route path="*" element={<NotFoundPage />}></Route> */}
          </Routes>
        </Suspense>
      </main>
      
    </>
  );
};
