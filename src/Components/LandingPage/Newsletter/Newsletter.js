import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import background from '../../assets/Newsletter/image.jpeg';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bergen Sans Semi Bold';
    src: url('C://Users//MariaWasif//Downloads//BergenSans-SemiBold.woff2') format('woff2'),
         url('C://Users//MariaWasif//Downloads//BergenSans-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap; 
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Bergen Sans Semi Bold', sans-serif;
  }
`;

const NewsletterContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const NewsletterContent = styled.div`
  color: #22155B;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const Heading = styled.h2`
  font-size: 30px;
  margin: 0;
  color: #22155B;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const SubHeading = styled.h3`
  font-size: 30px;
  margin: 10px 0;
  color: #22155B;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 5px 0;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin: 3px 0;
  }
`;

const SubscribeButton = styled.button`
  background-color: #FB2E86;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #e02176;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

function Newsletter() {
  return (
    <>
      <GlobalStyle />
      <NewsletterContainer>
        <NewsletterContent>
          <Heading>Get Latest Update By Subscribing to</Heading>
          <SubHeading>Our Newsletter</SubHeading>
          <SubscribeButton>Shop Now</SubscribeButton>
        </NewsletterContent>
      </NewsletterContainer>
    </>
  );
}

export default Newsletter;
