const express = require('express');

const app = express();

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a route for the "/about" URL
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});