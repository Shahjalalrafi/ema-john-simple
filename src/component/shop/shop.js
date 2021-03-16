import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/cart';
import Product from '../products/product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './shop.css'

const Shop = () => {

    const first10 = fakeData.slice(0,10)
    const [products, setproduct] = useState(first10)
    const [cart, setCart] = useState([])

    useEffect(() => {
      const savedCart = getDatabaseCart()
      const productKeys = Object.keys(savedCart)
      const previousCart = productKeys.map(existingKey =>  {
        const product = fakeData.find(pd => pd.key === existingKey)
        product.quantity =savedCart[existingKey]
        return product
      })

      setCart(previousCart)
    }, [])

    const addHandler = (product) => {
      // console.log('added', product)

      const toBeAdded = product.key
      const sameProduct = cart.find(pd => pd.key === toBeAdded)
      let count = 1
      let newCart 
      if(sameProduct) {
        count = sameProduct.quantity + 1
        sameProduct.quantity = count
        const others = cart.filter(pd => pd.key !== toBeAdded)
        newCart = [...others, sameProduct]
      }else {
        product.quantity = 1
        newCart = [...cart, product]
      }


      // const count = sameProduct.length
      // const newCart = [...cart, product]
      setCart(newCart)
      addToDatabaseCart(product.key, count)
    }
    
    return (
        <div className="shopContainer">
          <div className="productContainer">
            
                {
                    products.map(pd => <Product showAddToCart={true} productName={pd} addHandler = {addHandler}></Product>)
                }
            
          </div>

          <div className="cartContainer">
            <Cart cart={cart}>
            <Link to='/review'>
                <button className='btn'> <FontAwesomeIcon icon={faShoppingCart} />order review</button>
            </Link>
            </Cart>
          </div>
          
        </div>
    );
};

export default Shop;