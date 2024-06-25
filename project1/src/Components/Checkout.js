import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkout = () => {
    const [user, setUser] = useState({
        "_id": "66759d552182276756170f0a",
        "username": "otoi",
        "password": "test",
        "cart": [
            {
                "_id": "666b1c8cf6822dbeba4e3d4d",
                "id": 2,
                "name": "Ralph Lauren Shirt",
                "description": "This Ralph Lauren shirt is a wardrobe essential. It features a classic design and premium fabric for a comfortable fit.",
                "rating": 4,
                "price": 120,
                "category": "Fashion",
                "image": "https://wwd.com/wp-content/uploads/2023/06/ralph-lauren-mens-spring-2024-milan-005.jpg?w=800",
                "orders": [],
                "createdAt": "2024-06-13T16:21:32.401Z",
                "__v": 0
            },
            {
                "_id": "666b1c8cf6822dbeba4e3d4e",
                "id": 3,
                "name": "Louis Vuitton Jacket",
                "description": "Experience luxury with this Louis Vuitton jacket. Its exquisite design and superior craftsmanship make it a standout piece.",
                "rating": 5,
                "price": 130,
                "category": "Luxury",
                "image": "https://wwd.com/wp-content/uploads/2024/02/louis-vuitton-typer-the-creator-collection-spring-2024-photos-04.jpg?w=800",
                "orders": [],
                "createdAt": "2024-06-13T16:21:32.401Z",
                "__v": 0
            }
        ],
        "orders": [],
        "createdAt": "2024-06-21T15:33:41.459Z",
        "__v": 36
    });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [creditCard, setCreditCard] = useState('');
    const [orderSummary, setOrderSummary] = useState(null);

    useEffect(() => {
        console.log(user);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const orderDetails = {
            userId: user._id,
            items: user.cart,
            totalAmount: user.cart.reduce((total, item) => total + item.price, 0),
            email: email,
            address: address,
            paymentMethod: creditCard
        };

        try {
            const response = await fetch('http://localhost:4000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderDetails)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setOrderSummary(data);
        } catch (error) {
            console.error('Error processing order:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Checkout Page</h1>
            {!orderSummary ? (
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="creditCard" className="form-label">Credit Card</label>
                        <input type="text" className="form-control" id="creditCard" value={creditCard} onChange={(e) => setCreditCard(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            ) : (
                <div className="order-summary">
                    <br />
                    <h2>Order Summary</h2>
                    <p>Order ID: {Math.floor(Math.random() * 99999)}</p>
                    <p>Total Amount: ${orderSummary.totalAmount.toFixed(2)}</p>
                    <p>Payment Method: {orderSummary.paymentMethod}</p>
                    <p>Email Address: {orderSummary.email}</p>
                    <p>Order Status: {orderSummary.status}</p>
                    <h1 style={{ color: 'green' }}>Thank you for your purchase! An email confirmation will be sent to you soon.</h1>
                    <p>See your orders here:</p>
                    <button className='btn btn-primary' onClick={() => window.location.href = `/Orders`}>Orders</button>
                </div>
            )}
        </div>
    );
};

export default Checkout;
