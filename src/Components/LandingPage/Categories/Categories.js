import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CategoriesP from './CategoriesP';
import { addCategoriesToFirestore, fetchCategoriesFromFirestore, categories } from "../../../firestoreUtils";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Bergen Sans Semi Bold";
    src: url("C://Users//MariaWasif//Downloads//BergenSans-SemiBold.woff2") format("woff2"),
         url("C://Users//MariaWasif//Downloads//BergenSans-SemiBold.woff") format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    font-size: 1.6rem;
    overflow-x: hidden;
    font-family: 'Bergen Sans Semi Bold', sans-serif;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  flex-wrap: wrap;
  text-align: center;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 1440px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 50%;
  }
`;

const CHeading = styled.h1`
  color: #22155B;
  font-size: 40px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

const CGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  padding: 15px;
  width: 100%;
  justify-items: center; 

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; 
  }
`;

const App = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    addCategoriesToFirestore(categories).catch(error => {
      console.error('Failed to add categories to Firestore:', error);
    });
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await fetchCategoriesFromFirestore();
        setCategoryList(fetchedCategories);
      } catch (error) {
        console.error('Failed to fetch categories from Firestore:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <GlobalStyle />
      <CHeading>Top Categories</CHeading>
      <AppContainer>
        <CGrid>
          {categoryList.map((category, index) => (
            <CategoriesP
              key={index}
              image={category.image}
              name={category.name}
              price={category.price}
              oldPrice={category.oldPrice}
            />
          ))}
        </CGrid>
      </AppContainer>
    </>
  );
};

export default App;
