import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Orders.css';
import { Navigate } from 'react-router-dom';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/orders/66759d552182276756170f0a`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);


    const handleReorder = async (order) => {
        try {
            const response = await fetch(`http://localhost:4000/api/cart/reorder`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: '66759d552182276756170f0a',
                    order: order,
                }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return <Navigate to="/cart" />;
        } catch (error) {
            console.error('Error reordering items:', error);
        }
    };

    const handleCancel = async (order) => {
        try {
            console.log('Cancelled Order');

        } catch (error) {
            console.error('Error cancelling items:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Your Orders</h1>
            <div className="orders-list">
                {orders.length > 0 ? (
                    <div className="list-group custom-width">
                        {orders.map(order => (
                            <div key={order._id} className="list-group-item">
                                <h5 className="mb-1">Order ID: {Math.floor(Math.random() * 99999)}</h5>
                                <p className="mb-1">Total Amount: ${order.totalAmount.toFixed(2)}</p>
                                <p className="mb-1">Status: <span style={{ color: 'green' }}>{order.status}</span></p>
                                <ol>
                                    {order.items.map(item => (
                                        <li key={item._id}>{item.name}</li>
                                    ))}
                                </ol>
                                <div className="buttons">
                                    <button className="btn btn-secondary btn-sm" onClick={() => handleCancel(order)}>Cancel</button>
                                    <button className="btn btn-secondary btn-sm" onClick={() => handleReorder(order)}>Reorder</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No orders found</p>
                )}
            </div>
        </div>
    );
};

export default Orders;
