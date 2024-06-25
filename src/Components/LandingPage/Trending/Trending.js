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
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }

  body {
    font-size: 1.6rem;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }
`;

const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
  justify-content: center;
`;

const TrendingHeading = styled.h1`
  text-align: center;
  margin-left: -1%;
  font-family: "Bergen Sans Semi Bold", sans-serif;
  font-weight: bold;
  color: #22155b;
  font-size: 4rem;
`;

const ParentGrid1 = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const TrendingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on medium screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Single column on small screens */
  }
`;

const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px; /* Adjust this value to reduce the gap */
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 75px;
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -20%;
  margin-right: 12%;

  @media screen and (max-width: 768px) {
    margin-top: 0;
    margin-right: 0;
    height: auto;
    flex-direction: column;
  }
`;

const TContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const ProductList = styled.div`
display: flex;
    flex-direction: column;
    margin-right: -25%;
    width: 200px;
    gap: 10px;
    margin-bottom: 20px;
    margin-left: 1%;

    @media screen and (max-width: 768px) {
      flex-direction: row;
      margin-right: 0;
      width: 100%;
      margin-left: 0;
      justify-content: center;
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
        <AppContainer>
          <TContainer>
          <HorizontalGrid heading="Special Offer" image={image} />
          <HorizontalGrid heading="Best Deals" image={image2} />
          </TContainer>
        </AppContainer>

        <ProductList>
          <Products image={image}/>
          <Products image={image}/>
          <Products image={image}/>
        </ProductList>


      </TrendingContainer>
    </>
  );
}

export default Trending;
