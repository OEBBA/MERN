const express = require('express');
const router = express.Router();
const fs = require('fs');
const util = require('util');

router.get('/', (req, res) => {
    fs.readFile('studentInfo.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error' });
        } else {
            const students = JSON.parse(data);
            res.json(students);
        }
    });
});

module.exports = router;
