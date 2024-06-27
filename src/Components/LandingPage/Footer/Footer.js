import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.footer`
  background-color: #f3f3f9;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 150px;
  font-weight: normal;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #22155b;
  text-decoration: none;
  margin-bottom: 8px;
  font-size: 1.4rem;
  

  &:hover {
    text-decoration: underline;
    color: #fb2e86;
  }
`;

const SubscribeInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 80%;
  max-width: 300px;
  font-size: 1.4rem;
`;

const SubscribeButton = styled.button`
  padding: 10px 20px;
  background-color: #ff4081;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  cursor: pointer;
   width: 87%;
  &:hover {
    background-color: #e63570;
  }
`;

const ContactInfo = styled.p`
  font-size: 1.4rem;
  color: #333;
`;

<<<<<<< HEAD

=======
>>>>>>> 8a72b8a951be8ad2f4e8646df291473abcd1a60f
const Footer = () => (
  <FooterContainer>
    <FooterSection>
      <FooterTitle>Hekto</FooterTitle>
      <SubscribeInput type="email" placeholder="Enter Email Address" />
      <SubscribeButton>Sign Up</SubscribeButton>
      <ContactInfo>
        Contact Info <br />
        17 Princess Road, London, Greater London NW1 8JR, UK
      </ContactInfo>
    </FooterSection>

    <FooterSection>
      <FooterTitle>Categories</FooterTitle>
      <FooterLink href="#">Laptops & Computers</FooterLink>
      <FooterLink href="#">Cameras & Photography</FooterLink>
      <FooterLink href="#">Smart Phones & Tablets</FooterLink>
      <FooterLink href="#">Video Games & Consoles</FooterLink>
      <FooterLink href="#">Waterproof Headphones</FooterLink>
    </FooterSection>

    <FooterSection>
      <FooterTitle>Customer Care</FooterTitle>
      <FooterLink href="#">My Account</FooterLink>
      <FooterLink href="#">Discount</FooterLink>
      <FooterLink href="#">Returns</FooterLink>
      <FooterLink href="#">Orders History</FooterLink>
      <FooterLink href="#">Order Tracking</FooterLink>
    </FooterSection>

    <FooterSection>
      <FooterTitle>Pages</FooterTitle>
      <FooterLink href="#">Blog</FooterLink>
      <FooterLink href="#">Browse the Shop</FooterLink>
      <FooterLink href="#">Category</FooterLink>
      <FooterLink href="#">Pre-Built Pages</FooterLink>
      <FooterLink href="#">Visual Composer Elements</FooterLink>
      <FooterLink href="#">WooCommerce Pages</FooterLink>
    </FooterSection>
  </FooterContainer>
);

export default Footer;
