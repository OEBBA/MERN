import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';

const Cart = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Ralph Lauren Jacket',
            description: 'A stylish Ralph Lauren jacket perfect for any occasion. Made from high-quality materials, it offers both comfort and elegance.',
            rating: 4.5,
            price: 10.00,
            category: 'Fashion',
            image: 'https://wwd.com/wp-content/uploads/2023/06/ralph-lauren-mens-spring-2024-milan-002.jpg?w=800'
        },
        {
            id: 2,
            name: 'Ralph Lauren Shirt',
            description: 'This Ralph Lauren shirt is a wardrobe essential. It features a classic design and premium fabric for a comfortable fit.',
            rating: 4.0,
            price: 20.00,
            category: 'Fashion',
            image: 'https://wwd.com/wp-content/uploads/2023/06/ralph-lauren-mens-spring-2024-milan-005.jpg?w=800'
        },
        {
            id: 3,
            name: 'Louis Vuitton Jacket',
            description: 'Experience luxury with this Louis Vuitton jacket. Its exquisite design and superior craftsmanship make it a standout piece.',
            rating: 5.0,
            price: 30.00,
            category: 'Fashion',
            image: 'https://wwd.com/wp-content/uploads/2024/02/louis-vuitton-typer-the-creator-collection-spring-2024-photos-04.jpg?w=800'
        }
    ]);

    const totalAmount = items.reduce((total, item) => total + item.price, 0);

    return (
        <div className="container mt-5">
            <h1>Cart Page</h1>
            <div className="cart-items">
                {items.length > 0 ? (
                    <div className="list-group">
                        {items.map(item => (
                            <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <img src={item.image} alt={item.name} className="img-thumbnail" style={{ width: '100px' }} />
                                <div className="item-details">
                                    <h5 className="mb-1">{item.name}</h5>
                                    <p className="mb-1">${item.price.toFixed(2)}</p>
                                </div>
                                <button className="btn btn-danger btn-sm" onClick={() => setItems(items.filter(i => i.id !== item.id))}>Remove</button>
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
                    <button className="btn btn-primary">Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
