const express = require('express');
const app = express();
const studentRoutes = require('./routes/student');
const bodyParser = require('body-parser');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Assessment 3');
});

app.use('/student', studentRoutes);


app.post('/getStudentDetails', (req, res) => {
    const { name, age, address, session } = req.body;

    const student = {
        name,
        age,
        address,
        session
    };

    fs.writeFile('studentInfo.json', JSON.stringify(student), (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error occured.' });
        } else {
            console.log('Saved.');
            res.json({ message: 'Student information saved successfully.' });
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
