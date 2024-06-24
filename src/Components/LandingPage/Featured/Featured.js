import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import chair from '../../assets/Featured/chair.png';
import chair2 from '../../assets/Featured/chair2.png';
import chair3 from '../../assets/Featured/chair3.png';
import chair4 from '../../assets/Featured/chair4.png';

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

const FeaturedContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const FeaturedHeading = styled.h1`
  margin-top: 8%;
  font-family: 'Bergen Sans Semi Bold', sans-serif;
  font-weight: bold;
  color: #22155B;
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const GridContainer = styled.div`
  padding: 150px;

  @media (max-width: 768px) {
    padding: 100px 50px;
  }

  @media (max-width: 480px) {
    padding: 50px 20px;
  }
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 4rem;
  }

  @media (max-width: 480px) {
    gap: 5rem;
  }
`;

const Card = styled.div`
  width: 100%;
  border-radius: 2px;
  box-shadow: 0 3px 3px rgba(1, 1, 1.5, 0.1);
  display: grid; 
  grid-template-rows: 1fr 1fr 60px;
  height: 400px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const CardRow1 = styled.div`
  background-color: #f3f3f9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 230px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const CardRow2 = styled.div`
  background-color: #ffffff; 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2F1AC4;
  }

  h3 {
    color: #FB2E86;
    margin-top: -20%;
  }

  h4 {
    font-family: 'Bergen Sans Semi Bold', sans-serif;
    color: #22155B;
    margin-left: -50%;
  }

  &:hover h3,
  &:hover h4 {
    color: white;
  }

   @media (max-width: 768px) {
     text-align: centre;
  }

  @media (max-width: 480px) {
    text-align: centre;
  }
`;

const CardRow3 = styled.div`
  background-color: #f3f3f9;   
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`;

const ChairImage = styled.img`
  width: 75%;
  margin-top: -15%;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
`;

function Featured() {
  return (
    <>
      <GlobalStyle />
      <FeaturedContainer>
        <FeaturedHeading>Featured Products</FeaturedHeading>
        <GridContainer>
          <FeaturedGrid>
            <Card>
              <CardRow3>
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faHeart} style={{ color: '#1A9BF6', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faMagnifyingGlassPlus} style={{ color: '#1A9BF6' }} />
              </CardRow3>
              <CardRow1>
                <ChairImage src={chair} alt="card" />
              </CardRow1>
              <CardRow2>
                <h3>Cantilever Chair</h3>
                <h4>Code - Y23201 <br /> $42.00</h4>
              </CardRow2>
            </Card>

            <Card>
              <CardRow3>
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faHeart} style={{ color: '#1A9BF6', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faMagnifyingGlassPlus} style={{ color: '#1A9BF6' }} />
              </CardRow3>
              <CardRow1>
                <ChairImage src={chair2} alt="card" />
              </CardRow1>
              <CardRow2>
                <h3>Cantilever Chair</h3>
                <h4>Code - Y23201 <br /> $42.00</h4>
              </CardRow2>
            </Card>

            <Card>
              <CardRow3>
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faHeart} style={{ color: '#1A9BF6', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faMagnifyingGlassPlus} style={{ color: '#1A9BF6' }} />
              </CardRow3>
              <CardRow1>
                <ChairImage src={chair3} alt="card" />
              </CardRow1>
              <CardRow2>
                <h3>Cantilever Chair</h3>
                <h4>Code - Y23201 <br /> $42.00</h4>
              </CardRow2>
            </Card>

            <Card>
              <CardRow3>
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faHeart} style={{ color: '#1A9BF6', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faMagnifyingGlassPlus} style={{ color: '#1A9BF6' }} />
              </CardRow3>
              <CardRow1>
                <ChairImage src={chair4} alt="card" />
              </CardRow1>
              <CardRow2>
                <h3>Cantilever Chair</h3>
                <h4>Code - Y23201 <br /> $42.00</h4>
              </CardRow2>
            </Card>
          </FeaturedGrid>
        </GridContainer>
      </FeaturedContainer>
    </>
  );
}

export default Featured;
