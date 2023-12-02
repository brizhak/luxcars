import React from 'react';
import { MainWrapper } from './SectionTemplate.styled';

const SectionTemplate = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default SectionTemplate;
