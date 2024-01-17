import React from 'react';

import { HeroWrapper, HeroText, HeroButton } from './Hero.styled';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroText>
      Rent your dream car with our service. <br/> Start your journey with us!
      </HeroText>
      <HeroButton to="/catalog">View the catalog</HeroButton>
    </HeroWrapper>
  );
};

export default Hero;
