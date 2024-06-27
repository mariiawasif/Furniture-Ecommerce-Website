import React from 'react';
import styled from 'styled-components';

const TItem = styled.div`
  background-color: #f3f3f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
<<<<<<< HEAD
  height: 150px; 
=======
  height: 150px; /* Set a fixed height for the grid */
>>>>>>> 8a72b8a951be8ad2f4e8646df291473abcd1a60f
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
<<<<<<< HEAD
    height: auto;
=======
    height: auto; /* Allow height to adjust on smaller screens */
>>>>>>> 8a72b8a951be8ad2f4e8646df291473abcd1a60f
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
<<<<<<< HEAD
  width: 100px; 
  height: 100px; 
=======
  width: 100px; /* Set a fixed width for the image */
  height: 100px; /* Set a fixed height for the image */
>>>>>>> 8a72b8a951be8ad2f4e8646df291473abcd1a60f
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