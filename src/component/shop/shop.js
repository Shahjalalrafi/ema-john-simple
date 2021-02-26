import React, { useState, useCart } from 'react';
import fakeData from '../../fakeData'
import Cart from '../cart/cart';
import Product from '../products/product';
import './shop.css'

const Shop = () => {

    
    
    const first10 = fakeData.slice(0,10)
    const [products, setproduct] = useState(first10)
    const [cart, setCart] = useState([])

    const addHandler = (product) => {
      console.log('added', product)

      const newCart = [...cart, product]
      setCart(newCart)
    }
    
    return (
        <div className="shopContainer">
          <div className="productContainer">
            
                {
                    products.map(pd => <Product productName={pd} addHandler = {addHandler}></Product>)
                }
            
          </div>

          <div className="cartContainer">
            <Cart cart={cart}></Cart>
          </div>
          
        </div>
    );
};

export default Shop;