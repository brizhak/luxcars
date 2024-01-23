import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/bg-min.jpg'

export const HeroWrapper = styled.div`
  background-color: #111;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  width: 100%;
  height: calc(95vh - 65px);
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 20px;
  padding: 10px 10px 100px 10px;
  @media screen and (min-width: 428px) {
    gap: 30px;
    padding: 25px 25px 100px 25px;
    height: calc(95vh - 75px);
  }
  @media screen and (min-width: 768px) {
    height: calc(100vh - 80px);
  }
  @media screen and (min-width: 1158px) {
    padding: 35px 35px 100px 35px;
    height: calc(100vh - 75px);
    gap: 40px;
  }
`;


export const HeroText = styled.h1`
  font-size: 20px;
  font-weight: 300;
  width: 100%;
  text-align: center;
  color: #fff;
  /* @media screen and (min-width: 428px) {
    font-size: 25px;
  } */
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;

export const HeroButton = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--second-text-color);
  width: 200px;
  height: 50px;
  border-color: transparent;
  border-radius: 40px;
  background-color: var(--accent-color);
  transition: all 0.3s;
  &:hover {
    background-color: var(--darker-accent-color);
  }
  @media screen and (min-width: 1158px){
    height: 64px;
    font-size: 18px;
  }
`;
