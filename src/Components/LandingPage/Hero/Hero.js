import React from 'react';
import HeroSection from './HeroSection';
import sofaImage from '../../assets/Hero/sofa (2).png';

function Hero() {
  return (
    <HeroSection
      subheading="Best Furniture for your castle"
      heading="New Furniture Collection <br /> Trends in 2020"
      paragraph="Elevate your space with our handcrafted, timeless furniture designs."
      buttonText="Shop Now"
      image={sofaImage}
    />
  );
}

export default Hero;
