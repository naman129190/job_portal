const express = require('express');
const bodyParser = require('body-parser');

// Import required modules

// Create an instance of Express
const app = express();

// Configure middleware
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});