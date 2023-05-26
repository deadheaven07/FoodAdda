// Importing the mongoose library
const mongoose = require('mongoose');

// Destructuring the Schema object from mongoose
const { Schema } = mongoose;

// Creating a new UserSchema using the Schema object
const UserSchema = new Schema({
    // Defining the name field as a required string
    name: {
        type: String,
        required: true
    },
    // Defining the location field as a required string
    location: {
        type: String,
        required: true
    },
    // Defining the email field as a required string
    email: {
        type: String,
        required: true
    },
    // Defining the password field as a required string
    password: {
        type: String,
        required: true
    },
    // Defining the date field as a Date type with a default value of the current date and time
    date: {
        type: Date,
        default: Date.now
    },
})

// Exporting the UserSchema model as 'user'
module.exports = mongoose.model('user', UserSchema)
