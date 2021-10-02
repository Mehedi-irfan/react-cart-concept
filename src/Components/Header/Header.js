import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../images/logo.png';
import './Header.css'
const Header = () => {
 const activeStyle = {
     color : 'tomato',
     borderBottom : '2px solid tomato',
     fontWeight : '700'
 }

    return (
        <div className='product-conatiner'>
            <img className='product-img' src={logo} alt="" />
            <nav className="nav-item">
                <NavLink activeStyle={activeStyle} className='nav-link' to="/shop">Shop</NavLink>
                <NavLink activeStyle={activeStyle} className='nav-link' to="/order">Order Overview</NavLink>
                <NavLink activeStyle={activeStyle} className='nav-link' to="/manage">Manage Inventory Here</NavLink>
               
            </nav>
            
        </div>
    );
};

export default Header;