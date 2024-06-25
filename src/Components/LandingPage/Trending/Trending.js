import React from "react";
import styled from "styled-components";
import chair from '../../assets/Trending/chair1.png';
import chair2 from '../../assets/Trending/chair2.png';
import chair3 from '../../assets/Trending/chair5.png';
import chair4 from '../../assets/Trending/chair4.png';
import image from '../../assets/Trending/chair6.png';
import image2 from '../../assets/Trending/chair7.png';

const TrendingContainer = styled.div`
  .trending-heading {
    text-align: center;
    margin-top: 8%;
    font-family: 'Bergen Sans Semi Bold', sans-serif;
    font-weight: bold;
    color: #22155B;
    font-size: 40px;

    @media screen and (max-width: 768px) {
      font-size: 30px;
      margin-top: 5%;
    }
  }

  .grid1 {
    padding: 150px;

    @media screen and (max-width: 768px) {
      padding: 50px;
    }
  }

  .trending-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 20px;

    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .grid-card {
    background-color: white;
    width: 100%;
    border-radius: 2px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    border: 5px solid white;
    margin-top: -20%;

    @media screen and (max-width: 768px) {
      margin-top: 0;
    }
  }

  .grid-card-row1 {
    background-color: #f3f3f9;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
    max-height: 250px;
    border-bottom: 10px solid white;
    overflow: hidden;
  }

  .grid-card-row2 {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    text-align: center;
    width: 100%;
    transition: background-color 0.3s ease;
  }

  .prices:hover h3,
  .prices:hover h4,
  .prices:hover h5 {
    color: white;
    transition: color 0.3s ease;
  }

  .grid-card-row2 h3 {
    color: #22155B;
    text-transform: none;
    margin: 10px 0;
  }

  .grid-card-row2 h4 {
    font-family: 'Bergen Sans Semi Bold', sans-serif;
    color: #22155B;
    margin: 5px 0;
  }

  .grid-card:hover .grid-card-row2 h3 {
    color: #22155B;
  }

  .grid-card:hover .grid-card-row2 h4,
  .grid-card:hover .grid-card-row2 h5 {
    color: #22155B;
  }

  .chair {
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: cover;
    object-position: center;
    margin-top: 10px;


    @media screen and (max-width: 768px) {
    max-width: 250px; /* Adjust the max-height as needed */
  }

  }

  .overthrough {
    text-decoration: line-through;
    color: grey;
    margin-left: 10%;
    margin-top: 6%;
  }

  .prices {
    display: flex;
  }

  .trending-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 10%;
    margin-top: -9%;
    align-content: center;
    width: 30%;
    height: 200px;
    background-color: #f3f3f9;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      width: 80%;
      margin-left: 10%;
      height: auto;
    }
  }

  .trending-item {
    padding: 10px;
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-container img {
    max-width: 100%;
    height: auto;
    max-height: 150px;

    @media screen and (max-width: 768px) {
      max-height: 100px;
    }
  }

  .text-container {
    display: flex;
    margin-top: 8%;
    flex-direction: column;
    font-size: 120%;
    margin-left: 15%;
    align-items: center;
    font-family: 'Bergen Sans Semi Bold', sans-serif;

    @media screen and (max-width: 768px) {
      margin-left: 0;
      font-size: 100%;
      text-align: center;
    }
  }

  .discount {
    color: #22155B;
    white-space: nowrap;
    margin-bottom: 5px;
  }

  .text-container h5 {
    color: #FB2E86;
    margin-left: -88%;
    text-decoration: underline;

    @media screen and (max-width: 768px) {
      margin-left: 0;
    }
  }

  .containers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 0 50px;
    width: 170%;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      width: 100%;
      padding: 0 20px;
    }
  }

  .app-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: -26%;
    margin-right: 22%;

    @media screen and (max-width: 768px) {
      margin-top: 0;
      margin-right: 0;
      height: auto;
      flex-direction: column;
    }
  }

  .t-container {
    display: flex;
    gap: 40px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .t-item {
    background-color: #f3f3f9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 450px;
    padding: 20px;
    border: 1px solid #ddd;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex-grow: 1;

    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      text-align: center;
    }
  }

  .discount-text {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
    margin-top: -30%;
    white-space: nowrap;
    margin-right: 20%;

    @media screen and (max-width: 768px) {
      margin-top: 0;
      margin-right: 0;
      white-space: normal;
    }
  }

  .shop-now {
    display: inline-block;
    color: #ff4081;
    text-decoration: none;
    font-weight: bold;
    margin-right: 55%;

    @media screen and (max-width: 768px) {
      margin-right: 0;
    }
  }

  .shop-now:hover {
    text-decoration: underline;
  }

  .prod-image {
    width: 150px;
    height: auto;
    border-radius: 8px;

    @media screen and (max-width: 768px) {
      width: 100px;
    }
  }

  .prod-image2 {
    width: 250px;
    height: auto;
    border-radius: 8px;
    margin-left: -30%;
    margin-top: 20%;

    @media screen and (max-width: 768px) {
      width: 150px;
      margin-left: 0;
      margin-top: 10%;
    }
  }

  .product-list {
    display: flex;
    flex-direction: column;
    margin-right: -25%;
    width: 200px;
    gap: 10px;
    margin-bottom: 20px;
    margin-left: 1%;

    @media screen and (max-width: 768px) {
      flex-direction: row;
      margin-right: 0;
      width: 100%;
      margin-left: 0;
      justify-content: center;
    }

  }

  .product-item {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    gap: 5px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      
    }
  }

  .list-product-image {
    width: 40px;
    height: auto;
    margin-right: 20px;
    background-color: #f3f3f9;

    @media screen and (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 10px;
      width: 100px;
    }
  }

  .product-info {
    text-align: left;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  .product-title {
    font-family: 'Bergen Sans Semi Bold', sans-serif;
    font-style: bold;
    font-size: 12px;
    color: #22155B;
    margin-bottom: 5px;
  }

  .product-price {
    font-family: 'Bergen Sans Semi Bold', sans-serif;
    font-size: 10px;
    color: #22155B;
    text-decoration: line-through;
  }
`;

