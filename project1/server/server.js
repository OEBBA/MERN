const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Profile = require('./models/Profiles');
const Products = require('./models/Products');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect('mongodb+srv://otoisession66:Sakurafan1!@cluster0.v7vdhdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', dbOptions)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.log('MongoDB connection error:', error);
    });

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    console.log(req.body);

    try {
        let user = await Profile.findOne({ username });

        if (!user) {
            user = new Profile({ username, password, cart: [], orders: [] });
            console.log(user);
            await user.save();
            res.json(user);
        } else if (user.password === password) {
            res.json(user);
        } else {
            res.status(400).json({ error: 'Invalid credentials' });
        }

    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/cart', async (req, res) => {
    const { product, userId } = req.body;

    try {
        const user = await Profile.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        user.cart.push(product);
        await user.save();
        res.json(user.cart);

    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/cart/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await Profile.findById(userId).populate('cart');

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user.cart);

    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Products.find();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/profiles', async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.json(profiles);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.post('/api/products', async (req, res) => {
    const { name, description, rating, price, category, image } = req.body;
    try {
        const newProduct = new Products({
            name,
            description,
            rating,
            price,
            category,
            image,
        });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Failed to add product' });
    }
});

app.delete('/api/cart/:userId/:productId', async (req, res) => {
    const { userId, productId } = req.params;

    try {
        const user = await Profile.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        user.cart = user.cart.filter(item => item._id.toString() !== productId);

        user.markModified('cart');
        await user.save();

        res.json(user.cart);
    } catch (error) {
        console.error('Error removing item from cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/orders', async (req, res) => {
    const { userId, items, totalAmount, address, paymentMethod, email } = req.body;
    console.log(email);

    try {
        const user = await Profile.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const newOrder = {
            user: userId,
            items,
            totalAmount,
            email,
            address,
            paymentMethod,
            status: 'Pending'
        };

        user.orders.push(newOrder);
        user.cart = [];
        await user.save();

        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/orders/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const profile = await Profile.findById(userId);
        if (!profile) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(profile.orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/cart/reorder', async (req, res) => {
    const { order, userId } = req.body;

    console.log(order);

    try {
        const user = await Profile.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        user.cart = [];

        order.items.forEach(item => {
            user.cart.push(item);
        });

        console.log(user.cart);

        await user.save();
        res.json(user.cart);

    } catch (error) {
        console.error('Error reordering items:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
