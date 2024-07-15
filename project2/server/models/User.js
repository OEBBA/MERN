const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    profession: { type: String, required: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    anyDisease: { type: Boolean, default: false },
    medicalCertificate: { type: String },
    registeredAt: { type: Date, default: Date.now },
    appointment:
    {
        hospital: { type: String },
        vaccine: { type: String, required: true },
        dosesRequired: { type: Number, required: true },
        scheduledDate: { type: Date },
        chargesPaid: { type: Boolean, default: false },
        vaccinated: { type: Boolean, default: false }
    },
    approval: { type: String }
});

module.exports = mongoose.model('User', userSchema);
