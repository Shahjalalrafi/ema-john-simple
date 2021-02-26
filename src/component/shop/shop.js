import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../products/product';
import './shop.css'

const Shop = () => {
    
    const first10 = fakeData.slice(0,10)
    const [products, setproduct] = useState(first10)
    return (
        <div className="shopContainer">
          <div className="productContainer">
            
                {
                    products.map(pd => <Product productName={pd}></Product>)
                }
            
          </div>

          <div className="cartContainer">
            <h1>this is cart</h1>
          </div>
          
        </div>
    );
};

export default Shop;