// Importing the necessary modules
const express = require('express');
const mongoose = require('mongoose');

// Creating an Express application
const app = express();

// Setting the port to 5000
const port = 5000;

// Importing the connectToMongoDB function from "./db" and invoking it
const mongoDB = require("./db");
mongoDB();

// Setting up CORS headers to allow requests from "http://localhost:3000"
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    );
    next();
});

// Parsing JSON data in request bodies
app.use(express.json());

// Mounting the "/api" route handlers for creating a user and displaying data
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));

// Handling a GET request to the root URL ("/") and sending a response
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Starting the Express server and listening on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
