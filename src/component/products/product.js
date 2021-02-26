import React from 'react';
import './product.css'

const Product = (props) => {
    console.log(props.productName)
    
    const {name, img, seller,price, stock} = props.productName
   
    return (
        <div className= "product">
            <div className="productImg">
                <img src={img} alt=""/>
            </div>

            <div>
                <h4>{name}</h4>
                <small>by<span>{seller}</span></small>
                <p>$<span>{price}</span></p>
                <p>only {stock} left in stock - order soon </p>
            </div>
        </div>
    );
};

export default Product;