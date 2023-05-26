// Importing the mongoose library
const mongoose = require('mongoose');

// MongoDB connection string
const mongoURI = 'mongodb+srv://hrwanshi30:Collegede1hi@cluster0.rwq4r4o.mongodb.net/foodAdda?retryWrites=true&w=majority'; // db:foodAdda

// Function to connect to MongoDB
const connectToMongoDB = async () => {
    try {
        // Connect to the MongoDB database using the provided connection string
        await mongoose.connect(mongoURI, { useNewUrlParser: true });

        // Print a success message if the connection is successful
        console.log('Connected to the database');

        // Fetch data from the 'foodData' collection
        mongoose.connection.db.collection('foodData').find({}).toArray(async function (err, data) {
            if (err) {
                // Print an error message if there is an error fetching data
                console.log(err);
            } else {
                // Store the fetched data in the global variable 'foodData'
                global.foodData = data;

                // Fetch data from the 'foodCategory' collection
                mongoose.connection.db.collection('foodCategory').find({}).toArray(function (err, catData) {
                    if (err) {
                        // Print an error message if there is an error fetching category data
                        console.log(err);
                    } else {
                        // Store the fetched category data in the global variable 'foodCategory'
                        global.foodCategory = catData;
                    }
                });
            }
        });
    } catch (err) {
        // Print an error message if there is an error connecting to the database
        console.error('Database connection error:', err);
    }
};

// Export the connectToMongoDB function
module.exports = connectToMongoDB;
