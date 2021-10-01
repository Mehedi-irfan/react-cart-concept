import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(props.cart);
    let total = 0;
    let totalQuantity = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = (total + shipping + tax);
    return (
        <div className="cart">
            <h1>Order Summary</h1>
             <h3>Items Orderd :-{totalQuantity}</h3>
             <h4>Total : ${total.toFixed(2)}</h4>
             <h4>Shipping :- ${shipping}</h4>
             <h4>Tax :- ${tax.toFixed(2)}</h4>
             <h4>Grand Total :- ${grandTotal.toFixed(2)}</h4>
             <button className='purches'>Purches to All</button>
        </div>
    );
};

export default Cart;