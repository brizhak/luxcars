import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader';
import {
  NavContainer,
  StyledNavLink,
  MainHeaderContainer,
  LogoContainer,
  LogoIcon,
  Logo,
} from './App.styled';

const Home = lazy(() => import('../pages/HomePage'));
const Catalog = lazy(() => import('../pages/CatalogPage'));
const Favorites = lazy(() => import('../pages/FavoritesPage'));

export const App = () => {
  return (
    <>
      <header>
        <MainHeaderContainer>
          <LogoContainer to="/">
            <LogoIcon />
            <Logo>LUX CARS</Logo>
          </LogoContainer>
          <NavContainer>
            <StyledNavLink to={'/'}>Home</StyledNavLink>
            <StyledNavLink to={'/catalog'}>Catalog</StyledNavLink>
            <StyledNavLink to={'/favorites'}>Favorites</StyledNavLink>
          </NavContainer>
        </MainHeaderContainer>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            {/* <Route path="*" element={<NotFoundPage />}></Route> */}
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
