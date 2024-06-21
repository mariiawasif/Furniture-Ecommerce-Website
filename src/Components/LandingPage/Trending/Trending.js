import React from "react";
import "./Trending.css";
import chair from '../../assets/Trending/chair1.png';
import chair2 from '../../assets/Trending/chair2.png';
import chair3 from '../../assets/Trending/chair5.png';
import chair4 from '../../assets/Trending/chair4.png';
import image from '../../assets/Trending/chair6.png';
import image2 from '../../assets/Trending/chair7.png';

function Trending() {
  return (
    <div className="trending">
      <h1 className="trending-heading"> Trending Products </h1>
      <div className="grid1">
      <div className="trending-grid">

      <div className="grid-card">
        <div className="grid-card-row1">
            <img src={chair} alt="grid-card" className="chair" />
        </div>
        <div className="grid-card-row2">
            <h3>Cantilever Chair <br/> </h3>  
        <div className="prices">  
            <h4>$26.00   </h4>    
            <h5 className="overthrough">$42.00</h5>
        </div> 
        </div> 
     </div>


     <div className="grid-card">
        
        <div className="grid-card-row1">
         <img src={chair2} alt="grid-card" className="chair" />
        </div>
        <div className="grid-card-row2">
          <h3>Cantilever Chair <br/>
          </h3>  
          <div className="prices">  
            <h4>$26.00   </h4>    
            <h5 className="overthrough">$42.00</h5>
        </div>    
        </div>
     </div>
     

     <div className="grid-card">
        
        <div className="grid-card-row1">
        <img src={chair3} alt="grid-card" className="chair" />
        </div>
        <div className="grid-card-row2">
        <h3>Cantilever Chair <br/> </h3>  
        <div className="prices">  
            <h4>$26.00   </h4>    
            <h5 className="overthrough">$42.00</h5>
        </div>   
        </div>
     </div>

     <div className="grid-card">
       
        <div className="grid-card-row1">
        <img src={chair4} alt="grid-card" className="chair" />
        </div>
        <div className="grid-card-row2">
        <h3>Cantilever Chair <br/> </h3>  
        <div className="prices">  
            <h4>$26.00   </h4>    
            <h5 className="overthrough">$42.00</h5>
        </div>    
        </div>
      </div>
      </div>  
      </div>

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
            <a href="#" className="shop-now" >Shop Now</a>
          </div>
          <img src={image2} alt="Product Image" className="prod-image2"/>
        </div>
      </div>

               
    
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
    </div>
  );
}

export default Trending;
