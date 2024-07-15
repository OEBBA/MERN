const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Vaccine = require('./models/Vaccine');
const Hospital = require('./models/Hospital');
const User = require('./models/User');
const Appointment = require('./models/Appointment');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect('mongodb+srv://otoi:Sakurafan1!@cluster0.xjtkuqk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', dbOptions)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });


app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.post('/api/vaccines', async (req, res) => {
    const { name, type, price, sideEffects, origin, dosesRequired, strainsCovered } = req.body;

    try {
        const newVaccine = new Vaccine({ name, type, price, sideEffects, origin, dosesRequired, strainsCovered });
        await newVaccine.save();
        res.status(201).json(newVaccine);
    } catch (error) {
        console.error('Error adding vaccine:', error);
        res.status(500).json({ error: 'Failed to add vaccine' });
    }
});

app.get('/api/hospitals', async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        res.json(hospitals);
    } catch (error) {
        console.error('Error fetching hospitals:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/approve', async (req, res) => {
    const { userId, hospitalId, vaccineId, appointmentTime } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const hospital = await Hospital.findById(hospitalId);
        if (!hospital) return res.status(404).json({ error: 'Hospital not found' });

        const vaccine = await Vaccine.findById(vaccineId);
        if (!vaccine) return res.status(404).json({ error: 'Vaccine not found' });

        const newAppointment = new Appointment({
            user: userId,
            hospital: hospitalId,
            vaccine: vaccineId,
            appointmentTime
        });

        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        console.error('Error approving:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/vaccinated', async (req, res) => {
    try {
        const appointments = await Appointment.find({ status: 'Vaccinated' }).populate('user').populate('vaccine');
        res.json(appointments);
    } catch (error) {
        console.error('Error fetching vaccinated persons:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/vaccines/register', async (req, res) => {
    const { name, type, price, sideEffects, origin, dosesRequired, otherInfo } = req.body;

    try {
        let vaccine = await Vaccine.findOne({ name });
        if (!vaccine) {
            vaccine = new Vaccine({ name, type, price, sideEffects, origin, dosesRequired, otherInfo });
            await vaccine.save();
            res.status(201).json(vaccine);
        } else {
            res.status(400).json({ error: 'Vaccine already registered' });
        }
    } catch (error) {
        console.log('Error registering vaccine:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/users/register', async (req, res) => {
    const { name, age, profession, contact, address, gender, disease, appointment } = req.body;
    approval = 'Pending';

    try {
        let user = await User.findOne({ contact });
        if (!user) {
            user = new User({ name, age, profession, contact, address, gender, disease, appointment, approval });
            await user.save();
            res.status(201).json(user);
        } else {
            res.status(400).json({ error: 'User already registered' });
        }
    } catch (error) {
        console.log('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/users/approve/:contact', async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            { contact: req.params.contact },
            { approval: 'Approved' },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error approving user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/users/reject/:contact', async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            { contact: req.params.contact },
            { approval: 'Rejected' },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error rejecting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.post('/api/users/reject/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { approval: 'Rejected' }, { new: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error rejecting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/appointments', async (req, res) => {
    const { userId, hospitalId, vaccineId, appointmentTime } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const hospital = await Hospital.findById(hospitalId);
        if (!hospital) return res.status(404).json({ error: 'Hospital not found' });

        const vaccine = await Vaccine.findById(vaccineId);
        if (!vaccine) return res.status(404).json({ error: 'Vaccine not found' });

        const newAppointment = new Appointment({
            user: userId,
            hospital: hospitalId,
            vaccine: vaccineId,
            appointmentTime,
            status: 'Scheduled'
        });

        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        console.error('Error scheduling appointment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/appointments/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const appointments = await Appointment.find({ user: userId }).populate('hospital').populate('vaccine');
        res.json(appointments);
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/reports', async (req, res) => {
    try {
        res.json({ message: 'Reports endpoint' });
    } catch (error) {
        console.error('Error generating reports:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
