import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../images/logo.png';
import './Header.css'
const Header = () => {
 

    return (
        <div className='product-conatiner'>
            <img className='product-img' src={logo} alt="" />
            <nav className="nav-item">
                <NavLink className='nav-link' to="/shop">Shop</NavLink>
                <NavLink className='nav-link' to="/order">Order Overview</NavLink>
                <NavLink className='nav-link' to="/manage">Manage Inventory Here</NavLink>
               
            </nav>
            
        </div>
    );
};

export default Header;