import React from 'react';
import styled from 'styled-components';
import Header from '../LandingPage/Header/Header';
import Nav from '../LandingPage/Navbar/Nav';
import Footer from '../LandingPage/Footer/Footer';
import GlobalStyles from '../LandingPage/GlobalStyle/GlobalStyles';

const GridSection = styled.div`
    background-color: #f3f3f9;
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextContainer = styled.div`
    text-align: center;
    gap: 10px;
`;

const ShopHeading = styled.h2`
    color: #fb2e86;
    margin: 0;  
`;

const Navs = styled.p`
    color: #fb2e86;
    margin: 0; 
    font-weight: normal; 
`;

const HomeText = styled.span`
    color: #22155b;  
`;

const PagesText = styled.span`
    color: #22155b;  
`;

const ShopDefault = styled.span`
    color: #fb2e86;  
`;


function ShopGrid() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Nav />
            <GridSection>
                <TextContainer>
                    <ShopHeading>Shop Grid Default</ShopHeading>
                    <Navs>
                        <HomeText>Home</HomeText> . <PagesText>Pages</PagesText> . <ShopDefault> Shop Grid Default</ShopDefault>
                    </Navs>
                </TextContainer>
            </GridSection>
            
        </>
    );
}

export default ShopGrid;
