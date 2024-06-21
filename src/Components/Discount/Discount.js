import React from 'react';
import './Discount.css';
import sofa from './sofa-image.png';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Discount(){
    return(
        <div className='Discount-page'>
             <h1 className="discount-heading"> Discount Item </h1>
             <div className='discount-headline'>
                    <div className='latest-a'>
                        <a href='#'>
                            Wood Chair
                        </a>
                        <a href='#'>
                            Plastic Chair
                        </a>
                        <a href='#'>
                            Sofa Collection
                        </a>
                    </div>
                </div>


                <div className="discount-main">
                <div className="discount-left">
                    <h1>
                        20% Discount on all Products
                        <br/>
                    </h1>
                    <h3>Eams Sofa Compact</h3>
                    <p> Dive into wider range of selected items and enjoy the discounts. <br/> Shop a greater
                        collection of Deals, Sales and Clearance items </p>
                    <div className='parallel'>    
                        <p>  <FontAwesomeIcon icon={faCheck} style={{ color: '#3B27C7' }} /> Material expose like metals</p>
                        <p>   <FontAwesomeIcon icon={faCheck} style={{ color: '#3B27C7' }}/>  Clear lines and geometric figures</p>
                    </div> 
                    <div className='parallel'>    
                        <p>  <FontAwesomeIcon icon={faCheck} style={{ color: '#3B27C7' }} /> Material expose like metals</p>
                        <p>   <FontAwesomeIcon icon={faCheck} style={{ color: '#3B27C7' }}/> Simple neutral colours </p>
                    </div>    
                    
                    <button className="shopbutton">Shop Now</button>
                </div>
                
                <div className="discount-right">
                    <img src={sofa} alt="Hero Image" className="sofa-img" />
                </div>
                </div>



        </div>

    )
}

export default Discount;