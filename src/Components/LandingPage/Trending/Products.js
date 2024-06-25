import React from 'react';
import styled from 'styled-components';


const ProductItem = styled.div`

    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    gap: 5px;

    img{
    
    width: 40px;
    height: auto;
    margin-right: 20px;
    background-color: #f3f3f9;

    @media screen and (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 10px;
      width: 100px;
    }

    }


    @media screen and (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      
    }
`;

const ProductInfo= styled.div`
    text-align: left;

    @media screen and (max-width: 768px) {
      text-align: center;
    }

`;

const ProductTitle= styled.div`
    font-family: 'Bergen Sans Semi Bold', sans-serif;
    font-style: bold;
    font-size: 12px;
    color: #22155B;
    margin-bottom: 5px;

`;

const ProductPrice= styled.div`
    font-family: 'Bergen Sans Semi Bold', sans-serif;
    font-size: 10px;
    color: #22155B;
    text-decoration: line-through;
`;

function Products({image}){
    return(
        <ProductItem>
            <img src={image} alt="Product Image" className="list-product-image"/>
            <ProductInfo>
                <ProductTitle>Executive Seat chair</ProductTitle>
                <ProductPrice>$32.00</ProductPrice>
            </ProductInfo>
        </ProductItem>
    )
}

export default Products;