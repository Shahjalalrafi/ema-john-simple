import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../products/product';

const ProductDetails = () => {
    const { productKey } = useParams()
    const product = fakeData.find(pd => pd.key === productKey)
    console.log(product)
    return (
        <div>
            <h1>Your product details...</h1>
            <Product showAddToCart = {false} productName= {product}></Product>
        </div>
    );
};

export default ProductDetails;