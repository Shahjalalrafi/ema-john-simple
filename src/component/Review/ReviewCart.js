import React from 'react';
import './Review.css'

const ReviewCart = (props) => {
    const {name, quantity, img,key, price} = props.product

    
    
    return (
        <div className='product'>
            <div className="productImg">
             <img src={img} alt=""></img> 
            </div>
            
            <div>
                <h1 className="productTitle">{name}</h1>
                <p>product quantity: {quantity}</p>
                <p>Price: {price}</p>
                <button onClick=  {() => props.handleRemove(key)} className="btn">remove</button>
            </div>
        </div>
    );
};

export default ReviewCart;