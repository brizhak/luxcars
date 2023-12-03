import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

export const ModalContainer = styled.div`
  background-color: white;
  width: 541px;
  padding: 0 40px 40px 40px;
  height: auto;
  z-index: 1001;
  border-radius: 24px;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 1000; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const XIcon = styled(IoMdClose)`
width: 24px;
height: 24px;
margin-top: 16px;
margin-left: 461px;
`;

export const CarImg = styled.img`
   width: 100%;
  height: 100%;
  max-width: 461px;
  max-height: 248px;
  object-fit: cover;
  border-radius: 14px;
`
export const DescriptionText = styled.div`
  font-size: 16px;
  color: #313131;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 14px;
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