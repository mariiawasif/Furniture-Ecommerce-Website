import React from 'react';
import styled from 'styled-components';


const TItem = styled.div`
  background-color: #f3f3f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  margin: 0 auto; 
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
 
`;


const TextContainer = styled.div`
  display: flex;
  margin-top: 8%;
  flex-direction: column;
  font-size: 120%;
  margin-left: 15%;
  align-items: center;
  font-family: 'Bergen Sans Semi Bold', sans-serif;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    font-size: 100%;
    text-align: center;
  }
    
`;

const DiscountText = styled.div`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  margin-top: -30%;
  white-space: nowrap;
  margin-right: 20%;

  a {
    display: inline-block;
    color: #ff4081;
    text-decoration: none;
    font-weight: bold;
    margin-right: 55%;

    @media screen and (max-width: 768px) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 0;
    margin-right: 0;
    white-space: normal;
  }
`;

const TImage = styled.img`
  width: 70px;
  height: auto;
  margin-right: 20px;
  background-color: #f3f3f9;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
    width: 100px;
  }

  


`;

function HorizontalGrid({ heading, image }) {
  return (
    // <AppContainer>
    //   <TContainer>
    
        <TItem>
          <TextContainer>
            <DiscountText>{heading}</DiscountText>
            <a href="#" className="shop-now">Shop Now</a>
          </TextContainer>
          <TImage src={image} alt="Product Image" />
        </TItem>
        
    //   </TContainer>
    // </AppContainer>
  );
}

export default HorizontalGrid;
