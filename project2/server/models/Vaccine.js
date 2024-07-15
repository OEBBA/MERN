const mongoose = require('mongoose');

const vaccineSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    sideEffects: String,
    origin: String,
    dosesRequired: Number,
    otherInfo: String,
});

const Vaccine = mongoose.model('Vaccine', vaccineSchema);

module.exports = Vaccine;
