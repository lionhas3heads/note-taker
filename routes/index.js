const router = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../utils/fsUtils');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res ) => {
    res.sendFile(path.join(__dirname, '..', '/db/db.json'));
});

router.post('/notes', (req, res) => {
    if (req.body) {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.status(200).json('Note Added');
    } else res.status(500).errored('Error in adding note.');
});

module.exports = router;
