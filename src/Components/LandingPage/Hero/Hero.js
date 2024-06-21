import React from "react";
import sofa from '../../assets/Hero/sofa (2).png';
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h3>Best Furniture for your castle</h3>
        <h1>
            New Furniture Collection <br/>
            Trends in 2020
            <br/>
        </h1>
        <p>Elevate your space with our handcrafted, timeless furniture designs. <br/></p>
        
        <button className="shop">Shop Now</button>
      </div>
      
      <div className="hero-right">
        <img src={sofa} alt="Hero Image" className="sofa" />
      </div>
    </div>
  );
}

export default Hero;
