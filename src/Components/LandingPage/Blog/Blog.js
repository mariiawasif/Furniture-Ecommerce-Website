// BlogCard.js
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

const BlogCard = styled.div`
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

const BlogImageContainer = styled.div`
  background-color: #f3f3f9;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 50%; // Adjusted height
  overflow: hidden;
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  text-align: left;
  flex: 1;

  h3 {
    color: #FB2E86;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    text-align: left;
  }

  h4 {
    font-family: 'Bergen Sans Semi Bold', sans-serif;
    color: #22155B;
    font-size: 1.4rem;
    text-align: left;
  }
 
  &:hover {
    background-color: #7e33e0; /* Change background color on hover */
    
    h3 {
      color: white; 
    }
    h4 {
      color: white;
    }
  }
`;

const Button = styled.h4`
  color:  #FB2E86;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #22155B; 
  }
`;

const BParallel = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const Blog = ({ image, title, name, date }) => {
  return (
    <BlogCard>
      <BlogImageContainer>
        <BlogImage src={image} alt={title} />
      </BlogImageContainer>
      <BlogContent>
        <BParallel>
          <h4>{name}</h4>
          <h4>{date}</h4>
        </BParallel>
        <h3>{title}</h3>
        <p>Discover the must-have furniture trends for 2021 that redefine style and comfort</p>
        <Button>Read More</Button>
      </BlogContent>
    </BlogCard>
  );
};

export default Blog;
