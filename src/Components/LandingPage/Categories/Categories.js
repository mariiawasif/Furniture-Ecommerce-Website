import React from 'react';
import styled from 'styled-components';
import productImage from '../../assets/Categories/chair1.png';
import productImage1 from '../../assets/Categories/chair.png';
import productImage2 from '../../assets/Categories/pic.png';



const Category = styled.div`
  font-family: 'Bergen Sans Semi Bold', sans-serif;
`;

const CHeading = styled.h1`
  color: #22155B;
  font-size: 40px;
  text-align: center;
//   margin-right: 15%;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px; 
  margin-top: -10px;
  padding: 15px;
  width: 100%;
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

function Categories() {
  return (
    <Category>
      <CHeading>Top Categories</CHeading>
      <PGrid>
        <CGrid>

          {/* Card 1 */}
          <CGridItemContainer>
            <CGridItem>
              <UpperCont1>
                <ProductImage src={productImage} alt="Product" />
              </UpperCont1>
            </CGridItem>
            <ItemsInfo>
              <ProductName>Comfort Handy Craft</ProductName>
              <PPrice1>$42.00 <OldPrice>$65.00</OldPrice></PPrice1>
            </ItemsInfo>
          </CGridItemContainer>

          {/* Card 2 */}
          <CGridItemContainer>
            <CGridItem>
              <UpperCont1>
                <ProductImage src={productImage1} alt="Product" />
              </UpperCont1>
            </CGridItem>
            <ItemsInfo>
              <ProductName>Comfort Handy Craft</ProductName>
              <PPrice1>$42.00 <OldPrice>$65.00</OldPrice></PPrice1>
            </ItemsInfo>
          </CGridItemContainer>

          {/* Card 3 */}
          <CGridItemContainer>
            <CGridItem>
              <UpperCont1>
                <ProductImage src={productImage2} alt="Product" />
              </UpperCont1>
            </CGridItem>
            <ItemsInfo>
              <ProductName>Comfort Handy Craft</ProductName>
              <PPrice1>$42.00 <OldPrice>$65.00</OldPrice></PPrice1>
            </ItemsInfo>
          </CGridItemContainer>

          {/* Card 4 */}
          <CGridItemContainer>
            <CGridItem>
              <UpperCont1>
                <ProductImage src={productImage} alt="Product" />
              </UpperCont1>
            </CGridItem>
            <ItemsInfo>
              <ProductName>Comfort Handy Craft</ProductName>
              <PPrice1>$42.00 <OldPrice>$65.00</OldPrice></PPrice1>
            </ItemsInfo>
          </CGridItemContainer>

        </CGrid>
      </PGrid>
    </Category>
  );
}

export default Categories;
