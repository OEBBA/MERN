import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, username, handleLogout }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <div className="d-flex align-items-center">
                    <Link className="navbar-brand" to="/">Synergistic IT</Link>
                    <div className="ms-3 d-flex align-items-center welcome">
                        {isLoggedIn ? (
                            <>
                                <span className="me-2" style={{ color: 'white' }}>Welcome, {username}</span>
                                <button className="btn btn-link" onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <Link className="nav-link" to="/login">Login</Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
