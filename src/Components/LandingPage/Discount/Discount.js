import React from 'react';
import styled from 'styled-components';
import sofa from '../../assets/Discount/sofa-image.png';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DiscountPage = styled.div`
  font-family: 'Bergen Sans Semi Bold', sans-serif;
  
`;

const DiscountHeading = styled.h1`
  text-align: center;
  margin-top: 5%;
  font-weight: bold;
  color: #22155B;
  font-size: 40px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-top: 5%;
  }
`;

const DiscountHeadline = styled.div`
  height: 5vh;
  padding: 6px;
  background-color: white;
 
  
  @media (max-width: 480px) {
    width: 70%;
    margin-left: 15%;
    // white-space: nowrap;
  }

`;

const LatestA = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StyledLink = styled.a`
  font-size: large;
  color: #22155B;
  padding: 2px;

  &:hover {
    text-decoration: underline;
    color: #FB2E86;
  }
`;

const DiscountMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 6rem 2rem;
  background-color: white;

  @media screen and (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const DiscountLeft = styled.div`
  margin-top: 7%;
  text-align: center;

  h1 {
    font-size: 40px;
    text-align: left;
    margin-left: 15%;
    margin-bottom: 20px;
    color: #22155B;
    white-space: nowrap;

    @media screen and (max-width: 768px) {
      font-size: 30px;
      margin-left: 5%;
      white-space: wrap;
    }
  }

  h3 {
    margin-right: 40%;
    color: #FB2E86;
    margin-bottom: 20px;
  }

  p {
    color: rgb(193, 191, 191);
    font-weight: 450;
    text-align: center;
    margin-left: 16%;
    margin-bottom: 20px;
    text-align: left;

    @media screen and (max-width: 768px) {
      margin-left: 5%;
    }
  }

  .parallel {
    display: flex;
    gap: 2px;
    justify-content: center;
    margin-left: 11%;
    p {
      margin: 0 10px 10px 10px;
      width: 45%;
       

      @media screen and (max-width: 768px) {
        width: 100%;
        // white-space: nowrap;
        
      }

      @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-right: 2%;
        
    }
  }
`;

const DiscountRight = styled.div`
  img {
    width: 70%;
    height: auto;
    margin-left: 15%;

    @media screen and (max-width: 768px) {
      width: 80%;
      margin-left: 10%;
      justify-content: center;
      margin-top: 15%;
    }
  }
`;

const ShopButton = styled.button`
  background-color: #FB2E86;
  color: #ffffff;
  width: 180px;
  height: 50px;
  padding: 0.6rem;
  border-style: none;
  margin-right: 43%;
  margin-top: 2%;

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

const Discount = () => {
  return (
    <DiscountPage>
      <DiscountHeading>Discount Item</DiscountHeading>
      <DiscountHeadline>
        <LatestA>
          <StyledLink href="#">Wood Chair</StyledLink>
          <StyledLink href="#">Plastic Chair</StyledLink>
          <StyledLink href="#">Sofa Collection</StyledLink>
        </LatestA>
      </DiscountHeadline>

      <DiscountMain>
        <DiscountLeft>
          <h1>20% Discount on all Products<br /></h1>
          <h3>Eams Sofa Compact</h3>
          <p>
            Dive into a wider range of selected items and enjoy the discounts.
            <br /> Shop a greater collection of Deals, Sales, and Clearance items
          </p>
          <div className='parallel'>
            <p><FontAwesomeIcon icon={faCheck} style={{ color: '#3B27C7' }} /> Material expose like metals</p>
            <p><FontAwesomeIcon icon={faCheck} style={{ color: '#3B27C7' }} /> Clear lines and geometric figures</p>
          </div>
          <div className='parallel'>
            <p><FontAwesomeIcon icon={faCheck} style={{ color: '#3B27C7' }} /> Simple neutral colours</p>
            <p><FontAwesomeIcon icon={faCheck} style={{ color: '#3B27C7' }} /> Material expose like metals</p>
          </div>
         
          
          <ShopButton>Shop Now</ShopButton>
        </DiscountLeft>
        <DiscountRight>
          <img src={sofa} alt="Hero Image" className="sofa-img" />
        </DiscountRight>
      </DiscountMain>
    </DiscountPage>
  );
}

export default Discount;
