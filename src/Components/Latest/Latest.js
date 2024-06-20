import React from 'react';
import './Latest.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faMagnifyingGlassPlus   } from '@fortawesome/free-solid-svg-icons';
import productImage from './pic1.png';
import productImage2 from './pic2.png';
import productImage3 from './pic3.png'
import productImage4 from './pic4.png'
import productImage5 from './pic5.png';
import productImage6 from './pic7.png';

function Latest(){
    return(
        <div className='Latest'>
            <div className='latest-heading'>
                <h1>Latest Products</h1>
            </div>
                <div className='latest-headline'>
                    <div className='latest-a'>
                        <a href='#'>
                            New Arrival
                        </a>
                        <a href='#'>
                            Best Seller
                        </a>
                        <a href='#'>
                            Featured
                        </a>
                        <a href='#'>
                            Special Offer
                        </a>
                    </div>
                </div>
           
            <div className='parent-grid'>      
            <div className='latest-grid'>

                {/* first card */}
                    <div className='grid-item'>
                    <div className='upper-cont'>
                    <div className='sale-badge'>Sale</div>
                    <img src={productImage} alt="Product" className='product-image' />
                    </div>
                    <div className='product-icons'>
                        <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7' }} />
                        <FontAwesomeIcon icon={faHeart} style={{ color: '#3B27C7' }} />
                        <FontAwesomeIcon icon={faSearch} style={{ color: '#3B27C7' }} />
                    </div>
                    <div className='product-info'>
                    
                        <p className='product-name'>Comfort Handy Craft</p>
                        <p className='product-price'>$42.00 <span className='old-price'>$65.00</span></p>
                    </div>
                    </div>


                {/* second card */}
                    <div className='grid-item'>
                    <div className='upper-cont'>
                    <div className='sale-badge'>Sale</div>
                    <img src={productImage2} alt="Product" className='product-image' />
                    </div>
                    <div className='product-icons'>
                        <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7' }} />
                        <FontAwesomeIcon icon={faHeart} style={{ color: '#3B27C7' }} />
                        <FontAwesomeIcon icon={faSearch} style={{ color: '#3B27C7' }} />
                    </div>
                    <div className='product-info'>
                    
                        <p className='product-name'>Comfort Handy Craft</p>
                        <p className='product-price'>$42.00 <span className='old-price'>$65.00</span></p>
                    </div>
                    </div>


                {/* third card */}
                    <div className='grid-item'>
                    <div className='upper-cont'>
                    <div className='sale-badge'>Sale</div>
                    <img src={productImage3}  alt="Product" className='product-image-3' />
                    </div>
                    <div className='product-icons'>
                        <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7' }} />
                        <FontAwesomeIcon icon={faHeart} style={{ color: '#3B27C7' }} />
                        <FontAwesomeIcon icon={faSearch} style={{ color: '#3B27C7' }} />
                    </div>
                    <div className='product-info'>
                        <p className='product-name'>Comfort Handy Craft</p>
                        <p className='product-price'>$42.00 <span className='old-price'>$65.00</span></p>
                    </div>
                    </div>


                {/* fourth card */}
                <div className='grid-item'>
                    <div className='upper-cont'>
                    <div className='sale-badge'>Sale</div>
                    <img src={productImage4} alt="Product" className='product-image' />
                    </div>
                    <div className='product-icons'>
                        <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7' }} />
                        <FontAwesomeIcon icon={faHeart} style={{ color: '#3B27C7' }} />
                        <FontAwesomeIcon icon={faSearch} style={{ color: '#3B27C7' }} />
                    </div>
                    <div className='product-info'>
                    
                        <p className='product-name'>Comfort Handy Craft</p>
                        <p className='product-price'>$42.00 <span className='old-price'>$65.00</span></p>
                    </div>
                    </div>  


                {/* fitth card */}
                    <div className='grid-item'>
                    <div className='upper-cont'>
                    <div className='sale-badge'>Sale</div>
                    <img src={productImage5} alt="Product" className='product-image' />
                    </div>
                    <div className='product-icons'>
                        <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7' }} />
                        <FontAwesomeIcon icon={faHeart} style={{ color: '#3B27C7' }} />
                        <FontAwesomeIcon icon={faSearch} style={{ color: '#3B27C7' }} />
                    </div>
                    <div className='product-info'>
                    
                        <p className='product-name'>Comfort Handy Craft</p>
                        <p className='product-price'>$42.00 <span className='old-price'>$65.00</span></p>
                    </div>
                    </div>  


                    {/* sixth card */}
                    <div className='grid-item'>
                    <div className='upper-cont'>
                    <div className='sale-badge'>Sale</div>
                    <img src={productImage6} alt="Product" className='product-image' style={{'marginTop': '8%'}} />
                    </div>
                    <div className='product-icons'>
                        <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#3B27C7' }} />
                        <FontAwesomeIcon icon={faHeart} style={{ color: '#3B27C7' }} />
                        <FontAwesomeIcon icon={faSearch} style={{ color: '#3B27C7' }} />
                    </div>
                    <div className='product-info'>
                    
                        <p className='product-name'>Comfort Handy Craft</p>
                        <p className='product-price'>$42.00 <span className='old-price'>$65.00</span></p>
                    </div>
                    </div>    
                    
            </div>   
            </div> 


            <div className='shopex-heading'>
                    <h1>What Shoppex Offers</h1>
            </div>

       

            <div className="shopex-grid">
                <div className="shopex-card">
                    <h2 className='shopex-text'>
                        24/7 Support
                    </h2>
                    <p className='shopex-p'>
                       No matter the hour, count on  <br/> us for reliable 24/7 support!
                    </p>
                </div>

                <div className="shopex-card">
                    <h2 className='shopex-text'>
                        24/7 Support
                    </h2>
                    <p className='shopex-p'>
                       No matter the hour, count on  <br/> us for reliable 24/7 support!
                    </p>
                </div>

                <div className="shopex-card">
                    <h2 className='shopex-text'>
                        24/7 Support
                    </h2>
                    <p className='shopex-p'>
                       No matter the hour, count on  <br/> us for reliable 24/7 support!
                    </p>
                </div>

                <div className="shopex-card">
                    <h2 className='shopex-text'>
                        24/7 Support
                    </h2>
                    <p className='shopex-p'>
                       No matter the hour, count on  <br/> us for reliable 24/7 support!
                    </p>
                </div>

                
            </div>


            

        </div>

    )
}

export default Latest;