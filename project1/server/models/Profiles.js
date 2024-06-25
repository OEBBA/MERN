const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    username: String,
    password: String,
    cart: Array,
    orders: Array,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Profile', profileSchema);
