import React from 'react';
import FilterField from '../../components/FilterField';
import SectionTemplate from 'components/SectionTemplate';
import CarsList from 'components/CarsList';

const CatalogPage = () => {
  return (
    <SectionTemplate>
      <FilterField />
      <CarsList />
    </SectionTemplate>
  );
};

export default CatalogPage;
