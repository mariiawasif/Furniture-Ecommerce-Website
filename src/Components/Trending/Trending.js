import React from "react";
// import sofa from './sofa (2).png';
import "./Trending.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faMagnifyingGlassPlus   } from '@fortawesome/free-solid-svg-icons';
import chair from './chair1.png';
import chair2 from './chair2.png';
import chair3 from './chair3.png';
import chair4 from './chair4.png';

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
            <h3>Cantilever Chair <br/>
            </h3>  
            <h4>Code - Y23201 <br/>
            $42.00
            </h4>    
        </div> 
     </div>


     <div className="grid-card">
        
        <div className="grid-card-row1">
         <img src={chair2} alt="grid-card" className="chair" />
        </div>
        <div className="grid-card-row2">
          <h3>Cantilever Chair <br/>
          </h3>  
          <h4>Code - Y23201 <br/>
            $42.00
          </h4>    
        </div>
     </div>
     

     <div className="grid-card">
        
        <div className="grid-card-row1">
        <img src={chair3} alt="grid-card" className="chair" />
        </div>
        <div className="grid-card-row2">
        <h3>Cantilever Chair <br/>
          </h3>  
          <h4>Code - Y23201 <br/>
            $42.00
          </h4>    
        </div>
     </div>

     <div className="grid-card">
       
        <div className="grid-card-row1">
        <img src={chair4} alt="grid-card" className="chair" />
        </div>
        <div className="grid-card-row2">
        <h3>Cantilever Chair <br/>
          </h3>  
          <h4>Code - Y23201 <br/>
            $42.00
          </h4>    
        </div>
      </div>
      </div>  
      </div>
      
    </div>
  );
}

export default Trending;
