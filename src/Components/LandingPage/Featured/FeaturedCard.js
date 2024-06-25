import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  box-shadow: 0 3px 3px rgba(1, 1, 1.5, 0.1);
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

const CardImageContainer = styled.div`
  background-color: #f3f3f9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 100%;
  overflow: hidden;
`;

const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  text-align: center;
  flex: 1;

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
 
   &:hover {
    background-color: #7e33e0; /* Change background color on hover */
    
    h3{
    color: white; 
    }
    h4{
    color: white;
    }
  }

`;

const CardActions = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #f3f3f9;

  svg {
    margin: 0 0.5rem;
    cursor: pointer;
  }
`;

const FeaturedCard = ({ image, title, code, price }) => {
  return (
    <Card>
      <CardActions>
        <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7' }} />
        <FontAwesomeIcon icon={faHeart} style={{ color: '#1A9BF6' }} />
        <FontAwesomeIcon icon={faMagnifyingGlassPlus} style={{ color: '#1A9BF6' }} />
      </CardActions>
      <CardImageContainer>
        <CardImage src={image} alt={title} />
      </CardImageContainer>
      <CardContent>
        <h3>{title}</h3>
        <h4>Code - {code}<br />${price}</h4>
      </CardContent>
    </Card>
  );
};

export default FeaturedCard;
