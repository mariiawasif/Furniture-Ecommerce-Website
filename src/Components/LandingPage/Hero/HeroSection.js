import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import sofa from '../../assets/Hero/sofa (2).png';

// Global Styles
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bergen Sans Semi Bold';
    src: url('C://Users//MariaWasif//Downloads//BergenSans-SemiBold.woff2') format('woff2'),
         url('C://Users//MariaWasif//Downloads//BergenSans-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }
`;

// Component-specific styles
const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 6rem 2rem;
  background-color: #f3f3f9;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const HeroLeft = styled.div`
  margin-top: 15%;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 10%;
  }

  @media (max-width: 480px) {
    margin-top: 5%;
  }
`;

const HeroRight = styled.div`
  img {
    width: 70%;
    margin-top: -15%;
    height: auto;
    margin-left: 15%;

    @media (max-width: 768px) {
      width: 80%;
      margin-top: -10%;
      margin-left: 10%;
    }

    @media (max-width: 480px) {
      width: 90%;
      margin-top: -5%;
      margin-left: 5%;
    }
  }
`;

const HeroHeading = styled.h1`
  font-family: 'Bergen Sans Semi Bold', sans-serif;
  font-size: 50px;
  text-align: left;
  margin-left: 15%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 40px;
    text-align: center;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    text-align: center;
    margin-left: 0;
  }
`;

const HeroSubheading = styled.h3`
  text-transform: uppercase;
  color: #FB2E86;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const HeroParagraph = styled.p`
  color: #7E33E0;
  font-weight: bold;
  text-align: center;
  margin-left: 5%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    margin-left: 0;
    font-size: 1.2rem;
  }
`;

const ShopButton = styled.button`
  background-color: #FB2E86;
  color: #ffffff;
  width: 150px;
  height: 40px;
  padding: 0.6rem;
  border-radius: 5rem;
  border: none;

  @media (max-width: 768px) {
    width: 130px;
    height: 35px;
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    width: 110px;
    height: 30px;
    font-size: 1.2rem;
  }
`;

const HeroSection = ({ subheading, heading, paragraph, buttonText, image }) => {
  return (
    <>
      <GlobalStyle />
      <HeroContainer>
        <HeroLeft>
          <HeroSubheading>{subheading}</HeroSubheading>
          <HeroHeading>
            {heading.split("<br />").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </HeroHeading>
          <HeroParagraph>{paragraph}</HeroParagraph>
          <ShopButton>{buttonText}</ShopButton>
        </HeroLeft>
        <HeroRight>
          <img src={image} alt="Hero Image" />
        </HeroRight>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
