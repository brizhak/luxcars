import React from 'react';
import { fetchBrands } from 'services/api';
import { useEffect, useState } from 'react';
import {
  MainContainer,
  SelectContainer,
  Label,
  BrandSelect,
  PriceSelect,
  InputsContainer,
  InputFrom,
  InputTo,
  MileageContainer,
  FiltersButton,
} from './SelectProperties.styled';

const SelectProperties = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const numberOptions = Array.from(
    { length: 30 },
    (_, index) => (index + 1) * 10
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBrands();
        setBrands(data);
      } catch (e) {
        alert(`Something went wrong. Error: ${e.message}`);
      }
    };
    fetchData();
  }, []);

  return (
    <MainContainer>
      <SelectContainer>
        <Label htmlFor="brandSelect">Car brand</Label>
        <BrandSelect
          name="brands"
          id="brandSelect"
          value={selectedBrand}
          onChange={e => setSelectedBrand(e.target.value)}
        >
          <option value="" disabled hidden>
            Enter the text
          </option>
          {brands.map(brand => (
            <option key={brand.id} value={brand.id}>
              {brand.brand}
            </option>
          ))}
        </BrandSelect>
      </SelectContainer>
      <SelectContainer>
        <Label htmlFor="priceSelect">Price/ 1 hour</Label>
        <PriceSelect
          name="prices"
          id="priceSelect"
          value={selectedPrice}
          onChange={e => setSelectedPrice(e.target.value)}
        >
          <option value="" disabled hidden>
            To $
          </option>
          {numberOptions.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </PriceSelect>
      </SelectContainer>
      <MileageContainer>
        <Label htmlFor="mileage">Сar mileage / km</Label>
        <InputsContainer>
          <InputFrom type="number" id="mileage" placeholder="From" min="0" />
          <InputTo type="number" id="mileage" placeholder="To" min="0" />
        </InputsContainer>
      </MileageContainer>
      <FiltersButton type="submit">Search</FiltersButton>
    </MainContainer>
  );
};

export default SelectProperties;
