import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Categories from './CategoriesP';
import productImage from '../../assets/Categories/chair1.png';
import productImage1 from '../../assets/Categories/chair.png';
import productImage2 from '../../assets/Categories/pic.png';

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
    font-family: 'Bergen Sans Semi Bold', sans-serif;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  padding: 20px;
  gap: 20px; 
  flex-wrap: wrap; 
  text-align: center; 

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 1440px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 50%; 
  }
`;

const CHeading = styled.h1`
  color: #22155B;
  font-size: 40px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 25px; 
  }
`;

const products = [
  {
    image: productImage,
    name: "Comfort Handy Craft",
    price: "$42.00",
    oldPrice: "$65.00"
  },
  {
    image: productImage1,
    name: "Comfort Handy Craft",
    price: "$42.00",
    oldPrice: "$65.00"
  },
  {
    image: productImage2,
    name: "Comfort Handy Craft",
    price: "$42.00",
    oldPrice: "$65.00"
  },
  {
    image: productImage,
    name: "Comfort Handy Craft",
    price: "$42.00",
    oldPrice: "$65.00"
  }
];

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <AppContainer> */}
        <CHeading>Top Categories</CHeading>
        <Categories products={products} />
      {/* </AppContainer> */}
    </>
  );
}

export default App;
