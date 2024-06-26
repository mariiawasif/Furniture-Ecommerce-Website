// BlogC.js
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import BlogCard from './Blog';
import chair1 from '../../assets/Blog/img1.png';
import chair2 from '../../assets/Blog/img2.png';
import chair3 from '../../assets/Blog/img3.png';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bergen Sans Semi Bold';
    src: url('C://Users//MariaWasif//Downloads//BergenSans-SemiBold.woff2') format('woff2'),
         url('C://Users//MariaWasif//Downloads//BergenSans-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }
`;

const BlogContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const BlogHeading = styled.h1`
  margin-top: 8%;
  text-align: center;
  font-family: 'Bergen Sans Semi Bold', sans-serif;
  font-weight: bold;
  color: #22155B;
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const GridContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 5px;
  }
`;

function BlogC() {
  return (
    <>
      <GlobalStyle />
      <BlogContainer>
        <BlogHeading>Blog Products</BlogHeading>
        <GridContainer>
          <BlogGrid>
            <BlogCard
              image={chair1}
              title="Top essential trends in 2021"
              name="SaberAli"
              date="21 August,2020"
            />
            <BlogCard
              image={chair2}
              title="Top essential trends in 2021"
              name="SaberAli"
              date="21 August,2020"
            />
            <BlogCard
              image={chair3}
              title="Top essential trends in 2021"
              name="SaberAli"
              date="21 August,2020"
            />
          </BlogGrid>
        </GridContainer>
      </BlogContainer>
    </>
  );
}

export default BlogC;
