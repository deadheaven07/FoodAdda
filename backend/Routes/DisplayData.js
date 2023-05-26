const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// POST request handler for '/foodData' endpoint
router.post('/foodData', async (req, res) => {
    try {
        // Fetch data from the 'foodData' and 'foodCategory' collections
        const fetchedData = await mongoose.connection.db.collection('foodData', 'foodCategory').find({}).toArray();
        res.send(fetchedData); // Send the fetched data as the response
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error"); // If an error occurs, send a 500 status code with an error message
    }
});

module.exports = router; // Export the router for use in other files
