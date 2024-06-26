import React from 'react';
import styled from 'styled-components';

const Category = styled.div`
  font-family: 'Bergen Sans Semi Bold', sans-serif;
  flex: 1; /* Ensure the category takes up equal space in the row */
`;

const CHeading = styled.h1`
  color: #22155B;
  font-size: 40px;
  text-align: center;
`;

const PGrid = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 5px;
  padding: 7%;
`;

const CGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  padding: 15px;
  width: 100%;
  justify-items: center; /* Center items within each grid cell */

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on smaller screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on smaller screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 column on very small screens */
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

function CategoriesP({ products }) {
  return (
    <Category>
      <PGrid>
        <CGrid>
          {products.map((product, index) => (
            <CGridItemContainer key={index}>
              <CGridItem>
                <UpperCont1>
                  <ProductImage src={product.image} alt="Product" />
                </UpperCont1>
              </CGridItem>
              <ItemsInfo>
                <ProductName>{product.name}</ProductName>
                <PPrice1>
                  {product.price} <OldPrice>{product.oldPrice}</OldPrice>
                </PPrice1>
              </ItemsInfo>
            </CGridItemContainer>
          ))}
        </CGrid>
      </PGrid>
    </Category>
  );
}

export default CategoriesP;
