import React from 'react';
import './Categories.css';
import productImage from '../../assets/Categories/chair1.png';
import productImage1 from '../../assets/Categories/chair.png';
import productImage2 from '../../assets/Categories/pic.png';

function Categories() {
    return (
        <div className='category'>
            <h1 className='c-heading'>Top Categories</h1>
            <div className='p-grid'>
                <div className='c-grid'>

                    {/* Card 1 */}
                    <div className='cgrid-item-container'>
                        <div className='cgrid-item'>
                            <div className='upper-cont1'>
                                <img src={productImage} alt="Product" className='product-image' />
                            </div>
                        </div>
                        <div className='items-info'>
                            <p className='product-name'>Comfort Handy Craft</p>
                            <p className='product-price'>$42.00 <span className='old-price'>$65.00</span></p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='cgrid-item-container'>
                        <div className='cgrid-item'>
                            <div className='upper-cont1'>
                                <img src={productImage1} alt="Product" className='product-image' />
                            </div>
                        </div>
                        <div className='items-info'>
                            <p className='product-name'>Comfort Handy Craft</p>
                            <p className='product-price'>$42.00 <span className='old-price'>$65.00</span></p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='cgrid-item-container'>
                        <div className='cgrid-item'>
                            <div className='upper-cont1'>
                                <img src={productImage2} alt="Product" className='product-image' />
                            </div>
                        </div>
                        <div className='items-info'>
                            <p className='product-name'>Comfort Handy Craft</p>
                            <p className='product-price'>$42.00 <span className='old-price'>$65.00</span></p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className='cgrid-item-container'>
                        <div className='cgrid-item'>
                            <div className='upper-cont1'>
                                <img src={productImage} alt="Product" className='product-image' />
                            </div>
                        </div>
                        <div className='items-info'>
                            <p className='product-name'>Comfort Handy Craft</p>
                            <p className='product-price'>$42.00 <span className='old-price'>$65.00</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Categories;
