import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Product from '../../../Product/Product';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import './Shop.css';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProduct] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => {
            setDisplayProduct(data)
            setProduct(data)
            })
    }, []);
    useEffect(() =>{
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addedCart = products.find (product => product.key === key);
                if(addedCart){
                    const quantity = savedCart[key];
                    addedCart.quantity = quantity;
                    storedCart.push(addedCart);
                }
            }
            setCart(storedCart);
        }
    },[products]);
    const handleToCart = product =>{
        const exitis = cart.find (pd => pd.key === product.key);
        let newCart = [];
        if(exitis){
            const rest = cart.filter(pd => pd.key !== product.key);
            exitis.quantity += 1;
            newCart = [...rest, product]; 
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key);
    }
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const handleSearch = event =>{
        const seacrhText = event.target.value;
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(seacrhText.toLowerCase()));
        setDisplayProduct(matchProduct);
    }
    return (
        <div>
            <div className='input-div'>
            <input type="text" name="" onChange={handleSearch} className='input-value' id="" placeholder='type here to search' />
          <small className='icon'>  {element}{cart.length}</small>
            </div>
        <div className='shop-container'>
            <div className='product-container'>
                {
                    displayProducts.map(product => <Product 
                        key={product.key}
                        product={product}
                        handleToCart={handleToCart}
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to='/order'>
                        <button className='purches'>Review Your Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;