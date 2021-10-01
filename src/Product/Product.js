import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    console.log(props.product);
    const {name, img, price, seller, stock, star}= props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img className='product-img' src={img} alt="" />
            </div>
            <div className='product-info'>
                <h2 className=''>{name}</h2>
                <p><small>By :- {seller}</small></p>
                <h3>Price :- ${price}</h3>
                
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating 
                initialRating={star}
                  emptySymbol="far fa-star icon-color"
                  fullSymbol="fas fa-star icon-color"
                readonly
                ></Rating>
                <br />
                <button onClick={() => props.handleToCart(props.product)} className='cart-btn'>{element}Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;