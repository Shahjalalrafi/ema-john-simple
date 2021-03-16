import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props)
    const {name, img, seller,price, stock, key} = props.productName
   
    return (
        <div className= "product">
            <div className="productImg">
                <img src={img} alt=""/>
            </div>

            <div>
                <h4><Link to={"/product/" + key}>{name}</Link></h4>
                <small>by<span>{seller}</span></small>
                <p>$<span>{price}</span></p>
                <p>only {stock} left in stock - order soon </p>
                {props.showAddToCart && <button className="btn" onClick={() => props.addHandler(props.productName)}><FontAwesomeIcon icon={faShoppingCart} /> add to shopping cart</button>}
                
            </div>
        </div>
    );
};

export default Product;