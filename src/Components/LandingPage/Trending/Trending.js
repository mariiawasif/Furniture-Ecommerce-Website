import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import FeaturedCard from "../Featured/FeaturedCard";
import HorizontalGrid from './HorizontalGrid';
import Products from './Products';
import chair from '../../assets/Trending/chair1.png';
import chair2 from '../../assets/Trending/chair2.png';
import chair3 from '../../assets/Trending/chair5.png';
import chair4 from '../../assets/Trending/chair4.png';
import image from '../../assets/Trending/chair6.png';
import image2 from '../../assets/Trending/chair7.png';

// Global Styles
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Bergen Sans Semi Bold";
    src: url("C://Users//MariaWasif//Downloads//BergenSans-SemiBold.woff2") format("woff2"),
         url("C://Users//MariaWasif//Downloads//BergenSans-SemiBold.woff") format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden; 
  }

  body {
    font-size: 1.6rem;
    overflow-x: hidden; 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Bergen Sans Semi Bold', sans-serif;
  }
`;

const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  margin-bottom: 10%;
`;

const TrendingHeading = styled.h1`
  text-align: center;
  margin-left: -1%;
  font-family: "Bergen Sans Semi Bold", sans-serif;
  font-weight: bold;
  color: #22155b;
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const ParentGrid1 = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  width: 100%; /* Ensure full width */
`;

const TrendingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; 
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 60%;
  margin-top: 2rem;
  gap: 10px;
  @media (max-width: 649px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 425px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 320px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 2560px) {
    width: 50%;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 20%;
  }

  @media (max-width: 1440px) {
    
  }
`;

const TContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
  flex: 3;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 649px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 20px; 
  }

  @media (max-width: 425px) {
    width: 100%;
    padding: 90px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 375px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 320px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 10px;
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    margin-left: 0;
    justify-content: center;
  }

  @media (max-width: 649px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 425px) {
    flex-direction: row;
    
  }

  @media (max-width: 375px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 320px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const HorizontalContainer = styled.div`
   display: flex;

   @media (max-width: 1024px) {
    width: 60%;
    justify-content: center;
    gap: 2px;
   
  }
  @media (max-width: 768px) {
    width: 70%;
    height: 30%;
    justify-content: center;
    gap: 2px;
   
  }
  @media (max-width: 425px) {
     flex-direction: column;
     gap: 30px;
     width: 100%;
   
  }
`;

function Trending() {
  return (
    <>
      <GlobalStyle />
      <TrendingContainer>
        <TrendingHeading>Trending Products</TrendingHeading>
        <ParentGrid1>
          <TrendingGrid>
            <FeaturedCard
              image={chair}
              title="Comfort Handy Craft"
              code="12345"
              price="42.00"
            />
            <FeaturedCard
              image={chair2}
              title="Comfort Handy Craft"
              code="12346"
              price="42.00"
            />
            <FeaturedCard
              image={chair3}
              title="Comfort Handy Craft"
              code="12347"
              price="42.00"
            />
            <FeaturedCard
              image={chair4}
              title="Comfort Handy Craft"
              code="12348"
              price="42.00"
            />
          </TrendingGrid>
        </ParentGrid1>

        {/* Horizontal Grids */}
        {/* <AppContainer> */}
          {/* <TContainer> */}
            {/* <HorizontalGrid heading="Special Offer" image={image} />
            <HorizontalGrid heading="Best Deals" image={image2} /> */}
          {/* </TContainer> */}

          {/* <ProductList>
            <Products image={image} />
            <Products image={image} />
          </ProductList> */}

          <HorizontalContainer>
            <HorizontalGrid heading="Special Offer" image={image} />
            <HorizontalGrid heading="Special Offer" image={image2} />
            <ProductList>
              <Products image={image} />
              <Products image={image} />
            </ProductList>  
              
          </HorizontalContainer>


        {/* </AppContainer> */}
      </TrendingContainer>
    </>
  );
}

export default Trending;