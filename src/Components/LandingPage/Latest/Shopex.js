import React from "react";
import styled from "styled-components";


const Card = styled.div`
  display: flex;
//   flex-direction: column;
  border-radius: 2px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
  width: 300px;
  height: 400px;
  background-color: #fff;
  transition: transform 0.3s;
  

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;



const ShopexContent = styled.div`
  padding: 1.5rem;
  text-align: center;
  flex: 1;
  margin: auto;
  padding: 80px;

  h3 {
    color: #FB2E86;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    
  }

  h4 {
    font-family: 'Bergen Sans Semi Bold', sans-serif;
    color: #22155B;
    font-size: 1.6rem;
  }
 

`;

const Shopex = ({ title, text }) => {
  return (
    <Card>
     
      <ShopexContent>
        <h3>{title}</h3>
        <h4> {text}</h4>
      </ShopexContent>
      
    
    </Card>
  );
};

export default Shopex;
