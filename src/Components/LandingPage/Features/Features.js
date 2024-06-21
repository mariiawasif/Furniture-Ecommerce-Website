import React from "react";
import image from '../../assets/Features/image.png';
import "./Features.css";

function Features() {
  return (
    <div className="features">
      <div className="features-left">
      <img src={image} alt="features Image" className="sofa" />
        
      </div>
      
      <div className="features-right">
      
        <h2>
            Unique Features of Latest & <br/>
            Trending Products
            <br/>
        </h2>

        <ul class="colored-list">
            <li><span class="dot red"></span>All frames constructed with hardwood solids and laminates</li>
            <li><span class="dot blue"></span>Reinforced with double wood dowels, glue, screw nails corner <br/> blocks and machine nails</li>
            <li><span class="dot teal"></span>Arms, backs and seats are structurally reinforced</li>
         </ul>
        
        <button className="cart">Add to Cart</button>
        <p className="cart-p">B&B Italian Sofa</p>
        <p className="cart-p1">$32.00</p>
          </div>
    </div>
  );
}

export default Features;
