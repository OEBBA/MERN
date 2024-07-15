const mongoose = require('mongoose');
const Hospital = require('./models/Hospital');

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect('mongodb+srv://otoi:Sakurafan1!@cluster0.xjtkuqk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', dbOptions)
    .then(() => {
        console.log('MongoDB connected');
        return addHospitals();
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

async function addHospitals() {
    const hospitalsData = [
        { name: 'General Hospital', location: '123 Main St', capacity: 200, type: 'Govt', charges: 1000 },
        { name: 'City Hospital', location: '456 Elm St', capacity: 150, type: 'Private', charges: 2000 },
        { name: 'County Hospital', location: '789 Oak St', capacity: 300, type: 'Govt', charges: 1500 }
    ];

    try {
        for (const hospitalData of hospitalsData) {
            const hospital = new Hospital(hospitalData);
            await hospital.save();
        }
        console.log('Hospitals added successfully');
    } catch (error) {
        console.error('Error adding hospitals:', error);
    } finally {
        await mongoose.connection.close();
        console.log('MongoDB connection closed');
    }
}
