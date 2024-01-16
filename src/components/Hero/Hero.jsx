import React from 'react';

import { HeroWrapper, HeroText, HeroButton } from './Hero.styled';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroText>
      We offer the perfect cars for traveling. <br/> Start your journey with us!
      </HeroText>
      <HeroButton to="/catalog">See the catalog</HeroButton>
    </HeroWrapper>
  );
};

export default Hero;
