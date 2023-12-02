import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 18px;
  width: 860px;
  margin: 50px auto;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const BrandSelect = styled.select`
  width: 224px;
`;

export const PriceSelect = styled.select`
  width: 125px;
`;

export const InputsContainer = styled.div`
  display: flex;
`;

export const InputFrom = styled.input`
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  &::placeholder {
    font-size: 18px;
    color: #313131;
  }
`;

export const InputTo = styled.input`
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
`;

export const MileageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FiltersButton = styled.button`
  width: 136px;
  height: 48px;
  background-color: #3470ff;
  border-radius: 14px;
  border-color: transparent;
  color: white;
  transition: all 0.3s;
  &.hover {
    background-color: #0b44cd;
  }
`;
