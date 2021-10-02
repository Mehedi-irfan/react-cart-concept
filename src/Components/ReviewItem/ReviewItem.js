import React from 'react';

const ReviewItem = (props) => {
    const {img, name, price, seller, quantity, key} = props.product;
    console.log(props.product);
    const {removeItem} = props;
    return (
        <div className='product'>
            <div>
            <img className='product-img' src={img} alt="" />
            </div>
            <div className='product-info'>
            <h2 className=''>{name}</h2>
                <p><small>By :- {seller}</small></p>
                <h3>Price :- ${price}</h3>
                <h4>Quantity :- {quantity}</h4>
                <button onClick={() => removeItem(key)} className='cart-btn'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;