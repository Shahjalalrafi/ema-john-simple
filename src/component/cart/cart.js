import React from 'react';

const Cart = (props) => {
    const cart = props.cart

    const totals = cart.reduce((total, current) => total + current.price, 0)

    let shipping = 0
    if(totals > 35) {
        shipping = 0
    }else if(totals > 15) {
        shipping = 4.99
    }else if(totals > 0) {
        shipping = 12.99
    }

    let tax = (totals / 10 ).toFixed(2)
    let grandTotal = (totals + shipping + Number(tax)).toFixed(2)

    return (
        <div>
            <h1>this is cart</h1>
            <p>Item ordered: {cart.length}</p>
            <p>products total: {totals.toFixed(2)}</p>
            <p><small>shipping price: ${shipping}</small></p>
            <p>tax & vat: {tax}</p>
            <p>total price: ${grandTotal}</p>
        </div>
    );
};

export default Cart;