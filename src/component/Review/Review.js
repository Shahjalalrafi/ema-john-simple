import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/cart';
import ReviewCart from './ReviewCart';
import thankYou from '../../images/giphy.gif'
import { useHistory } from 'react-router';

const Review = () => {

    const [cart, setCart] = useState([])
    const [placedOrder, setPlacedOrder] = useState(false)

    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)
        
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key]
            return product
        })

        setCart(cartProducts)
    }, [])

    const handleRemove = (productKey) => {
        console.log('remove', productKey)
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)

        removeFromDatabaseCart(productKey)
    }

    const history = useHistory()
    const handleProceedCheckout = () => {
        history.push('/shipment')
    }

    let placeResult
    if(placedOrder) {
        placeResult = <img src ={thankYou} alt=""/>
    }

    return (
        <div className="shopContainer">
            <div className="productContainer">
            {
                cart.map((pd, index) => <ReviewCart handleRemove= {handleRemove} product={pd} key={index}></ReviewCart>)
            }
            {placeResult}
            </div>

            <div className="cartContainer">
                
                <Cart cart={cart}>
                    <button onClick= {handleProceedCheckout} className="btn">proceed checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;