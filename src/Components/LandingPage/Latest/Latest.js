import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import FeaturedCard from "../Featured/FeaturedCard";
import productImage from "../../assets/Latest/pic1.png";
import productImage2 from "../../assets/Latest/pic2.png";
import productImage3 from "../../assets/Latest/pic3.png";
import productImage4 from "../../assets/Latest/pic4.png";
import productImage5 from "../../assets/Latest/pic5.png";
import productImage6 from "../../assets/Latest/pic7.png";
import Shopex from "./Shopex";

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
  height: 5vh;
  padding: 6px;
  background-color: white;
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
    grid-template-columns: repeat(2, 1fr); /* Two columns on medium screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Single column on small screens */
  }
`;

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
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

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on medium screens */
    gap: 10px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Single column on small screens */
    gap: 5px;
    padding: 5px;
  }
`;

function Latest() {
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
            <CardWrapper>
              <SaleBadge>Sale</SaleBadge>
              <FeaturedCard
                image={productImage}
                title="Comfort Handy Craft"
                code="12345"
                price="42.00"
              />
            </CardWrapper>
            <CardWrapper>
              <SaleBadge>Sale</SaleBadge>
              <FeaturedCard
                image={productImage2}
                title="Comfort Handy Craft"
                code="12346"
                price="42.00"
              />
            </CardWrapper>
            <CardWrapper>
              <SaleBadge>Sale</SaleBadge>
              <FeaturedCard
                image={productImage3}
                title="Comfort Handy Craft"
                code="12347"
                price="42.00"
              />
            </CardWrapper>
            <CardWrapper>
              <SaleBadge>Sale</SaleBadge>
              <FeaturedCard
                image={productImage4}
                title="Comfort Handy Craft"
                code="12348"
                price="42.00"
              />
            </CardWrapper>
            <CardWrapper>
              <SaleBadge>Sale</SaleBadge>
              <FeaturedCard
                image={productImage5}
                title="Comfort Handy Craft"
                code="12349"
                price="42.00"
              />
            </CardWrapper>
            <CardWrapper>
              <SaleBadge>Sale</SaleBadge>
              <FeaturedCard
                image={productImage6}
                title="Comfort Handy Craft"
                code="12350"
                price="42.00"
              />
            </CardWrapper>
          </LatestGrid>
        </ParentGrid>
        <LatestHeading>What Shopex Offers</LatestHeading>
        <ShopexContainer>
          <Shopex
            title="24/7 Support"
            text="No matter the hour, count on us for reliable 24/7 support!"
          />
          <Shopex
            title="Free Shipping"
            text="Get free shipping on all orders above $50."
          />
          <Shopex
            title="Easy Returns"
            text="30-day return policy on all purchases."
          />
          <Shopex
            title="Secure Payment"
            text="100% secure payment with SSL encryption."
          />
        </ShopexContainer>
      </LatestContainer>
    </>
  );
}

export default Latest;
