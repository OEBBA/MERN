import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';

const Cart = ({ user }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(user);
        if (user && user._id) {
            const fetchCartItems = async () => {
                try {
                    const response = await fetch(`http://localhost:4000/api/cart/${user._id}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const data = await response.json();
                    console.log('Fetched cart items:', data);
                    setItems(data);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching cart items:', error);
                    setLoading(false);
                }
            };

            fetchCartItems();
        } else {
            setLoading(false);
        }
    }, [user]);

    const totalAmount = items.reduce((total, item) => total + item.price, 0);

    const handleRemoveItem = async (productId) => {
        try {
            const response = await fetch(`http://localhost:4000/api/cart/${user._id}/${productId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const updatedItems = items.filter(item => item._id !== productId);
            setItems(updatedItems);
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-5">
            <h1>Cart Page</h1>
            <div className="cart-items">
                {items.length > 0 ? (
                    <div className="list-group">
                        {items.map(item => (
                            <div key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                                <img src={item.image} alt={item.name} className="img-thumbnail" style={{ width: '100px' }} />
                                <div className="item-details">
                                    <h5 className="mb-1">{item.name}</h5>
                                    <p className="mb-1">${item.price.toFixed(2)}</p>
                                </div>
                                <button className="btn btn-danger btn-sm" onClick={() => handleRemoveItem(item._id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
            {items.length > 0 && (
                <div className="mt-4 text-right">
                    <h3>Total: ${totalAmount.toFixed(2)}</h3>
                    <button className="btn btn-primary" onClick={() => window.location.href = `/checkout`}>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
