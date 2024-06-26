import React from "react";
import styled from "styled-components";
import image from '../../assets/Features/image.png';

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 6rem 2rem; 
  background-color: #f3f3f9;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

const FeaturesLeft = styled.div`
  margin-top: 15%;
  text-align: center;
`;

const SofaImage = styled.img`
  width: 100%; 
  height: auto; 
  max-width: 500px; 
  margin-left: auto; 
  margin-right: auto;
  margin-top: -10%; 

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const FeaturesRight = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h2`
  font-family: 'Bergen Sans Semi Bold', sans-serif;
  font-size: 35px;
  text-align: left;
  margin-left: 15%;
  margin-top: 6%;
  margin-bottom: 20px;
  color: #22155B;

  @media (max-width: 768px) {
    margin-left: auto; 
    margin-right: auto; 
    text-align: center; 
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: 15%;
  margin-bottom: 10px;
  color: #6c6c8c; 

  @media (max-width: 768px) {
    margin-left: 0; 
  }
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 15px;
`;

const RedDot = styled(Dot)`
  background-color: #ff0066;
`;

const BlueDot = styled(Dot)`
  background-color: #3b27c7;
`;

const TealDot = styled(Dot)`
  background-color: #20dfd8;
`;

const CartButton = styled.button`
  background-color: #FB2E86;
  color: #ffffff; 
  width: 150px; 
  height: 40px;
  padding: 0.6rem;
  border-style: none;
  margin-left: 15%;
  margin-top: 3%;

  @media (max-width: 768px) {
    margin-left: auto; 
    margin-right: auto; 
    display: block;
  }
`;

const CartParagraph = styled.p`
  color: #22155B;
  margin-top: 3%;
  margin-left: 25%;

  @media (max-width: 768px) {
    margin-left: auto; 
    margin-right: auto;
    text-align: center; 
    margin-bottom: 8%;
  }

  @media (max-width: 1024px) {
    margin-left: auto; 
    margin-right: auto;
    text-align: center; 
  }

  

   
`;

const PriceParagraph = styled.p`
  color: #22155B;
  margin-top: -5%;
  margin-left: 15%;

  @media (max-width: 768px) {
    
    margin-left: auto;
    margin-right: auto; 
    text-align: center; 
  }
    
  @media (max-width: 1024px) {
    margin-top: -7%;
    
  }

  @media (max-width: 2560px) {
   margin-top: -3%;
  }

`;

function Features() {
  return (
    <FeaturesContainer>
      <FeaturesLeft>
        <SofaImage src={image} alt="features Image" className="sofa" />
      </FeaturesLeft>
      
      <FeaturesRight>
        <Title>
          Unique Features of Latest & <br/>
          Trending Products
        </Title>

        <StyledList className="colored-list">
          <ListItem><RedDot></RedDot>All frames constructed with hardwood solids and laminates</ListItem>
          <ListItem><BlueDot></BlueDot>Reinforced with double wood dowels, glue, screw nails corner <br/> blocks and machine nails</ListItem>
          <ListItem><TealDot></TealDot>Arms, backs and seats are structurally reinforced</ListItem>
        </StyledList>
        
        <CartButton>Add to Cart</CartButton>
        <CartParagraph>B&B Italian Sofa</CartParagraph>
        <PriceParagraph>$32.00</PriceParagraph>
      </FeaturesRight>
    </FeaturesContainer>
  );
}

export default Features;
