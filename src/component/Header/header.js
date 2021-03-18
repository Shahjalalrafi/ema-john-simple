import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/logo.png'
import './header.css'

const Header = () => {
    const [logedInUser, setLogedInUser] = useContext(userContext)
    return (
        <div className="header">
            <img src={logo} alt=''/>
            <nav>
                <Link to="/shop" >shop</Link>
                <Link to="/review">order riview</Link>
                <Link to="/inventory">manage inventory</Link>
                <button onClick= {() => setLogedInUser({})}>sign out</button>
            </nav>
        </div>
    );
};

export default Header;