import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import FeaturedCard from "../Featured/FeaturedCard";
import Shopex from "./Shopex";
import { addLatestProductsToFirestore, fetchLatestProductsFromFirestore, latestProducts, addShopexDataToFirestore, fetchShopexDataFromFirestore, shopexData } from "../../../firestoreUtils";


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
  }
`;

const LatestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
  justify-content: center;
`;

const LatestHeading = styled.h1`
  text-align: center;
  margin-left: -1%;
  font-family: "Bergen Sans Semi Bold", sans-serif;
  font-weight: bold;
  color: #22155b;
  font-size: 4rem;
`;

const LatestHeadline = styled.div`
  padding: 6px;
  background-color: white;

 
  height: 5vh;

  @media (max-width: 1200px) {
    height: 6vh;
  }

  @media (max-width: 1024px) {
    height: 7vh;
  }

  @media (max-width: 768px) {
    height: 8vh;
  }

  @media (max-width: 480px) {
    width: 70%;
    height: 8vh;
    // white-space: nowrap;
  }
`;


const LatestLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const LatestLink = styled.a`
  font-size: large;
  color: #22155b;
  padding: 2px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #fb2e86;
  }
`;

const ParentGrid = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const LatestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const CardWrapper = styled.div`
  position: relative;
  // width: 100%;
  // background-color: #fff;
  // border-radius: 8px;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  // overflow: hidden;
  // display: flex;
  // flex-direction: column;
  align-items: center;
`;

const SaleBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #3b27c7;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ShopexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: -4%;

  @media (max-width: 1200px) {
    gap: 15px;
    padding: 15px;
  }

   @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 10px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; 
    gap: 5px;
    padding: 5px;
  }
`;

function Latest() {

 
    const [latestProducts1, setLatestProducts] = useState([]);
    const [shopexData1, setShopexData] = useState([]);
  
    useEffect(() => {
      
      const addDataToFirestore = async () => {
        await addLatestProductsToFirestore(latestProducts);
        await addShopexDataToFirestore(shopexData);
      };
  
     
      const fetchDataFromFirestore = async () => {
        const fetchedLatestProducts = await fetchLatestProductsFromFirestore();
        const fetchedShopexData = await fetchShopexDataFromFirestore();
        setLatestProducts(fetchedLatestProducts);
        setShopexData(fetchedShopexData);
      };
  
      addDataToFirestore();
      fetchDataFromFirestore();
    }, []);


  return (
    <>
      <GlobalStyle />
      <LatestContainer>
        <LatestHeading>Latest Products</LatestHeading>
        <LatestHeadline>
          <LatestLinks>
            <LatestLink href="#">New Arrival</LatestLink>
            <LatestLink href="#">Best Seller</LatestLink>
            <LatestLink href="#">Featured</LatestLink>
            <LatestLink href="#">Special Offer</LatestLink>
          </LatestLinks>
        </LatestHeadline>
        <ParentGrid>
        <LatestGrid>
            {latestProducts.map((product) => (
              <CardWrapper key={product.id}>
                <SaleBadge>Sale</SaleBadge>
                <FeaturedCard
                  image={product.imageSrc}
                  title={product.name}
                  code={product.description}
                  price={product.price}
                />
              </CardWrapper>
            ))}
          </LatestGrid>
        </ParentGrid>
        <LatestHeading>What Shopex Offers</LatestHeading>
        <ShopexContainer>
          {shopexData.map((shopexItem) => (
            <Shopex key={shopexItem.id} title={shopexItem.title} text={shopexItem.text} />
          ))}
        </ShopexContainer>
      </LatestContainer>
    </>
  );
}

export default Latest;
