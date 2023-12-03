import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';

export const MainCarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0;
  row-gap: 50px;
  column-gap: 29px;
`;

export const HeartIcon = styled(FaRegHeart)`
  fill: white;
  width: 18px;
  position: absolute;
  top: 10px;
  left: 244px;
`;

export const CarCard = styled.li`
  width: 274px;
  height: 426px;
  /* 
  margin: 0 auto; */
  list-style: none;
`;

export const ImgContainer = styled.div`
  display: flex;
  position: relative;
  width: 274px;
  height: 268px;
`;
export const CarImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 274px;
  max-height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const CarDescription = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0;
  margin-top: 14px;
`;

export const DescriptionText = styled.li`
  font-size: 16px;
  color: #313131;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AccentText = styled.span`
  color: #3470ff;
`;

export const CarDetails = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const ButtonLearnMore = styled.button`
  width: 274px;
  height: 44px;
  background-color: #3470ff;
  color: white;
  font-size: 14px;
  border-radius: 12px;
  border-color: transparent;
  margin-top: 28px;
  transition: all 0.3s;

  &.hover {
    background-color: #0b44cd;
  }
  &.focus {
    background-color: #0b44cd;
  }
`;
export const ButtonLoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonLoadMore = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline;
  margin: 100px auto;
  color: #3470ff;
  font-size: 16px;

  &.hover {
    color: #0b44cd;
  }
  &.focus {
    color: #0b44cd;
  }
`;
