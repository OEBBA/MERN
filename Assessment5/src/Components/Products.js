import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';

const Product = () => {
    const [cartItems, setCartItems] = useState([]);
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
            category: 'Luxury',
            image: 'https://wwd.com/wp-content/uploads/2024/02/louis-vuitton-typer-the-creator-collection-spring-2024-photos-04.jpg?w=800'
        }
    ]);

    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        rating: '',
        price: '',
        category: '',
        image: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const addProduct = (e) => {
        e.preventDefault();
        const newId = items.length ? items[items.length - 1].id + 1 : 1;
        const product = { ...newProduct, id: newId, price: parseFloat(newProduct.price), rating: parseFloat(newProduct.rating) };
        setItems([...items, product]);
        setNewProduct({ name: '', description: '', rating: '', price: '', category: '', image: '' });
    };

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

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
            <div className="mt-5">
                <h2>Add a New Product</h2>
                <form onSubmit={addProduct}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Product Name</label>
                        <input type="text" className="form-control form-control-sm" id="name" name="name" value={newProduct.name} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control form-control-sm" id="description" name="description" value={newProduct.description} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rating" className="form-label">Rating</label>
                        <input type="number" step="0.1" className="form-control form-control-sm" id="rating" name="rating" value={newProduct.rating} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" step="0.01" className="form-control form-control-sm" id="price" name="price" value={newProduct.price} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input type="text" className="form-control form-control-sm" id="category" name="category" value={newProduct.category} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image URL</label>
                        <input type="url" className="form-control form-control-sm" id="image" name="image" value={newProduct.image} onChange={handleInputChange} required />
                    </div>
                    <button type="submit" className="btn btn-success">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default Product;
