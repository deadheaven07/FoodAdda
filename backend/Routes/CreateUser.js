const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
//jsonwebToken
const jwt = require("jsonwebtoken");

//jwt secret
const jwtSecret = "WelHarshRProject32charString$##"

//bcrypt
const bcrypt = require("bcryptjs");

// POST request to create a user
router.post("/createuser", [
    // Validate the email format
    body('email', 'Incorrect E-mail').isEmail(),
    // Validate that the name is at least 5 characters long
    body('name').isLength({ min: 5 }),
    // Validate that the password is at least 5 characters long
    body('password', 'Incorrect Password').isLength({ min: 5 })
], async (req, res) => {
    // Validate the request body against the defined validation rules
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Create a new user in the database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        await User.create({
            name: req.body.name,
            password: hashedPassword,
            email: req.body.email,
            location: req.body.location
        });
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});

// POST request to verify user login
router.post("/loginuser", [
    // Validate the email format
    body('email', 'Incorrect E-mail').isEmail(),
    // Validate that the password is at least 5 characters long
    body('password', 'Incorrect Password').isLength({ min: 5 })
], async (req, res) => {
    // Validate the request body against the defined validation rules
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const email = req.body.email;

    try {
        // Find the user in the database based on the provided email
        const userData = await User.findOne({ email });
        if (!userData) {
            // If no user is found, return an error
            return res.status(400).json({ error: "Try logging in with correct credentials" });
        }

        // Compare passwords
        const pwdCompare = await bcrypt.compare(req.body.password, userData.password);

        if (!pwdCompare) {
            // If the provided password doesn't match the stored password, return an error
            return res.status(400).json({ error: "Try logging in with correct credentials" });
        }

        // Create a JSON Web Token (JWT) for authentication
        const data = {
            user: {
                id: userData.id
            }
        }
        const authToken = jwt.sign(data, jwtSecret);

        // Login successful
        return res.json({ success: true, authToken: authToken });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});

module.exports = router;
