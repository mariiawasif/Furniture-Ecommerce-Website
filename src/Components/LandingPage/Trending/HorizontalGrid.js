import React from 'react';
import styled from 'styled-components';

const TItem = styled.div`
  background-color: #f3f3f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  height: 150px; 
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    height: auto;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 120%;
  align-items: center;
  font-family: 'Bergen Sans Semi Bold', sans-serif;
  
  @media screen and (max-width: 768px) {
    font-size: 100%;
    text-align: center;
  }
`;

const DiscountText = styled.div`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  white-space: nowrap;

  a {
    display: inline-block;
    color: #ff4081;
    text-decoration: none;
    font-weight: bold;
    margin-top: 10px;
    
    @media screen and (max-width: 768px) {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 768px) {
    white-space: normal;
  }
`;

const TImage = styled.img`
  width: 100px; 
  height: 100px; 
  background-color: #f3f3f9;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

function HorizontalGrid({ heading, image }) {
  return (
    <TItem>
      <TextContainer>
        <DiscountText>{heading}</DiscountText>
        <a href="#" className="shop-now">Shop Now</a>
      </TextContainer>
      <TImage src={image} alt="Product Image" />
    </TItem>
  );
}

export default HorizontalGrid;