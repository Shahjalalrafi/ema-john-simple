import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=''/>
            <nav>
                <Link to="/shop" >shop</Link>
                <Link to="/review">order riview</Link>
                <Link to="/inventory">manage inventory</Link>
            </nav>
        </div>
    );
};

export default Header;