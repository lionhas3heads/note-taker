const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

const api = require('./routes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

// localhost:3001
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (req, res) => {
    res.status(404).json({ message: "404: Page Not Found!"});
});

app.listen(PORT, () => {
    console.log(`Express server listening at http://localhost:${PORT}`);
});
