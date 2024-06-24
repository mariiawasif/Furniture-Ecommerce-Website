import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import productImage from '../../assets/Latest/pic1.png';
import productImage2 from '../../assets/Latest/pic2.png';
import productImage3 from '../../assets/Latest/pic3.png';
import productImage4 from '../../assets/Latest/pic4.png';
import productImage5 from '../../assets/Latest/pic5.png';
import productImage6 from '../../assets/Latest/pic7.png';

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
  font-family: 'Bergen Sans Semi Bold', sans-serif;
  font-weight: bold;
  color: #22155B;
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
  color: #22155B;
  padding: 2px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #FB2E86;
  }
`;

const ParentGrid = styled.div`
  display: flex;
  justify-content: center;
`;
const LatestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin-top: 20px;
  padding: 15px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  padding: 20px;
  max-width: 300px;
  height: 400px;
  border-radius: 1px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  text-align: center;
`;

const SaleBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #3B27C7;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${GridItem}:hover & {
    opacity: 1;
  }
`;

const ProductImage = styled.img`
  width: 70%;
  height: auto;
  margin-bottom: 10px;
`;

const ProductImage3 = styled(ProductImage)`
  width: 77%;
`;

const UpperContainer = styled.div`
  background-color: #f3f3f9;
  max-width: 300px;
  height: 200px;
  margin-bottom: 10px;

  &:hover {
    background-color: white;
  }
`;

const ProductIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
  margin-top: 5%;
`;

const ProductInfo = styled.div`
  text-align: center;
  margin-top: 7%;
`;

const ProductName = styled.p`
  font-family: 'Bergen Sans Semi Bold', sans-serif;
  color: #22155B;
  font-size: 1.8rem;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  font-size: 1.6rem;
  color: #42a4f5;
`;

const OldPrice = styled.span`
  color: #FB2E86;
  text-decoration: line-through;
  margin-left: 10px;
`;

const ShopexHeading = styled.h1`
  margin-top: 10%;
  text-align: center;
  margin-left: -1%;
  font-family: 'Bergen Sans Semi Bold', sans-serif;
  font-weight: bold;
  color: #22155B;
  font-size: 4rem;
  margin-bottom: 10%;
`;

const ShopexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: -7%;
  gap: 5px;
  width: 100%;
  padding: 90px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 100px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 100px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 100px;
  }
`;

const ShopexCard = styled.div`
  width: 30rem;
  border-radius: 2px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
//   align-items: center;
//   justify-content: center;
  height: 400px;
  padding: 20px;
`;

const ShopexText = styled.h2`
  font-family: 'Bergen Sans Semi Bold', sans-serif;
  color: #22155B;
  justify-content: center;
  text-align: center;
  margin-top: 50%;
  
