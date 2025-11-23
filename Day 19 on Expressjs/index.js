// here we can create a express js based webserver for demonstrating webserver
// creating a @api recordId;
// defining app.get()
// defining app.listen()
// executeing the file


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Express.js!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});