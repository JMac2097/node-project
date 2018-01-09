//grab express
var express = require('express');

//create an express app
var app = express();

// Create an express route for the home page
// http://localhost:8000/
app.get('/', function(req, res) {
    res.sendFile(__dirname + 'index.html');
});

// Start the server on port 8000

