import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroWrapper = styled.div`
  background-image: url('../../assets/bg-picture.png');
  background-size: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroText = styled.p`
  font-size: 25px;
  font-weight: 400;
  padding-top: 200px;
  width: 700px;
  text-align: center;
`;

export const HeroButton = styled(Link)`
  font-size: 25px;
  text-decoration: none;
  margin-top: 10px;
  background-color: #0029ff;
  border-radius: 12px;
  color: white;
  padding: 3px 10px;
  transition: all 0.3s;
  &:hover {
    background-color: #001db5;
  }
`;
