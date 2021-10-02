import React from 'react';
import img from '../../images/giphy.gif';
import './PlaceOrder.css';
const PlaceOrder = () => {
    return (
        <div>
            <h2 className='success-text'>Your Order Is Successfully Complete</h2>
            <img className='success-img' src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;