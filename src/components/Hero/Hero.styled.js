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
  height: calc(100vh - 45px);
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 20px;
  padding: 0px 10px;
  padding-bottom: 100px;
  @media screen and (min-width: 428px) {
    gap: 30px;
  }
  @media screen and (min-width: 768px) {
    background-position: 100% 50%;
    height: calc(100vh - 50px);
  }
  @media screen and (min-width: 1158px) {
    padding-bottom: 100px;
    height: calc(100vh - 65px);
    gap: 40px;
  }
`;

export const HeroText = styled.p`
  font-size: 20px;
  width: 100%;
  text-align: center;
  color: #fff;
  @media screen and (min-width: 428px) {
    font-size: 25px;
  }
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1158px) {
    font-size: 35px;
    
  }
`;

export const HeroButton = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  background-color: var(--accent-color);
  color: white;
  padding: 3px 10px;
  transition: all 0.3s;
  &:hover {
    background-color: var(--darker-accent-color);
  }
  @media screen and (min-width: 428px) {
    font-size: 25px;
  }
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1158px) {
    font-size: 35px;
    
  }
`;