`;

const ShopexP = styled.p`
  font-family: 'Bergen Sans Semi Bold', sans-serif;
  color: #9c9c9c;
  text-align: center;
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
            <GridItem>
              <UpperContainer>
                <SaleBadge>Sale</SaleBadge>
                <ProductImage src={productImage} alt="Product" />
              </UpperContainer>
              <ProductIcons>
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7' }} />
                <FontAwesomeIcon icon={faHeart} style={{ color: '#3B27C7' }} />
                <FontAwesomeIcon icon={faSearch} style={{ color: '#3B27C7' }} />
              </ProductIcons>
              <ProductInfo>
                <ProductName>Comfort Handy Craft</ProductName>
                <ProductPrice>$42.00 <OldPrice>$65.00</OldPrice></ProductPrice>
              </ProductInfo>
            </GridItem>

            <GridItem>
              <UpperContainer>
                <SaleBadge>Sale</SaleBadge>
                <ProductImage src={productImage2} alt="Product" />
              </UpperContainer>
              <ProductIcons>
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7' }} />
                <FontAwesomeIcon icon={faHeart} style={{ color: '#3B27C7' }} />
                <FontAwesomeIcon icon={faSearch} style={{ color: '#3B27C7' }} />
              </ProductIcons>
              <ProductInfo>
                <ProductName>Comfort Handy Craft</ProductName>
                <ProductPrice>$42.00 <OldPrice>$65.00</OldPrice></ProductPrice>
              </ProductInfo>
            </GridItem>

            <GridItem>
              <UpperContainer>
                <SaleBadge>Sale</SaleBadge>
                <ProductImage3 src={productImage3} alt="Product" />
              </UpperContainer>
              <ProductIcons>
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7' }} />
                <FontAwesomeIcon icon={faHeart} style={{ color: '#3B27C7' }} />
                <FontAwesomeIcon icon={faSearch} style={{ color: '#3B27C7' }} />
              </ProductIcons>
              <ProductInfo>
                <ProductName>Comfort Handy Craft</ProductName>
                <ProductPrice>$42.00 <OldPrice>$65.00</OldPrice></ProductPrice>
              </ProductInfo>
            </GridItem>

            <GridItem>
              <UpperContainer>
                <SaleBadge>Sale</SaleBadge>
                <ProductImage src={productImage4} alt="Product" />
              </UpperContainer>
              <ProductIcons>
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7' }} />
                <FontAwesomeIcon icon={faHeart} style={{ color: '#3B27C7' }} />
                <FontAwesomeIcon icon={faSearch} style={{ color: '#3B27C7' }} />
              </ProductIcons>
              <ProductInfo>
                <ProductName>Comfort Handy Craft</ProductName>
                <ProductPrice>$42.00 <OldPrice>$65.00</OldPrice></ProductPrice>
              </ProductInfo>
            </GridItem>

            <GridItem>
              <UpperContainer>
                <SaleBadge>Sale</SaleBadge>
                <ProductImage src={productImage5} alt="Product" />
              </UpperContainer>
              <ProductIcons>
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7' }} />
                <FontAwesomeIcon icon={faHeart} style={{ color: '#3B27C7' }} />
                <FontAwesomeIcon icon={faSearch} style={{ color: '#3B27C7' }} />
              </ProductIcons>
              <ProductInfo>
                <ProductName>Comfort Handy Craft</ProductName>
                <ProductPrice>$42.00 <OldPrice>$65.00</OldPrice></ProductPrice>
              </ProductInfo>
            </GridItem>

            <GridItem>
              <UpperContainer>
                <SaleBadge>Sale</SaleBadge>
                <ProductImage src={productImage6} alt="Product" style={{ marginTop: '8%' }} />
              </UpperContainer>
              <ProductIcons>
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7' }} />
                <FontAwesomeIcon icon={faHeart} style={{ color: '#3B27C7' }} />
                <FontAwesomeIcon icon={faSearch} style={{ color: '#3B27C7' }} />
              </ProductIcons>
              <ProductInfo>
                <ProductName>Comfort Handy Craft</ProductName>
                <ProductPrice>$42.00 <OldPrice>$65.00</OldPrice></ProductPrice>
              </ProductInfo>
            </GridItem>
          </LatestGrid>
        </ParentGrid>
        <ShopexHeading>What Shoppex Offers</ShopexHeading>
        <ShopexGrid>
          <ShopexCard>
            <ShopexText>24/7 Support</ShopexText>
            <ShopexP>No matter the hour, count on us for reliable 24/7 support!</ShopexP>
          </ShopexCard>
          <ShopexCard>
            <ShopexText>24/7 Support</ShopexText>
            <ShopexP>No matter the hour, count on us for reliable 24/7 support!</ShopexP>
          </ShopexCard>
          <ShopexCard>
            <ShopexText>24/7 Support</ShopexText>
            <ShopexP>No matter the hour, count on us for reliable 24/7 support!</ShopexP>
          </ShopexCard>
          <ShopexCard>
            <ShopexText>24/7 Support</ShopexText>
            <ShopexP>No matter the hour, count on us for reliable 24/7 support!</ShopexP>
          </ShopexCard>
        </ShopexGrid>
      </LatestContainer>
    </>
  );
}

export default Latest;
