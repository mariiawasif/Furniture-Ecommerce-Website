import React from 'react';
import styled from 'styled-components';

const Category = styled.div`
  font-family: 'Bergen Sans Semi Bold', sans-serif;
  flex: 1; 
`;

const PGrid = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 5px;
  padding: 7%;
  width: 100%;
`;

const CGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  padding: 15px;
  width: 100%;
  justify-items: center; 

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

const CGridItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CGridItem = styled.div`
  width: 250px; 
  height: 250px; 
  border-radius: 50%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
`;

const UpperCont1 = styled.div`
  width: 100%;
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f9;
`;

const ProductImage = styled.img`
  width: 80%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const ItemsInfo = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 10px;
  margin-top: 10px; 
`;

const ProductName = styled.p`
  color: #22155B;
`;

const PPrice1 = styled.p`
  color: #22155B;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: grey;
  margin-left: 5px;
`;

function CategoriesP({ name, image, price, oldPrice }) {
  return (
    <CGridItemContainer>
      <CGridItem>
        <UpperCont1>
          <ProductImage src={image} alt="Product" />
        </UpperCont1>
      </CGridItem>
      <ItemsInfo>
        <ProductName>{name}</ProductName>
        <PPrice1>
          {price} <OldPrice>{oldPrice}</OldPrice>
        </PPrice1>
      </ItemsInfo>
    </CGridItemContainer>
  );
}

export default CategoriesP;
