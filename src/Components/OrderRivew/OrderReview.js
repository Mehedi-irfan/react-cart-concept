import React from 'react';
import useCart from '../../Hooks/UseCart';
import useProduct from '../../Hooks/UseProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
const OrderReview = () => {
    const [products, setProduct] = useProduct();
    const [cart, setCart] = useCart(products);
    const removeItem = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;