const Trending = () => {
  return (
    <TrendingContainer>
      <h1 className="trending-heading">Trending Products</h1>
      <div className="grid1">
        <div className="trending-grid">
          <div className="grid-card">
            <div className="grid-card-row1">
              <img src={chair} alt="grid-card" className="chair" />
            </div>
            <div className="grid-card-row2">
              <h3>Cantilever Chair <br/></h3>  
              <div className="prices">
                <h4>$26.00</h4>
                <h5 className="overthrough">$42.00</h5>
              </div>
            </div>
          </div>

          <div className="grid-card">
            <div className="grid-card-row1">
              <img src={chair2} alt="grid-card" className="chair" />
            </div>
            <div className="grid-card-row2">
              <h3>Cantilever Chair <br/></h3>
              <div className="prices">
                <h4>$26.00</h4>
                <h5 className="overthrough">$42.00</h5>
              </div>
            </div>
          </div>

          <div className="grid-card">
            <div className="grid-card-row1">
              <img src={chair3} alt="grid-card" className="chair" />
            </div>
            <div className="grid-card-row2">
              <h3>Cantilever Chair <br/></h3>
              <div className="prices">
                <h4>$26.00</h4>
                <h5 className="overthrough">$42.00</h5>
              </div>
            </div>
          </div>

          <div className="grid-card">
            <div className="grid-card-row1">
              <img src={chair4} alt="grid-card" className="chair" />
            </div>
            <div className="grid-card-row2">
              <h3>Cantilever Chair <br/></h3>
              <div className="prices">
                <h4>$26.00</h4>
                <h5 className="overthrough">$42.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Horizontal Grids */}
      <div className="app-container">
        <div className="t-container">
          <div className="t-item">
            <div className="text-container">
              <div className="discount-text">23% off in all products</div>
              <a href="#" className="shop-now">Shop Now</a>
            </div>
            <img src={image} alt="Product Image" className="prod-image"/>
          </div>
          <div className="t-item">
            <div className="text-container">
              <div className="discount-text">23% off in all products</div>
              <a href="#" className="shop-now">Shop Now</a>
            </div>
            <img src={image2} alt="Product Image" className="prod-image2"/>
          </div>
        </div>


      {/* Product Lists */}
        <div className="product-list">
          <div className="product-item">
            <img src={image} alt="Product Image" className="list-product-image"/>
            <div className="product-info">
              <div className="product-title">Executive Seat chair</div>
              <div className="product-price">$32.00</div>
            </div>
          </div>
          <div className="product-item">
            <img src={image} alt="Product Image" className="list-product-image"/>
            <div className="product-info">
              <div className="product-title">Executive Seat chair</div>
              <div className="product-price">$32.00</div>
            </div>
          </div>
          <div className="product-item">
            <img src={image} alt="Product Image" className="list-product-image"/>
            <div className="product-info">
              <div className="product-title">Executive Seat chair</div>
              <div className="product-price">$32.00</div>
            </div>
          </div>
        </div>
      </div>
    </TrendingContainer>
  );
}

export default Trending;
