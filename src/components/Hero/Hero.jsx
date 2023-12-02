import React from 'react';

import { HeroWrapper, HeroText, HeroButton } from './Hero.styled';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroText>
        We offer a wide range of cars for rent. Choose the perfect vehicle for
        your trip and start your unique driving experience right now!
      </HeroText>
      <HeroButton to="/catalog">See the catalog</HeroButton>
    </HeroWrapper>
  );
};

export default Hero;
