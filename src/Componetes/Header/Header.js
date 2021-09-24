import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/Home">Home</a>
                <a href="/About">About</a>
            </nav>
        </div>
    );
};

export default Header;