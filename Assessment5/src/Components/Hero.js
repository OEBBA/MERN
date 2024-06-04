import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <h2 className="hero-heading">Product Features:</h2>
            <ul className="hero-items">
                <li>Sign up new users</li>
                <li>Login existing users</li>
                <li>Allow users to add to cart</li>
                <li>Save the user's cart</li>
                <li>Checkout and pay for items</li>
                <li>Allow users to cancel the order</li>
                <li>Allow users to reorder the cart</li>
                <li>Add products/items to create product collection</li>
                <li>Allow users to give ratings to each product</li>
                <li>Have notifications on top right with logout</li>
            </ul>
        </div>
    );
};

export default Hero;
