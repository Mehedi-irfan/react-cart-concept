import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useCart from '../../Hooks/UseCart';
import useProduct from '../../Hooks/UseProduct';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
const OrderReview = () => {
    const [products, setProduct] = useProduct();
    const [cart, setCart] = useCart(products);
    const history = useHistory()
    const removeItem = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    const handlePlaceOrder = () => {
        history.push('/placeOrder');
        setCart([]);
        clearTheCart()
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        removeItem={removeItem}
                        >
                        </ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                 <button onClick={handlePlaceOrder} className='purches'>Place Your Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;