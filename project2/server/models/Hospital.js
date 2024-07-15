const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    type: { type: String, enum: ['Govt', 'Private'], required: true },
    charges: { type: Number, required: true }
});

module.exports = mongoose.model('Hospital', hospitalSchema);
