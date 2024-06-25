import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = ({ items, addToCart, isLoggedIn }) => {
    return (
        <div className="container mt-5">
            <h1>Products</h1>
            <div className="row">
                {items.map(item => (
                    <div key={item.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text"><strong>Category:</strong> {item.category}</p>
                                <p className="card-text"><strong>Rating:</strong> {item.rating} / 5</p>
                                <p className="card-text"><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                                <Link to={`/product/${item.id}`} className="btn btn-info mt-auto">View Details</Link>
                                <button onClick={() => addToCart(item)} className="btn btn-primary mt-2">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
